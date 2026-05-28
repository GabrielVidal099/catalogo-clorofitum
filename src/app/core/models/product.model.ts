export interface ProductInformation {
  name: string;
  description: string;
}

export interface Product {
  id: number;
  title: string;
  category: string;
  price: string;
  price_descont: string;
  image: string;
  description: string;
  line: string;
  imageCard: string;
  usage?: string[];
  lineProducts?: [];
  information?: ProductInformation[];
}