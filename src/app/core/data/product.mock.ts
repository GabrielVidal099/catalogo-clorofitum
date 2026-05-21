import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Shampoo Curinga',
    category: 'Shampoo',
    line: 'Curinga',
    image: 'assets/images/products/shampoo-curinga.png',
    description: 'Produto indicado para limpeza e cuidado diário dos fios.',
    features: ['Limpeza suave', 'Brilho', 'Uso diário'],
  },
  {
    id: 2,
    name: 'Máscara Fonte da Juventude',
    category: 'Máscara',
    line: 'Fonte da Juventude',
    image: 'assets/images/products/mascara-fonte-da-juventude.png',
    description: 'Máscara indicada para tratamento e hidratação dos fios.',
    features: ['Hidratação', 'Maciez', 'Nutrição'],
  },
];