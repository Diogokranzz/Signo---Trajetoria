
interface SignInfo {
  period: string;
  personality: string;
  element: string;
  traits: string;
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
      personality: "Dinâmico, corajoso e espontâneo",
      element: "Fogo",
      traits: "Liderança natural, energia abundante e espírito pioneiro",
    },
    "Touro": {
      period: "20 de abril a 20 de maio",
      personality: "Determinado, prático e confiável",
      element: "Terra",
      traits: "Estabilidade, sensualidade e apreciação pelo conforto",
    },
    "Gêmeos": {
      period: "21 de maio a 20 de junho",
      personality: "Versátil, curioso e comunicativo",
      element: "Ar",
      traits: "Adaptabilidade, inteligência e sociabilidade",
    },
    "Câncer": {
      period: "21 de junho a 22 de julho",
      personality: "Sensível, protetor e intuitivo",
      element: "Água",
      traits: "Empatia, memória emocional e cuidado com os outros",
    },
    "Leão": {
      period: "23 de julho a 22 de agosto",
      personality: "Criativo, carismático e generoso",
      element: "Fogo",
      traits: "Autoconfiança, lealdade e capacidade de liderança",
    },
    "Virgem": {
      period: "23 de agosto a 22 de setembro",
      personality: "Analítico, dedicado e perfeccionista",
      element: "Terra",
      traits: "Organização, praticidade e atenção aos detalhes",
    },
    "Libra": {
      period: "23 de setembro a 22 de outubro",
      personality: "Diplomático, charmoso e equilibrado",
      element: "Ar",
      traits: "Senso de justiça, harmonia e apreciação pela beleza",
    },
    "Escorpião": {
      period: "23 de outubro a 21 de novembro",
      personality: "Intenso, passional e determinado",
      element: "Água",
      traits: "Força de vontade, intuição e capacidade de transformação",
    },
    "Sagitário": {
      period: "22 de novembro a 21 de dezembro",
      personality: "Otimista, aventureiro e filosófico",
      element: "Fogo",
      traits: "Busca por conhecimento, liberdade e expansão",
    },
    "Capricórnio": {
      period: "22 de dezembro a 19 de janeiro",
      personality: "Ambicioso, responsável e disciplinado",
      element: "Terra",
      traits: "Determinação, praticidade e senso de dever",
    },
    "Aquário": {
      period: "20 de janeiro a 18 de fevereiro",
      personality: "Inovador, independente e humanitário",
      element: "Ar",
      traits: "Originalidade, visão de futuro e espírito coletivo",
    },
    "Peixes": {
      period: "19 de fevereiro a 20 de março",
      personality: "Compassivo, artístico e intuitivo",
      element: "Água",
      traits: "Sensibilidade, imaginação e conexão espiritual",
    },
  };

  return signInfo[sign];
};
