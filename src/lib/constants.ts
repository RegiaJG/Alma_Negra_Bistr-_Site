export const RESTAURANT = {
  name: 'Alma Negra Bistrô',
  tagline: 'Onde o sabor encontra a escuridão perfeita',
  address: 'Rua Oscar Freire, 1247 — Jardins, São Paulo/SP',
  phone: '(11) 3040-9988',
  whatsapp: '5511930409988',
  email: 'reservas@almanegrabistr.com.br',
  hours: {
    weekdays: 'Terça a Sexta: 19h às 23h',
    weekend: 'Sábado e Domingo: 19h às 00h',
    closed: 'Segunda-feira: Fechado',
  },
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },
}

export const MENU_ITEMS = {
  entradas: [
    {
      id: 1,
      name: 'Carpaccio de Wagyu',
      description:
        'Finas fatias de wagyu com rúcula selvagem, parmesão 24 meses e azeite trufado',
      price: 'R$ 89',
      image: '/images/prato-2.jpg',
    },
    {
      id: 2,
      name: 'Foie Gras Sauté',
      description:
        'Foie gras grelhado com redução de porto, brioche artesanal e frutas vermelhas',
      price: 'R$ 98',
      image: '/images/prato-2.jpg',
    },
    {
      id: 3,
      name: 'Burrata da Casa',
      description:
        'Burrata cremosa com tomates heirloom, pesto de manjericão e azeite extra virgem',
      price: 'R$ 72',
      image: '/images/prato-2.jpg',
    },
  ],
  pratos: [
    {
      id: 4,
      name: 'Filé Alma Negra',
      description:
        'Filé mignon ao molho de vinho tinto com cogumelos frescos, risoto de parmesão e aspargos grelhados',
      price: 'R$ 178',
      image: '/images/prato-1.jpg',
    },
    {
      id: 5,
      name: 'Cordeiro Provençal',
      description:
        'Rack de cordeiro com crosta de ervas finas, purê de batata-doce e legumes assados',
      price: 'R$ 198',
      image: '/images/prato-1.jpg',
    },
    {
      id: 6,
      name: 'Robalo Negro',
      description:
        'Filé de robalo sobre creme de aipim com camarões salteados e farofa de dendê',
      price: 'R$ 148',
      image: '/images/prato-1.jpg',
    },
  ],
  sobremesas: [
    {
      id: 7,
      name: 'Fondant de Chocolate 70%',
      description:
        'Bolinho quente com coração de chocolate belga, sorvete de baunilha e calda de framboesa',
      price: 'R$ 58',
      image: '/images/prato-3.jpg',
    },
    {
      id: 8,
      name: 'Crème Brûlée de Lavanda',
      description:
        'Clássico francês com toque de lavanda, frutas vermelhas frescas e biscoito sablé',
      price: 'R$ 52',
      image: '/images/prato-3.jpg',
    },
  ],
  drinks: [
    {
      id: 9,
      name: 'Alma Sour',
      description:
        'Bourbon envelhecido, suco de limão siciliano, mel de laranjeira e espuma de clara',
      price: 'R$ 48',
      image: '/images/drinks-1.jpg',
    },
    {
      id: 10,
      name: 'Negroni Negra',
      description:
        'Gin premium, vermute rosso, campari com infusão de pimenta-rosa e raspas de laranja',
      price: 'R$ 52',
      image: '/images/drinks-1.jpg',
    },
    {
      id: 11,
      name: 'Vinho do Patagão',
      description: 'Taça de Malbec Gran Reserva — Mendoza, Argentina. Safra 2019',
      price: 'R$ 65',
      image: '/images/drinks-1.jpg',
    },
  ],
}

export const GALLERY_IMAGES = [
  { src: '/images/interior-1.jpg', alt: 'Salão principal do Alma Negra Bistrô' },
  { src: '/images/prato-1.jpg', alt: 'Filé Alma Negra' },
  { src: '/images/interior-2.jpg', alt: 'Mesa posta com iluminação âmbar' },
  { src: '/images/prato-3.jpg', alt: 'Fondant de chocolate' },
  { src: '/images/drinks-1.jpg', alt: 'Cocktail artesanal' },
  { src: '/images/prato-2.jpg', alt: 'Entrada Carpaccio de Wagyu' },
]
