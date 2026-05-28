import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Black Coffee Barber Shampoo 300ml",
    category: "Black Coffee",
    line: 'black Coffe',
    price: "R$ 69,90",
    price_descont: "",
    imageCard: "https://static.clorofitum.com.br/produto/20250616120914_5669994331_D.webp",
    image: "https://catalogo-clorofitum.clorofitum.com.br/wp-content/uploads/2025/08/EU-ME-QUERO-HOT-ROXO.png",
    description: "Shampoo multifuncional para higienizar barba, cabelo e bigode com praticidade na rotina diária.",
    usage: [
      "Com a pele limpa e seca, aplique o produto na região desejada.",
      "Espalhe com movimentos suaves até completa absorção.",
      "Pode ser utilizado a qualquer hora do dia."
    ],
    information: [
      { name: "Óleo de Café", description: "Cultivado nas montanhas de Minas Gerais, possui elevada capacidade antioxidante, antienvelhecimento e protetora." },
      { name: "Biotina (Vitamina B7)", description: "Auxilia na regeneração celular, reduz irritações e descamações e promove uma aparência mais saudável." },
      { name: "Manteiga de Oliva", description: "Rica em vitamina E com ação regeneradora e de antienvelhecimento precoce, deixando a pele macia e protegida." }
    ]
  },
  {
    id: 2,
    title: "Black Coffee Barber Leave-in Condicionador 230g",
    category: "Black Coffee",
    line: 'black Coffe',
    price: "R$ 49,90",
    price_descont: "",
    imageCard: '',
    image: "https://catalogo-clorofitum.clorofitum.com.br/wp-content/uploads/2025/08/logo_colecao_namoradas_de_minas_1-1024x615.png",
    description: "Leave-in para cabelos, barba e bigode que condiciona, protege e fecha as cutículas dos fios. Pode ser usado com ou sem enxágue.",
    information: [
      { name: "Óleo de Café", description: "Antioxidante e protetor, prolonga o brilho e a maciez dos fios." },
      { name: "Pantenol", description: "Hidrata profundamente e facilita o penteado, reduzindo o frizz." }
    ]
  },
  {
    id: 3,
    title: "Brazilian Coffee Shampoo 300ml",
    category: "Brazilian Coffee",
    line: 'brazilian coffe',
    price: "R$ 69,90",
    price_descont: "",
    imageCard: '',
    image: "https://catalogo-clorofitum.clorofitum.com.br/wp-content/uploads/2025/08/logo_oleos_renovadores-1024x587.png",
    description: "Promove limpeza suave e nutritiva para cabelos lisos, naturais ou alisados. Prolonga o efeito liso e protege os fios contra danos externos.",
    information: [
      { name: "Extrato de Café Brasileiro", description: "Rico em antioxidantes, fortalece os fios e prolonga o efeito do alisamento." },
      { name: "Queratina Hidrolisada", description: "Reconstrói a estrutura capilar, devolvendo força e brilho aos fios." }
    ]
  },
  {
    id: 4,
    title: "Brazilian Coffee Mask 500g",
    category: "Brazilian Coffee",
    line: 'brazilian coffe',
    price: "R$ 96,90",
    price_descont: "",
    imageCard: '',
    image: "https://catalogo-clorofitum.clorofitum.com.br/wp-content/uploads/2025/08/logo_colecao_minas_preciosa-1024x918.png",
    description: "Máscara com tratamento condicionante intenso para cabelos lisos. Hidrata, nutre e protege os fios, reduzindo o frizz.",
    information: [
      { name: "Extrato de Café Brasileiro", description: "Antioxidante natural que protege e fortalece os fios durante o tratamento." },
      { name: "Óleo de Argan", description: "Nutre profundamente, controla o frizz e adiciona brilho intenso." }
    ]
  },
  {
    id: 5,
    title: "Cauterizador Capilar Óleo de Abacate e Óleo de Tamanu 35ml",
    category: "Cauterizador",
    line: 'cauterizador',
    price: "R$ 53,90",
    price_descont: "",
    imageCard: '',
    image: "https://catalogo-clorofitum.clorofitum.com.br/wp-content/uploads/2025/08/fonte-da-juventude-1024x1024.png",
    description: "Produto multifunção que promove umectação profunda, reposição de lipídios, selagem e restauração dos fios. Protetor térmico e redutor de frizz.",
    information: [
      { name: "Óleo de Abacate", description: "Nutrição com ação regeneradora e suavizante, alivia irritações e melhora a textura." },
      { name: "Óleo de Tamanu", description: "Ativo cicatrizante e regenerador que sela as cutículas e protege contra danos térmicos." }
    ]
  },
  {
    id: 6,
    title: "KIT CICATRI CURA",
    category: "Promoções",
    line: 'cicatri',
    price: "R$ 259,90",
    price_descont: "",
    imageCard: '',
    image: "https://catalogo-clorofitum.clorofitum.com.br/wp-content/uploads/2025/08/curinga-logo.jpg",
    description: "Reestrutura a fibra capilar de cabelos danificados, quebradiços ou porosos, devolvendo força, elasticidade e resistência desde o primeiro uso.",
    information: [
      { name: "Proteínas Hidrolisadas", description: "Penetram na fibra capilar reconstruindo a estrutura interna dos fios." },
      { name: "Ceramidas", description: "Selam as cutículas, reduzem a porosidade e protegem contra agressões externas." }
    ]
  },
  {
    id: 7,
    title: "Perfume Estrada Real 50ml",
    category: "Perfumes",
    line: 'colecao minas preciosas',
    price: "R$ 159,90",
    price_descont: "",
    imageCard: '',
    image: "https://catalogo-clorofitum.clorofitum.com.br/wp-content/uploads/2025/08/logo_cicatri_sem_sombra-1024x204.png",
    description: "Fragrância amadeirada elegante e duradoura para homens que valorizam presença e estilo. Intenso, sofisticado e marcante.",
    information: [
      { name: "Notas de Saída", description: "Bergamota e especiarias que abrem a fragrância com frescor e vivacidade." },
      { name: "Notas de Fundo", description: "Madeira de cedro e âmbar que fixam o perfume com elegância e sensualidade." }
    ]
  },
  {
    id: 8,
    title: "Hidratante Desodorante Perfume em Creme Cabelo e Corpo Benzin 190g",
    category: "Hidratantes Corporais",
    line: 'colecao namorada de minas',
    price: "R$ 64,31",
    price_descont: "R$ 30,00",
    imageCard: '',
    image: "https://catalogo-clorofitum.clorofitum.com.br/wp-content/uploads/2025/08/rotulo2_socorro_antibrancos-571x1024.png",
    description: "Perfuma e cuida dos cabelos e do corpo, proporcionando sensação única em cada toque. Traduz o carinho e o charme das mulheres de Minas Gerais.",
    information: [
      { name: "Óleo de Rosa Mosqueta Ozonizado", description: "Rico em vitamina C, ajuda a clarear manchas, estimula colágeno e elastina, promovendo firmeza e efeito antienvelhecimento." },
      { name: "Manteiga de Karité", description: "Hidratação profunda e duradoura, deixando a pele e os cabelos macios e perfumados." }
    ]
  },
  {
    id: 9,
    title: "Curinga Multifunção 8 em 1 Creme 500g",
    category: "Máscara de Tratamento",
    line: 'coringa',
    price: "R$ 96,90",
    price_descont: "",
    imageCard: '',
    image: "https://catalogo-clorofitum.clorofitum.com.br/wp-content/uploads/2025/08/logo_glicopower-1024x230.png",
    description: "Atua como máscara, condicionador, protetor térmico, defrizzante e ativador de cachos. Deixa os cabelos hidratados, protegidos e impecáveis.",
    information: [
      { name: "Complexo de Proteínas", description: "Fortalece e reconstrói os fios danificados, devolvendo elasticidade e brilho." },
      { name: "Óleo de Argan", description: "Nutre, controla o frizz e protege os cabelos do calor e das agressões diárias." }
    ]
  },
  {
    id: 10,
    title: "CTI Pré e Pós Química Shampoo 300ml",
    category: "Shampoo",
    line: 'cti',
    price: "R$ 69,90",
    price_descont: "",
    imageCard: '',
    image: "https://catalogo-clorofitum.clorofitum.com.br/wp-content/uploads/2025/08/logo_keraceutic-1024x239.png",
    description: "Linha Home Care com a qualidade profissional Clorofitum. Oferece os primeiros socorros aos cabelos, rejuvenescendo os folículos e proporcionando brilho após múltiplos processos químicos.",
    information: [
      { name: "Queratina Hidrolisada", description: "Reconstrói a fibra capilar danificada por processos químicos, devolvendo força e maciez." },
      { name: "Vitaminas do Complexo B", description: "Nutrem e protegem os fios, estimulando a saúde do couro cabeludo." }
    ]
  }
];