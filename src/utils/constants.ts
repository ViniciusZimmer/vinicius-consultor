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
  unitName: "SAO JOSE DOS PINHAIS – PR",
  facebookLink: "https://www.facebook.com/affinitysegurosbrasilia",
  mapsLink: "https://g.co/kgs/QAkSJ9H",
  whatsappLink: "https://wa.me/5541998564806",
  consorcioCanopusLink: "https://www.consorciocanopus.com.br/",
  naxOpenFinanceLink: "https://naxopenfinance.com",
  phoneLink: "tel:+5541998564806",
  emailLink: "mailto:naxvinicius@gmail.com",
};

export const consortiumTexts = {
  title: "Você sabe o que é consórcio?",
  description1:
    "É uma modalidade de compra que facilita a realização de seus planos de vida, sem pagar juros. No consórcio, pessoas físicas e jurídicas se unem em grupos para aquisição de bens móveis, imóveis ou serviços.",
  description2:
    "Esses grupos são organizados por uma Administradora de Consórcios, autorizada e fiscalizada mensalmente pelo Banco Central do Brasil.",
  buttonText: "Simule agora",
  subtitle: "Sobre o segmento",
};

export const processSteps = [
  {
    number: "01",
    title: "Escolha seu plano",
    description:
      "Diversas opções para você escolher aquela que melhor se adapta aos seus objetivos.",
    imageSrc: "/images/plan-selection.jpg",
  },
  {
    number: "02",
    title: "Contribua mensalmente",
    description:
      "Mantenha os pagamentos em dia para participar dos sorteios e assembleias.",
    imageSrc: "/images/monthly-contribution.jpg",
  },
  {
    number: "03",
    title: "Assembleia",
    description:
      "Acompanhe os sorteios mensalmente ou ofereça lances em diferentes modalidades.",
    imageSrc: "/images/assembly.jpg",
  },
  {
    number: "04",
    title: "Hora da contemplação",
    description:
      "Ocorre por sorteio ou oferta de lances em diferentes modalidades.",
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
  { label: "Área do Cliente" },
  { label: "Formulário de Cadastro" },
  { label: "Início" },
];

export const simulatorSectionTexts = {
  hero1: "É crédito.",
  hero2: "É investimento.",
  hero3: "Porque é especialista em consórcio.",
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
