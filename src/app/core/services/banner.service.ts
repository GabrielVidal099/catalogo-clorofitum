import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// ⚠️ Lembre-se de ajustar o caminho desse import para onde está o seu arquivo de configuração!
import { SUPABASE_CONFIG } from '../supabase.config'; 

// Tipagem do Banner para o TypeScript te ajudar com autocompletar
export interface Banner {
  id: number;
  titulo: string;
  imageUrl: string;
  link_destino: string;
  ativo: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private http = inject(HttpClient);

  // Função que busca os banners no Supabase
  getBanners(): Observable<Banner[]> {
    // A URL já filtra (?ativo=eq.true) para trazer SÓ os banners que estão ativos
    const url = `${SUPABASE_CONFIG.URL}/rest/v1/banners?select=*&ativo=eq.true`;
    
    // Configura as chaves de acesso do Supabase
    const headers = new HttpHeaders({
      'apikey': SUPABASE_CONFIG.ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_CONFIG.ANON_KEY}`
    });

    return this.http.get<Banner[]>(url, { headers });
  }
}