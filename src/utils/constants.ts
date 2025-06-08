export const SellerInfoTexts = {
  sellerName: "Vinicius Scomação",
  sellerDescription:
    "Representante autorizado Consórcio Canopus e Nax Finance.",
  email: "naxvinicius@gmail.com",
  phone: "(41) 99856-4806",
  whatsapp: "(41) 99856-4806 (WhatsApp)",
  address: "Av. Manoel Ribas, 136 - Curitiba - PR",
  facebook: "Perfil Facebook",
  unitLabel: "Unidade:",
  unitName: "Curitiba – PR",
  facebookLink: "https://www.facebook.com/affinitysegurosbrasilia",
  mapsLink: "https://g.co/kgs/QAkSJ9H",
  whatsappLink: "https://wa.me/5541998564806",
  consorcioCanopusLink: "https://www.consorciocanopus.com.br/",
  naxOpenFinanceLink: "https://naxopenfinance.com",
  phoneLink: "tel:+5541998564806",
  emailLink: "mailto:naxvinicius@gmail.com",
};

export const consortiumTexts = {
  title: "Por que escolher consórcio?",
  description1:
    "O consórcio é a maneira mais inteligente e planejada de conquistar seus sonhos: seja um imóvel, carro, reforma ou mesmo para investir em seu negócio, TUDO ISSO SEM JUROS E IOF.",
  description2:
    "Funciona assim: Pessoas e empresas unem-se com o objetivo de adquirir um bem. Criando assim um fundo em comum, a administradora cuida e da garantia a esses grupos, e todos os meses diversas pessoas são contempladas. Todo o processo é fiscalizado pelo Banco do Brasil, sendo assim seguro, planejado e que cabe no seu bolso ",
  buttonText: "Simule agora",
  subtitle: "Sobre o segmento",
};

export const processSteps = [
  {
    number: "01",
    title: "Escolha seu objetivo",
    description:
      "Veja qual opção e condições servem melhor a você.",
    imageSrc: "/images/plan-selection.jpg",
  },
  {
    number: "02",
    title: "Contribua mensalmente",
    description:
      "Contribua em dia para estar apto a ser contemplado.",
    imageSrc: "/images/monthly-contribution.jpg",
  },
  {
    number: "03",
    title: "Fique de olho nas assembleias",
    description:
      "Acompanhe os sorteios ao vivo no Youtube da canopus.",
    imageSrc: "/images/assembly.jpg",
  },
  {
    number: "04",
    title: "Momento da Contemplação",
    description:
      "Você pode contemplar por meio de sorteio ou utilizar a oferta de lances em diferentes modalidades.",
    imageSrc: "/images/contemplation-time.jpg",
  },
];

export const consortiumProcessSectionTexts = {
  title: "Como funciona o consórcio?",
  button: "Simular agora",
};

export const footerTexts = {
  title: "Fale conosco",
  links: [
    { href: "#about", label: "Sobre nós" },
    { href: "#services", label: "Serviços" },
    { href: "#contact", label: "Contato" },
  ],
  button: "Entre em contato",
  copyright: (year: number) =>
    `© ${year} Vinicius Consultor. Todos os direitos reservados.`,
};

export const headerMenuItems = [
  { label: "Início", href: "#home" },
  { label: "Formulário de Cadastro", href: "#simulador" },
];

export const simulatorSectionTexts = {
  hero1: "Pronto para realizar seus sonhos sem JUROS E IOF?.",
  hero2: "Simule agora mesmo, e surpreenda-se!.",
  step1Title: "A hora de realizar é agora.",
  step1Subtitle: "Selecione sua próxima conquista:",
  simTypeLabel: "Simule o plano por:",
  simTypeParcela: "Parcela",
  simTypeCredito: "Crédito",
  valueLabel: (simType: string) =>
    `Escolha o valor do ${simType === "parcela" ? "parcela" : "crédito"}:`,
  simulateButton: "Simular agora",
  formTitle: "Realize seus planos com a Simuladora de Parcelas",
  formSubtitle: "Preencha os campos abaixo para ver os resultados:",
  formName: "Nome",
  formEmail: "E-mail",
  formPhone: "Telefone",
  formTerms: "Aceito os Termos de Privacidade",
  backButton: "Voltar",
  resultButton: "Resultado",
  steps: ["Simule o valor", "Preencha seus dados"],
  whatsAppButton: (text: string) =>
    `https://wa.me/5541998564806?text=${encodeURIComponent(text)}`,
  whatsAppMensage: (productType: string, sliderValue: string) =>
    `Olá! Tenho interesse em um consórcio de ${productType} no valor de ${sliderValue}. Podem me ajudar?`,
};
