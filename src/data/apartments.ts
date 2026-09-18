export interface ApartmentOption {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  area: string;
  bedrooms: string;
  bathrooms: string;
  parking: string;
  priceFrom: string;
  installmentEstimate: string;
  formUrl: string;
  formLabel: string;
  description: string;
  highlights: string[];
  image: string;
  badge?: string;
  popular?: boolean;
}

export const INTEREST_FORMS = [
  {
    id: "form-1",
    name: "Opção 1: Studio & 1 Dormitório",
    category: "Investimento & Praticidade",
    area: "32m² a 44m²",
    url: "https://forms.gle/c2m5tJWCcfdKuGXt5",
    description: "Ideal para solteiros, casais modernos ou investidores com foco em locação short-stay (Airbnb) e long-stay com alta rentabilidade.",
    cta: "Tenho Interesse - Formulário 1",
    shortLabel: "Studio & 1 Dorm",
  },
  {
    id: "form-2",
    name: "Opção 2: 2 Dormitórios c/ Suíte",
    category: "Conforto & Família",
    area: "58m² a 68m²",
    url: "https://forms.gle/aucB4sftcU24STW38",
    description: "Planta inteligente com varanda gourmet integrada, suíte master e vaga de garagem demarcada. Perfeito para quem busca espaço e bem-estar.",
    cta: "Tenho Interesse - Formulário 2",
    shortLabel: "2 Quartos c/ Suíte",
    featured: true,
  },
  {
    id: "form-3",
    name: "Opção 3: 3 Suítes & Coberturas",
    category: "Exclusividade & Alto Padrão",
    area: "88m² a 145m²",
    url: "https://forms.gle/oAUdAzPQGXFxk3dz5",
    description: "Amplo living com pé-direito alto, terraço panorâmico com churrasqueira a carvão, 2 a 3 vagas e acabamentos nobres selecionados.",
    cta: "Tenho Interesse - Formulário 3",
    shortLabel: "3 Suítes / Cobertura",
  },
];

export const APARTMENT_OPTIONS: ApartmentOption[] = [
  {
    id: "studio-1dorm",
    tag: "Studio & 1 Dormitório",
    title: "Compacto Inteligente",
    subtitle: "Conectividade, design funcional e alta rentabilidade",
    area: "38 m² privativos",
    bedrooms: "1 Dormitório (Studio)",
    bathrooms: "1 Banheiro",
    parking: "Opção com 1 Vaga",
    priceFrom: "R$ 289.000",
    installmentEstimate: "A partir de R$ 980/mês no período de obras",
    formUrl: "https://forms.gle/c2m5tJWCcfdKuGXt5",
    formLabel: "Preencher Formulário Opção 1",
    description: "Ambientes 100% integrados com iluminação natural abundante, fechadura eletrônica, tomada USB e infraestrutura completa para ar-condicionado.",
    highlights: [
      "Varanda gourmet integrada à cozinha",
      "Fechadura digital biométrica instalada",
      "Janelas com persiana de enrolar 100% blackout",
      "Excelente liquidez para locação por temporada ou anual"
    ],
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    badge: "Alta Rentabilidade",
  },
  {
    id: "2dorm-suite",
    tag: "2 Dormitórios c/ Suíte",
    title: "Residencial Família & Conforto",
    subtitle: "O equilíbrio perfeito entre espaço, privacidade e lazer",
    area: "65 m² privativos",
    bedrooms: "2 Dormitórios (1 Suíte)",
    bathrooms: "2 Banheiros",
    parking: "1 ou 2 Vagas Cobertas",
    priceFrom: "R$ 475.000",
    installmentEstimate: "A partir de R$ 1.690/mês com entrada facilitada",
    formUrl: "https://forms.gle/aucB4sftcU24STW38",
    formLabel: "Preencher Formulário Opção 2",
    description: "Planta pensada para o convívio familiar, com living ampliado para 2 ambientes, varanda gourmet com churrasqueira e suíte espaçosa com closet.",
    highlights: [
      "Varanda com churrasqueira a carvão e pia",
      "Suíte master com espaço para closet planejado",
      "Cozinha em conceito aberto com bancada em granito",
      "Ponto de água quente na cozinha e banheiros"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    badge: "Mais Procurado",
    popular: true,
  },
  {
    id: "3suites-cobertura",
    tag: "3 Suítes & Coberturas",
    title: "Edição Premium & Penthouses",
    subtitle: "Exclusividade e sofisticação no topo da cidade",
    area: "112 m² a 145 m² privativos",
    bedrooms: "3 Suítes Plenas",
    bathrooms: "4 Banheiros (inclui Lavabo)",
    parking: "2 a 3 Vagas Determinadas + Depósito Privativo",
    priceFrom: "R$ 890.000",
    installmentEstimate: "Condições sob medida com fluxo personalizado",
    formUrl: "https://forms.gle/oAUdAzPQGXFxk3dz5",
    formLabel: "Preencher Formulário Opção 3",
    description: "Para quem não abre mão do máximo de conforto e requinte. Elevador privativo com biometria, terraço gourmet generoso e vista panorâmica permanente.",
    highlights: [
      "Hall privativo com acesso biométrico exclusivo",
      "Terraço com vista panorâmica e churrasqueira",
      "Manta acústica nas lajes para isolamento de ruídos",
      "Depósito privativo individual no subsolo"
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    badge: "Luxo & Exclusividade",
  },
];

export const AMENITIES = [
  {
    title: "Piscina com Borda Infinita",
    description: "Deck molhado climatizado com espreguiçadeiras e solário integrado.",
    icon: "Waves",
  },
  {
    title: "Academia Completa",
    description: "Espaço fitness equipado com aparelhos de última geração e área para pilates.",
    icon: "Dumbbell",
  },
  {
    title: "Espaço Gourmet & Churrasqueira",
    description: "Salão nobre climatizado e equipado para suas melhores celebrações.",
    icon: "Utensils",
  },
  {
    title: "Coworking & Reuniões",
    description: "Ambiente silencioso com Wi-Fi ultraveloz e cabines privativas de call.",
    icon: "Laptop",
  },
  {
    title: "Pet Place & Dog Wash",
    description: "Área verde cercada e equipada com circuito de agility para seu animal de estimação.",
    icon: "HeartHandshake",
  },
  {
    title: "Playground & Brinquedoteca",
    description: "Diversão segura para crianças de todas as idades com piso emborrachado.",
    icon: "Smile",
  },
  {
    title: "Mini Market 24 Horas",
    description: "Conveniência autônoma dentro do condomínio para suas compras do dia a dia.",
    icon: "ShoppingBag",
  },
  {
    title: "Portaria Blindada 24h",
    description: "Controle biométrico, reconhecimento facial e monitoramento por câmeras.",
    icon: "ShieldCheck",
  },
];

export const LOCATION_HIGHLIGHTS = [
  { time: "2 min", place: "Estação de Metrô / Transporte Rápido", category: "Mobilidade" },
  { time: "3 min", place: "Supermercado Pão de Açúcar & Hortifruti", category: "Conveniência" },
  { time: "5 min", place: "Parque da Cidade & Ciclovia Arborizada", category: "Lazer" },
  { time: "7 min", place: "Shopping Center & Cinemas", category: "Compras" },
  { time: "8 min", place: "Hospital de Referência e Pronto Atendimento", category: "Saúde" },
  { time: "10 min", place: "Colégios Bilíngues e Faculdades Renomadas", category: "Educação" },
];

export const FAQS = [
  {
    question: "Como funciona o envio do formulário de interesse?",
    answer: "Ao clicar no botão 'Tenho Interesse', você será direcionado ao formulário seguro do Google Forms correspondente à unidade escolhida. Lá você preenche seus dados básicos de contato para que um consultor exclusivo prepare uma proposta personalizada.",
  },
  {
    question: "Quais são as condições de pagamento e entrada?",
    answer: "Trabalhamos com entrada facilitada e parcelada direto com a construtora durante todo o período de obras. Você também pode utilizar o saldo do FGTS para amortização e financiar o saldo restante com os principais bancos parceiros (Caixa, Santander, Itaú, Bradesco) com taxas especiais de lançamento.",
  },
  {
    question: "Posso visitar o apartamento decorado?",
    answer: "Sim! O stand de vendas conta com maquete interativa e os apartamentos decorados das 3 tipologias para você conhecer cada detalhe de acabamento e espaço. Basta preencher o formulário para agendar sua visita com atendimento exclusivo.",
  },
  {
    question: "Qual o prazo de entrega da obra?",
    answer: "As obras seguem cronograma rigoroso com entrega prevista para 30 meses a partir do lançamento, com seguro de entrega de obra e patrimônio de afetação registrado em cartório.",
  },
  {
    question: "Qual formulário devo escolher?",
    answer: "Disponibilizamos 3 links conforme seu interesse: o Formulário 1 para Studios/1 dormitório, o Formulário 2 para 2 dormitórios com suíte e o Formulário 3 para 3 suítes e coberturas. Se estiver em dúvida, qualquer um dos links permite que nosso consultor apresente todas as opções.",
  },
];
