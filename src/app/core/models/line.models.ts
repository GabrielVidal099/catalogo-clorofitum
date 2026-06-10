// Define o que é o LineName
export enum LineName {
  MINHA_CURA = 'Minha Cura',
  BRAZILIAN_COFFEE = 'Brazilian Coffee',
  SEGREDO_DA_REALEZA = 'Segredo da Realeza',
  OLEOS_RENOVADORES = 'Óleos Renovadores',
  MINAS_PRECIOSAS = 'Minas Preciosas',
  NAMORADAS_DE_MINAS = 'Namoradas de Minas',
  CURINGA = 'Curinga',
  KERACEUTIC = 'keraceutic',
  BOTULINICA = 'Botulínica Capilar',
  CAUTERIZADOR = 'Cauterizador Capilar',
  BRUTO = 'Bruto Rústico e Sistemático'
}

export interface Information {
  name: string;
  description: string;
}

export interface Product {
  id: number;
  nameproduct: string;
  description: string;
  cor: string;
  category: string;
  price: string;
  price_descont: string;
  imageCard: string;
  imageCard2: string;
  imageCard3: string;
  imageCard4?: string; 
  image: string;
  information?: Information[];
  usage?: string[];
  activeImage?: string;
}

export interface Line {
  id: number;
  name: LineName | string; // Agora o TS sabe o que é LineName!
  description: string;
  coverImage: string;
  cor: string;
  usage?: string[];
  information?: Information[];
  products: Product[];
}