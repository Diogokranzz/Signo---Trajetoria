
interface SignInfo {
  period: string;
  personality: string;
  element: string;
  traits: string;
  mindset: string;
  lifeDirection: string;
}

export const getZodiacSign = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1;

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Áries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Touro";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gêmeos";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Câncer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leão";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgem";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Escorpião";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagitário";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricórnio";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquário";
  return "Peixes";
};

export const getSignInfo = (sign: string): SignInfo => {
  const signInfo: Record<string, SignInfo> = {
    "Áries": {
      period: "21 de março a 19 de abril",
      personality: "Dinâmico, corajoso e espontâneo. Adora desafios e não tem medo de liderar.",
      element: "Fogo - Traz energia intensa, paixão e impulso para ação",
      traits: "Liderança natural, energia abundante e espírito pioneiro. Muito competitivo e direto em suas ações.",
      mindset: "Pensamento rápido e decisivo. Sempre focado em objetivos e conquistas futuras.",
      lifeDirection: "Busca constante por novos desafios e realizações. Tem forte instinto de liderança e empreendedorismo.",
    },
    "Touro": {
      period: "20 de abril a 20 de maio",
      personality: "Determinado, prático e confiável. Valoriza estabilidade e conforto.",
      element: "Terra - Representa praticidade, estabilidade e conexão com o mundo material",
      traits: "Estabilidade, sensualidade e forte conexão com prazeres sensoriais. Muito persistente.",
      mindset: "Pensamento prático e metódico. Valoriza segurança e planejamento a longo prazo.",
      lifeDirection: "Busca por estabilidade financeira e material. Aprecia construir bases sólidas para o futuro.",
    },
    "Gêmeos": {
      period: "21 de maio a 20 de junho",
      personality: "Versátil, curioso e comunicativo. Adora aprender e compartilhar conhecimento.",
      element: "Ar - Simboliza pensamento, comunicação e adaptabilidade",
      traits: "Adaptabilidade, inteligência e excelente capacidade de comunicação. Muito sociável.",
      mindset: "Mente ágil e curiosa. Sempre em busca de novos conhecimentos e experiências.",
      lifeDirection: "Exploração constante de ideias e conhecimentos. Comunicação e networking são fundamentais.",
    },
    "Câncer": {
      period: "21 de junho a 22 de julho",
      personality: "Sensível, protetor e intuitivo. Forte conexão com família e lar.",
      element: "Água - Representa emoção, intuição e profundidade sentimental",
      traits: "Empatia, memória emocional e grande capacidade de cuidar dos outros. Muito protetor.",
      mindset: "Pensamento emotivo e intuitivo. Forte conexão com memórias e sentimentos.",
      lifeDirection: "Desenvolvimento emocional e criação de laços profundos. Valoriza família e segurança emocional.",
    },
    "Leão": {
      period: "23 de julho a 22 de agosto",
      personality: "Criativo, carismático e generoso. Natural capacidade de liderança.",
      element: "Fogo - Expressa criatividade, paixão e força vital",
      traits: "Autoconfiança, lealdade e capacidade de inspirar outros. Muito expressivo.",
      mindset: "Pensamento criativo e otimista. Busca reconhecimento e admiração.",
      lifeDirection: "Expressão criativa e liderança inspiradora. Busca deixar um legado significativo.",
    },
    "Virgem": {
      period: "23 de agosto a 22 de setembro",
      personality: "Analítico, dedicado e perfeccionista. Excelente capacidade de organização.",
      element: "Terra - Simboliza praticidade, análise e serviço",
      traits: "Organização, praticidade e atenção aos detalhes. Muito dedicado ao trabalho.",
      mindset: "Pensamento analítico e metódico. Busca constante por melhorias e eficiência.",
      lifeDirection: "Aperfeiçoamento contínuo e contribuição prática. Valoriza ser útil aos outros.",
    },
    "Libra": {
      period: "23 de setembro a 22 de outubro",
      personality: "Diplomático, charmoso e equilibrado. Busca harmonia em tudo.",
      element: "Ar - Representa equilíbrio, harmonia e relacionamentos",
      traits: "Senso de justiça, harmonia e apreciação pela beleza. Muito diplomático.",
      mindset: "Pensamento equilibrado e justo. Considera diferentes perspectivas.",
      lifeDirection: "Busca por harmonia e beleza. Valoriza relacionamentos e parcerias.",
    },
    "Escorpião": {
      period: "23 de outubro a 21 de novembro",
      personality: "Intenso, passional e determinado. Forte poder de transformação.",
      element: "Água - Expressa profundidade emocional e poder de transformação",
      traits: "Força de vontade, intuição e capacidade de transformação. Muito intenso.",
      mindset: "Pensamento profundo e investigativo. Busca verdades ocultas.",
      lifeDirection: "Transformação pessoal e descoberta de verdades profundas. Poder e influência.",
    },
    "Sagitário": {
      period: "22 de novembro a 21 de dezembro",
      personality: "Otimista, aventureiro e filosófico. Adora explorar e aprender.",
      element: "Fogo - Simboliza expansão, aventura e busca por significado",
      traits: "Busca por conhecimento, liberdade e expansão. Muito otimista.",
      mindset: "Pensamento expansivo e filosófico. Interesse por diferentes culturas.",
      lifeDirection: "Exploração de horizontes e busca por sabedoria. Viagens e aventuras.",
    },
    "Capricórnio": {
      period: "22 de dezembro a 19 de janeiro",
      personality: "Ambicioso, responsável e disciplinado. Forte senso de dever.",
      element: "Terra - Representa ambição, estrutura e realização",
      traits: "Determinação, praticidade e senso de dever. Muito responsável.",
      mindset: "Pensamento estratégico e pragmático. Foco em metas de longo prazo.",
      lifeDirection: "Conquista de objetivos profissionais e status. Construção de legado.",
    },
    "Aquário": {
      period: "20 de janeiro a 18 de fevereiro",
      personality: "Inovador, independente e humanitário. Pensamento original.",
      element: "Ar - Expressa inovação, originalidade e visão de futuro",
      traits: "Originalidade, visão de futuro e espírito coletivo. Muito progressista.",
      mindset: "Pensamento inovador e visionário. Interesse por tecnologia e futuro.",
      lifeDirection: "Inovação e progresso social. Contribuição para causas humanitárias.",
    },
    "Peixes": {
      period: "19 de fevereiro a 20 de março",
      personality: "Compassivo, artístico e intuitivo. Grande sensibilidade espiritual.",
      element: "Água - Simboliza intuição, compaixão e transcendência",
      traits: "Sensibilidade, imaginação e conexão espiritual. Muito empático.",
      mindset: "Pensamento intuitivo e criativo. Forte conexão com o mundo espiritual.",
      lifeDirection: "Expressão artística e desenvolvimento espiritual. Ajuda ao próximo.",
    },
  };

  return signInfo[sign];
};
