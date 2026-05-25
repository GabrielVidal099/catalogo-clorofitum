import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  
   {
        id: 1,
        title: "Shampoo Ouro 24k Gold",
        category: "Promoções",
        price: "De R$ 64,31",
        price_descont: "Por R$ 30,00",
        image: "assets/907 - 05 - Tratamento iluminado.png",
        description: "Enriquecido com Vitamina C e Ácido Hialurônico, este sérum proporciona luminosidade imediata e hidratação profunda."
    },
     {
        id: 2,
        title: "Batom Matte Veludo",
        category: "Ouro",
        price: "De R$ 45,00",
        price_descont: "Por R$ 30,00",
        image: "https://static.clorofitum.com.br/produto/20250602153143_5799994201_D.webp",
        description: "Alta pigmentação e acabamento aveludado que dura o dia todo sem ressecar os lábios."
    },
      {
        id: 3,
        title: "Máscara Capilar Nutritiva",
        category: "Coffee",
        price: "R$ 62,50",
         price_descont: " ",
        image: "https://static.clorofitum.com.br/produto/20250610142051_4622995378_D.webp",
        description: "O Glicopower Hair Mask é um suplemento capilar de alta performance."
  },
    
  
];