import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Line } from '../models/line.models'; // Ajuste o caminho se necessário
import { SUPABASE_CONFIG } from '../supabase.config'; // Ajuste o caminho do Passo 1

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  
  // [1] Criamos um sinal privado para armazenar os dados vivos do banco
  private linesSignal = signal<Line[]>([]);

  // [2] Expomos o sinal como somente leitura para os componentes consumirem com segurança
  get lines() {
    return this.linesSignal.asReadonly();
  }

  constructor() {
    // Carrega os produtos automaticamente assim que o serviço é iniciado
    this.loadProducts();
  }

  /**
   * Faz a busca das linhas e seus respectivos produtos direto no Supabase
   */
loadProducts(): void {
    const headers = new HttpHeaders({
      'apikey': SUPABASE_CONFIG.ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_CONFIG.ANON_KEY}`
    });

    const url = `${SUPABASE_CONFIG.URL}/rest/v1/linhas?select=*,produtos(*)`;

    this.http.get<any[]>(url, { headers }).subscribe({
      next: (dadosDoBanco) => {
        console.log('=== DADOS VINDOS DO SUPABASE ===', dadosDoBanco);
        // ====================================================================
        // TRUQUE DE ENGENHARIA: Mapeia 'produtos' do banco para 'products' do HTML
        // ====================================================================
        const linhasMapeadas = dadosDoBanco.map(linha => ({
          ...linha,
          products: linha.produtos || [] // Se vier 'produtos', joga dentro de 'products'
        }));

        // Atualiza o sinal com os dados perfeitamente ajustados
        this.linesSignal.set(linhasMapeadas);
      },
      error: (erro) => {
        console.error('Erro crítico ao buscar produtos do Supabase:', erro);
      }
    });
  }
}