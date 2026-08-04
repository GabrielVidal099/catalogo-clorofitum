// Define o que é o LineName
export interface Shade {
  code: string;
  name: string;
  colorHex?:string;
  imageUrl?: string;
  priceOverride?:string;
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
  shades?: Shade[];
  selectedShade?: Shade;
}

export interface Line {
  id: number;
  name: string; // Agora o TS sabe o que é LineName!
  description: string;
  coverImage: string;
  cor: string;
  usage?: string[];
  information?: Information[];
  products: Product[];
}