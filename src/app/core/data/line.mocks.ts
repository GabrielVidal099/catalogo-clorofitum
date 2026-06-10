// data/line.mocks.ts
import { Line, LineName } from '../models/line.models';

export const LINES: Line[] = [
  {
    id: 1,
    name: LineName.MINHA_CURA,
    description: 'Rituais de autocuidado que transformam momentos simples em experiências especiais.',
    coverImage: 'assets/Eu me quero.webp',
    cor: '#6b3fa0',
    usage: [
      'Com a pele limpa e seca, aplique o produto na região desejada.',
      'Espalhe com movimentos suaves até completa absorção.',
      'Pode ser utilizado a qualquer hora do dia.'
    ],
    information: [
      { name: 'Óleo de Café', description: 'Cultivado nas montanhas de Minas Gerais, possui elevada capacidade antioxidante, antienvelhecimento e protetora.' },
      { name: 'Biotina (Vitamina B7)', description: 'Auxilia na regeneração celular, reduz irritações e descamações e promove uma aparência mais saudável.' },
      { name: 'Manteiga de Oliva', description: 'Rica em vitamina E com ação regeneradora e de antienvelhecimento precoce, deixando a pele macia e protegida.' },
      { name: 'Pantenol', description: 'Hidrata profundamente e facilita o penteado, reduzindo o frizz.' }
    ],
    products: [
      {
        id: 1,
        nameproduct: 'Mãos e Pé',
        description: 'Eu me Quero! Eu me amo!',
        cor: '#6b3fa0',
        category: 'Corporal',
        price: 'R$ 45,90',
        price_descont: '',
        imageCard: 'https://loja.clorofitum.com.br/produtos/eu_me_quero_maos_e_pes_85g_frente_1000x1000.jpg',
        imageCard2: '',
        imageCard3: '',
        image: 'assets/EU ME QUERO KIT CAPA.png'
      },
      {
        id: 2,
        nameproduct: 'Pés',
        description: 'Leave-in para cabelos, barba e bigode que condiciona, protege e fecha as cutículas dos fios.',
        cor: '#6b3fa0',
        category: 'Minha Cura',
        price: 'R$ 45,90',
        price_descont: '',
        imageCard: 'https://loja.clorofitum.com.br/produtos/eu_me_quero_pes_85g_frente_1000x1000.jpg',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250616120846_1157998843_DM.webp',
        imageCard3: '',
        image: 'https://catalogo-clorofitum.clorofitum.com.br/wp-content/uploads/2025/08/logo_colecao_namoradas_de_minas_1-1024x615.png'
      }
    ]
  },
  {
    id: 2,
    name: LineName.BRAZILIAN_COFFEE,
    description: 'Linha capilar premium com ativos do café brasileiro, que fortalece, protege e prolonga o efeito liso dos fios.',
    coverImage: 'assets/Brazilian Coffee.webp',
    cor: '#4a2c0a',
    usage: [
      'Lave os cabelos com o shampoo.',
      'Aplique a Máscara massageando os fios.',
      'Na hidratação, deixe agir por 15 minutos. Para condicionar, deixe por apenas 2 minutos.',
      'Deixe secar naturalmente ou utlize secador.'
    ],
    information: [
      { name: 'Extrato de Café Brasileiro', description: 'Rico em antioxidantes, fortalece os fios e prolonga o efeito do alisamento.' },
      { name: 'Queratina Hidrolisada', description: 'Reconstrói a estrutura capilar, devolvendo força e brilho aos fios.' },
      { name: 'Óleo de Argan', description: 'Nutre profundamente, controla o frizz e adiciona brilho intenso.' }
    ],
    products: [
      {
        id: 3,
        nameproduct: 'Brazilian Coffee Mask 500g',
        description: 'Promove limpeza suave e nutritiva para cabelos lisos, naturais ou alisados.',
        cor: '#4a2c0a',
        category: 'Capilar',
        price: 'R$ 96,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250602150829_2979997021_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250602151102_835999165_DM.webp',
        imageCard3: 'https://static.clorofitum.com.br/produto/multifotos/20250609092516_1493998507_DM.webp',
        image: ''
      },
      {
        id: 4,
        nameproduct: 'Brazilian Coffee Shampoo 300ml',
        description: 'Máscara com tratamento condicionante intenso para cabelos lisos.',
        cor: '#4a2c0a',
        category: 'Capilar',
        price: 'R$ 69,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250602150415_3197996803_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250604142346_6251993749_DM.webp',
        imageCard3: 'https://static.clorofitum.com.br/produto/multifotos/20250602150533_1678998322_DM.webp',
        image: ''
      },
      {
        id: 5,
        nameproduct: 'Brazilian Coffee Volume Reducer 1000ml',
        description: '',
        cor: '#4a2c0a',
        category: 'Capilar',
        price: 'R$ 389,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250602150132_9442990558_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250602150215_4352995648_DM.webp',
        imageCard3: 'https://static.clorofitum.com.br/produto/multifotos/20250603115300_9569990431_DM.png',
        image: ''
      },
      {
        id: 6,
        nameproduct: 'Brazilian Coffee Volume Reducer 150ml',
        description: '',
        cor: '#4a2c0a',
        category: 'Capilar',
        price: 'R$ 71,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250602151300_4126995874_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250604142037_7795992205_DM.webp',
        imageCard3: 'https://static.clorofitum.com.br/produto/multifotos/20250602151407_6616993384_DM.webp',
        image: ''
      },
      {
        id: 7,
        nameproduct: 'BEM LISINHO CLOROFITUM 150ML',
        description: '',
        cor: '#4a2c0a',
        category: 'Capilar',
        price: 'R$ 99,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20260407135712_7066992934_D.png',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20260407135813_9774990226_DM.png',
        imageCard3: 'https://static.clorofitum.com.br/produto/multifotos/20260407162019_6873993127_DM.png',
        image: ''
      }
    ]
  },
  {
    id: 3,
    name: LineName.SEGREDO_DA_REALEZA,
    description: 'Segredos das rainhas egípicias renascem na linha.O segredo da Realeza.Com ativos milenares como babosa egípicia, argila bracam, leite vegetal e Rosa de Jericó, para resultados surpreendentes',
    coverImage: 'assets/O Segredo da Realeza.webp',
    cor: '#2e7d32',
    usage: [
      'Para Higienizar , condicionar e nutrir: 1º Lave os cabelos com o Shampoo O Segredo da Realeza. 2º Aplique o Serúm Condicionador O Segredo da Realeza por toda a extenão dos fios. Deixe agir de 3a5 minutos; Massageie e Enxágue. 3º Retire o excesso de água com a toalha e aplique o seu finzalidor capilar Clorofitum preferido por toda a extensão dos fios.Penteie,Deixe secar naturalmente ou finalize como desejar',
      'Para Hidratar profundamente: 1º Lave os cabelos com o Shampoo O Segredo da Realeza. 2º Retire o excesso de água com a toalhe e aplique a Máscara Concentrada O Segredo da Realeza por todad a extensão dos fios. Envolva os cabelos em uma touca plástica e deixe agir de 10 a 15 minutos e enxágue. 3º Retire o excesso de água com a toalha e aplique o seu finalizador capilar Clorofitum preferido por toda a extensão dos fios. Penteie. Deixe secar naturalmente ou finalizae como desejar',
      'Para Finalizar e perfurmar: borrife porm topdad a extensão dos fios, em atingir o couro cabeludo, sempre que sentir necessidade'
    ],
    information: [],
    products: [
      {
        id: 8,
        nameproduct: 'MASCARA CONCENTRADA O SEGREDO DA REALEZA 150G',
        description: '',
        cor: '#00ff2a',
        category: 'Capilar',
        price: 'R$ 69,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20251128121120_3517996483_D.png',
        imageCard2: '',
        imageCard3: '',
        image: ''
      },
      {
        id: 9,
        nameproduct: 'PERFUME CAPILAR O SEGREDO DA REALEZA 15ML',
        description: '',
        cor: '#00ff2a',
        category: 'Capilar',
        price: 'R$ 39,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20260303105100_3620996380_D.webp',
        imageCard2: '',
        imageCard3: '',
        image: ''
      },
      {
        id: 10,
        nameproduct: 'SERUM CONDICIONADOR O SEGREDO DA REALEZA 240G',
        description: '',
        cor: '#00ff2a',
        category: 'Capilar',
        price: 'R$ 54,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20251128121050_6383993617_D.webp',
        imageCard2: '',
        imageCard3: '',
        image: ''
      },
      {
        id: 11,
        nameproduct: 'SHAMPOO O SEGREDO DA REALEZA 300ML',
        description: '',
        cor: '#00ff2a',
        category: 'Capilar',
        price: 'R$ 69,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20251128120524_7107992893_D.webp',
        imageCard2: '',
        imageCard3: '',
        image: ''
      }
    ]
  },
  {
    id: 4,
    name: LineName.OLEOS_RENOVADORES,
    description: 'Mix de óleos 100% vegetais para o corpo, cabelo e couro cabeludo.Hidratação, nutrição e umectação.',
    coverImage: 'assets/Óleos Renovadores.webp',
    cor: '#ff0000',
    usage: [
      'Pele: Coloque um pouco dos óleos na palma da mão e espalhe sobre a pele seca ou úmida. Não precisa enxaguar',
      'Cabelo: 1º- Coloque 2 gotas nas mãos e espalhe nos fios na finalização, 2º- Enriqueça a máscara capilar para potencializar a nutrição adicionadno 1/2 colher de café dos óleos renovadores para cada 2 colheres de sopa de uma máscara Clorofitum. 3º- Enriqueça o seu finzalizador capilar Clorofitum, para cabelos ressecados, adcicionadno gotas dos Óleos Renovadores. ',
      'Couro Cabeludo: Para umectação aplique algumas gotas dos óleos na região. Massageie, lave e hidrate com umas das linhas de tratamento Clorofitum.'
    ],
    information: [
      { name: 'Benefícios para a pele', description: '- Hidratação e nutrição. - Estímulo à produção de colágeno. - Ação anti-inflamatória. - Melhora da circulação sanguínea' },
      { name: 'benefícios para o cabelo', description: '- Hidratação (controla a perda de água). - Nutrição e umectação da fibra capilar com a reposição de nutrientes' },
      { name: 'benefícios para o couro caebludo', description: '- Melhora a circulação sanguínea que estimula o crescimento dos fios. - Combate o quadro de escamação' }
    ],
    products: [
      {
        id: 12,
        nameproduct: 'Óleos Renovadores 100ml',
        description: 'Reestrutura a fibra capilar de cabelos danificados, quebradiços ou porosos.',
        cor: '#c62828',
        category: 'Kit',
        price: 'R$ 99,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250602144517_7183992817_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250602144524_4782995218_DM.webp',
        imageCard3: 'https://static.clorofitum.com.br/produto/multifotos/20250603122148_7447992553_DM.webp',
        image: ''
      }
    ]
  },
  {
    id: 5,
    name: LineName.MINAS_PRECIOSAS,
    description: 'Fragrâncias e tratamentos inspirados na riqueza e elegância de Minas Gerais.',
    coverImage: 'assets/Minas Preciosa.webp',
    cor: '#b8860b',
    usage: [
      'Borrife a fragrância a uma distância de cerca de 15 centímetros da pele.',
      'Aplique em áreas de maior circulação (pulsos, pescoço e atrás das orelhas).'
    ],
    information: [],
    products: [
      {
        id: 13,
        nameproduct: 'Perfume Estrada Real 50ml',
        description: 'Fragrância amadeirada elegante e duradoura.',
        cor: '#b8860b',
        category: 'Perfumes',
        price: 'R$ 143,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250606140805_2468997532_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250606140816_2007997993_DM.webp',
        imageCard3: 'https://static.clorofitum.com.br/produto/multifotos/3030100400_2022-04-04_11_52_52_1_3030100400_1_DM.jpeg',
        image: 'https://static.clorofitum.com.br/produto/20250606140805_2468997532_D.webp',
        // Informações exclusivas do perfume adicionadas ao produto
        information: [
          { name: 'Família Olfativa', description: 'Citrico Amadeirado' },
          { name: 'Notas de Saída', description: 'Abacaxi,Lima cítrica,Bergamota' },
          { name: 'Notas de Fundo', description: 'Baunilha, Âmbar, Sãndalo ,Cedro, Almiscar, Musgo' }, 
          { name: 'Notas do corpo', description: 'Canela, Jasmim, Muguet, Flor de limoeiro '                                                                                 }
        ]
      },
      {
        id: 14,
        nameproduct: 'Perfume Joias de Minas 50ml',
        description: 'Uma fragrância floral intensa e misteriosa.',
        cor: '#b8860b',
        category: 'Perfumes',
        price: 'R$ 159,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250606140903_2578997422_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250606140921_8641991359_DM.webp',
        imageCard3: '',
        image: '',
        // Informações exclusivas do perfume adicionadas ao produto
        information: [
          { name: 'Família Olfativa', description: 'Oriental amadeirado' },
          { name: 'Notas de Saída', description: 'Mandarina, Flores brancas, Acordes Gustativo' },
          { name: 'Notas de Fundo', description: 'Especiarias, Sãndalo, Cedro' },
          { name: 'Notas de Corpo', description: 'Acorde marine, Patchouli, Amêndoas' }
        ]
      },
      {
        id: 15,
        nameproduct: 'Perfume Água de Minas 50 ml',
        description: 'Uma fragrância floral intensa e misteriosa.',
        cor: '#b8860b',
        category: 'Perfumes',
        price: 'R$ 127,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250606141039_579999421_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250606141049_2563997437_DM.webp',
        imageCard3: '',
        image: '',
        // Informações exclusivas do perfume adicionadas ao produto
        information: [
          { name: 'Família Olfativa', description: 'Frutal Floral' },
          { name: 'Notas de Saída', description: 'Maçã verde, Aquoso, Framboesa' },
          { name: 'Notas de Fundo', description: 'Musk e Baunilha' },
          { name: 'Notas de Corpo', description: 'Pêssego, jasmim e Pachouli' }
        ]
      },
      {
        id: 16,
        nameproduct: 'Perfume Segredo de Minas 50ml',
        description: 'Uma fragrância floral intensa e misteriosa.',
        cor: '#b8860b',
        category: 'Perfumes',
        price: 'R$ 159,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250606140952_2692997308_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250606141003_206999794_DM.webp',
        imageCard3: 'https://static.clorofitum.com.br/produto/multifotos/3030100300_2022-04-04_11_26_54_1_3030100300_1_DM.jpeg',
        image: '',
        // Informações exclusivas do perfume adicionadas ao produto
        information: [
          { name: 'Família Olfativa', description: 'Amadeirado' },
          { name: 'Notas de Saída', description: 'Pimenta, Mirra, Acorde Oud' },
          { name: 'Notas de Fundo', description: 'balsâmico^, Muguet, Lavanda' },
          { name: 'Notas de Corpo', description: 'Ãmbar, Guaiac, Cedro, Musk' }
        ]
      }
    ]
  },
  {
    id: 6,
    name: LineName.NAMORADAS_DE_MINAS,
    description: 'O charme e carinho das mulheres mineiras em produtos para corpo e cabelos.',
    coverImage: 'assets/Namoradas de Minas.webp',
    cor: '#ad1457',
    usage: [
      'Aplique nos cabelos e no corpo a quantidade desejada.',
      'Livre De: Parabenos;petrolatos;corantes;gordoras(componentes graxos)e ingredientes de origem animal'
    ],
    information: [
      { name: 'Para os cabelos', description: 'Perfuma e Hidrata; Proteje contra poluentes; Atua como protetores térmicos sendo seu uso recomendado antes da escovação; Possui ação antifrizz; Proporciona brilho e maciez.' },
      { name: 'Para a Pele', description: 'Perfuma e hidrata; protege contra poluentes; Protege contra microbiota; Acalma a pele; Regeneração celular; Pele firme e rejunvenescida.' }
    ],
    products: [
      {
        id: 17,
        nameproduct: 'Denguin',
        description: 'Perfuma e cuida dos cabelos e do corpo, proporcionando sensação única em cada toque.',
        cor: '#ad1457',
        category: 'Hidratantes Corporais',
        price: 'R$ 129,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250606165514_8045991955_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250130142211_338999662_DM.jpg',
        imageCard3: 'https://static.clorofitum.com.br/produto/multifotos/20250603092025_6532993468_DM.webp',
        image: ''
      },
       {
        id: 18,
        nameproduct: 'Hidratante Desodorante Perfume em Creme Cabelo e Corpo Benzin (190g)',
        description: 'Perfuma e cuida dos cabelos e do corpo, proporcionando sensação única em cada toque.',
        cor: '#ad1457',
        category: 'Hidratantes Corporais',
        price: 'R$ 109,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250603091741_4211995789_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250603092310_1258998742_DM.jpg',
        imageCard3: 'https://static.clorofitum.com.br/produto/multifotos/20250603091916_8647991353_DM.webp',
        image: ''
      },
       {
        id: 19,
        nameproduct: 'Hidratante Desodorante Perfume em Creme Cabelo e Corpo Docin (190g)',
        description: 'Perfuma e cuida dos cabelos e do corpo, proporcionando sensação única em cada toque.',
        cor: '#ad1457',
        category: 'Hidratantes Corporais',
        price: 'R$ 94,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250606165604_1549998451_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250130142247_1149998851_DM.jpg',
        imageCard3: 'https://static.clorofitum.com.br/produto/multifotos/20250603092134_6797993203_DM.webp',
        image: ''
      },
        {
        id: 20,
        nameproduct: 'Hidratante Desodorante Perfume em Creme Cabelo e Corpo Mozin (190g)',
        description: 'Perfuma e cuida dos cabelos e do corpo, proporcionando sensação única em cada toque.',
        cor: '#ad1457',
        category: 'Hidratantes Corporais',
        price: 'R$ 94,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250603092223_3439996561_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250130142259_6996993004_DM.jpg',
        imageCard3: 'https://static.clorofitum.com.br/produto/multifotos/20250603092232_9738990262_DM.webp',
        image: ''
      },
     
    ]
  },
  {
    id: 7,
    name: LineName.CURINGA,
    description: 'A linha Curinga 8 em 1 irá revolucionar o cuidado com os seus cabelos, oferecendo uma solução multifuncional!.',
    coverImage: 'assets/Curinga 8 em 1.webp',
    cor: '#e6c400',
    usage: [
      'Como condicionador,para emoliência e facilitar o desembaraço:', 
      'Passo 1, Lave os cabelos com o Shampoo Curinga. Passo 2: Aplique o creme Curinga nos cabelos e massageie por alguns instantes. Passo 3: Enxague normalmente. Passo 4: Finalze como desejar, com o uso do secador ou prancha.',
      'Como máscara de tratamento, para hidratar e nutrir:',
      'Passo 1: Lave os cabelos com o Shampoo Curinga. Passo 2: Apliqeu o Creme Curinga nos cabelos e massageie mecha a mecha. Passo 3: Após a aplicação, deixe agir por 15 minutos. Passo 4: Enxague bem e finalize como desejar com o uso dos secador ou prancha',
      'Como finalizador sem enxágue e defrizante:',
      'Passo 1: Lave os caeblos com o Shampoo Curinga. Passo 2: Aplique o Creme Curinga nios cabelos e massageie mecha a mecha. Passo 3: Após a aplicação, deixe agir por 15 minutos. Passo 4: Enxágue bem e finalize como desejar, com uso do secador ou prancha.'
    ],
    information: [
      { name: 'Óleo de Rosa Mosqueta', description: 'Promove regenereção e cicatrização do couro cabeludo, hidratação profunda e nutrição instesa; repara danos da fibra, proteje e estimula o crescimento capilar.' },
      { name: 'Óleo de Macadãmia', description: 'Promove hidratação intensa, nutrição., proteção térmica, controle de frizz, brilho e maciez.' },
      { name: 'Óleo de Semente de Uva', description: 'Fortalece, nutre , reduz o frizz e protege.' }
    ],
    products: [
      {
        id: 21,
        nameproduct: 'Curinga Multifunção 8 em 1 Creme 500g',
        description: 'Atua como máscara, condicionador, protetor térmico, defrizzante e ativador de cachos.',
        cor: '#e65100',
        category: 'Máscara de Tratamento',
        price: 'R$ 96,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250603091451_313999687_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250603091456_3657996343_DM.webp',
        imageCard3: 'https://static.clorofitum.com.br/produto/multifotos/20250603120836_2649997351_DM.webp',
        image: ''
      },
      {
        id: 22,
        nameproduct: 'Curinga Multifunção 8 em 1 Shampoo 500ml',
        description: 'Atua como máscara, condicionador, protetor térmico, defrizzante e ativador de cachos.',
        cor: '#e65100',
        category: 'Máscara de Tratamento',
        price: 'R$ 79,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250603091144_1914998086_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250603091150_6465993535_DM.webp',
        imageCard3: 'https://static.clorofitum.com.br/produto/multifotos/20250603121016_8806991194_DM.webp',
        image: ''
      },
    ]
  },
  {
    id: 8,
    name: LineName.KERACEUTIC,
    description: 'Queratina de Liberação Gradual.',
    coverImage: 'assets/Keraceutic.webp',
    cor: '#00695c',
    usage: [],
    information: [],
    products: [
      {
        id: 23,
        nameproduct: 'Keraceutic Shampoo Estabilizador 300ml',
        description: '',
        cor: '#00695c',
        category: 'Shampoo',
        price: 'R$ 69,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250602170658_4472995528_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/3201500200_2022-04-04_11_50_01_1_3201500200_1_DM.png',
        imageCard3: 'https://static.clorofitum.com.br/produto/multifotos/20250602170706_6732993268_DM.webp',
        image: '',
        usage:[]
      },
       {
        id: 24,
        nameproduct: 'Keraceutic Shampoo Estabilizador 1000ml',
        description: '',
        cor: '#00695c',
        category: 'Shampoo',
        price: 'R$ 135,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250602170820_2453997547_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250602170832_2717997283_DM.webp',
        imageCard3: '',
        image: '',
        usage:[]
      },
       {
        id: 25,
        nameproduct: 'Keraceutic Leave-in Finalizador 210g',
        description: '',
        cor: '#00695c',
        category: 'Shampoo',
        price: 'R$ 72,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250602170607_257999743_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/3201502400_2022-04-04_10_56_18_1_3201502400_1_DM.png',
        imageCard3: 'https://static.clorofitum.com.br/produto/multifotos/20250603121549_5926994074_DM.webp',
        image: '',
        usage:[]
      },
       {
        id: 26,
        nameproduct: 'Keraceutic Choque Molecular 500g',
        description: '',
        cor: '#00695c',
        category: 'Shampoo',
        price: 'R$ 96,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250602170142_7349992651_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250602170212_548999452_DM.webp',
        imageCard3: 'https://static.clorofitum.com.br/produto/multifotos/20260428101330_5497994503_DM.png',
        image: '',
        usage:[]
      },
       {
        id: 27,
        nameproduct: 'Keraceutic Choque Molecular 1kg',
        description: '',
        cor: '#00695c',
        category: 'Shampoo',
        price: 'R$ 69,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250602170954_1475998525_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250602171000_3359996641_DM.webp',
        imageCard3: '',
        image: '',
        usage:[]
      },
       {
        id: 28,
        nameproduct: 'Keraceutic Recarga de Queratina 20ml',
        description: '',
        cor: '#00695c',
        category: 'Shampoo',
        price: 'R$ 20,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250602170522_4426995574_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250604145127_2098997902_DM.webp',
        imageCard3: 'https://static.clorofitum.com.br/produto/multifotos/20250603120758_1743998257_DM.webp',
        image: '',
        usage:[]
      },
      {
       id: 28,
        nameproduct: 'QUERATINA ANTIQUEBRA 300ml',
        description: '',
        cor: '#00695c',
        category: 'Shampoo',
        price: 'R$ 94,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20251016105014_746999254_D.png',
        imageCard2: '',
        imageCard3: '',
        image: '',
        usage:[]
      }
    ],
  },
    {
    id: 9,
    name: LineName.BOTULINICA,
    description: 'Queratina de Liberação Gradual.',
    coverImage: 'assets/Botulínica Capilar.webp',
    cor: '#ff00aa',
    usage: [],
    information: [],
    products: [
      {
        id: 24,
        nameproduct: 'Botulínica Capilar Pedras Preciosas 20ml',
        description: '',
        cor: '#ff008c',
        category: '',
        price: 'R$ 41,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250606141241_8133991867_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250606141258_9452990548_DM.webp',
        imageCard3: 'https://static.clorofitum.com.br/produto/multifotos/20250602172020_1961998039_DM.webp',
        image: '',
        usage:[
          'Preparo do tratamento: Agite o produto antes de usar. Em um recipiente plástico, coloque 150ml de água e adicione o conteúdo de um ampola. Misture até obter um creme homogêneo.Dica: Em 50ml de água coloque 1/3 da ampola (porção para uma aplicação). Se estiver difícil de agitar utilize um cabo de pente ou pincel fino para homogeneizar e depois agite bem. A Botulínica Capilar foi desenvolvida através da associação da Toxina Botulínica Like (vegetal) a um mix de Pedras Preciosas brasileiras como a Turmalina e a Ametista.',
          'Aplicação: Lave os cabelos com o Shampoo Clorofitum de sua preferência. Retire o excessoda umidade com a toalha ou com o secador.Aplique o tratamento Botulínica Capilarnos cabelos enluvando-os mecha a mecha.Deixe agir por 20 minutos. Enxágue bem. Pode ser observado um leve enrijecimento dos fios que desaparecerá após alguns minutos. Se desejar aplique um Leave-in Clorofitum e inicie o processo de escova e prancha.'
        ]
      }
    ],
  },
    {
  id: 10,
    name: LineName.CAUTERIZADOR,
    description: 'Queratina de Liberação Gradual.',
    coverImage: 'assets/Cauterizador.webp',
    cor: '#250f1e',
    usage: [],
    information: [],
    products: [
      {
        id: 25,
        nameproduct: 'Cauterizador Capilar Óleo de Abacate e Óleo de Tamanu (35ml)',
        description: '',
        cor: '#ff008c',
        category: '',
        price: 'R$ 53,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250603085645_3795996205_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250603085658_7619992381_DM.webp',
        imageCard3: 'https://static.clorofitum.com.br/produto/multifotos/20260323163650_1374998626_DM.jpg',
        image: '',
        usage:[]
      },
      {
        id: 26,
        nameproduct: 'Cauterizador Capilar Óleo de Macadâmia de Óleo de Semente de Uva (100ml)',
        description: '',
        cor: '#ff008c',
        category: '',
        price: 'R$ 109,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250603085645_3795996205_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250603084930_5376994624_DM.webp',
        imageCard3: 'https://static.clorofitum.com.br/produto/multifotos/20250603090111_8734991266_DM.webp',
        image: '',
        usage:[]
      },
      {
        id: 27,
        nameproduct: 'Cauterizador Capilar Óleo de Macadâmia de Óleo de Semente de Uva (35ml)',
        description: '',
        cor: '#ff008c',
        category: '',
        price: 'R$ 109,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250603085542_6037993963_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250603085550_6360993640_DM.webp',
        imageCard3: '',
        image: '',
        usage:[]
      },
       {
        id: 28,
        nameproduct: 'Cauterizador Capilar Óleo de Manga e Ômega (35ml)',
        description: '',
        cor: '#ff008c',
        category: '',
        price: 'R$ 53,90',
        price_descont: '',
        imageCard: 'https://static.clorofitum.com.br/produto/20250630150222_1031998969_D.webp',
        imageCard2: 'https://static.clorofitum.com.br/produto/multifotos/20250603090026_1651998349_DM.webp',
        imageCard3: '',
        image: '',
        usage:[]
      },
    ],
  }
];