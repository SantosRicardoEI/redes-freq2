import type { ChapterId } from "./chapters";

export type StudyQuestion = {
  id: string;
  chapterId: ChapterId;
  question: string;
  answer: string;
  tags?: string[];
};

export const questions: StudyQuestion[] = [
  {
    id: "q-4-2-001",
    chapterId: "4.2",
    question: "O que é longest prefix matching?",
    answer:
      "É a regra usada por um router quando várias entradas da tabela correspondem ao destino: escolhe-se o prefixo mais longo, ou seja, a rota mais específica.",
    tags: ["router", "encaminhamento"]
  },
  {
    id: "q-5-3-001",
    chapterId: "5.3",
    question: "Quando um datagrama vai para outra rede, que endereços mudam a cada salto?",
    answer:
      "Os endereços MAC mudam a cada salto porque identificam apenas o próximo nó físico. Os endereços IP de origem e destino mantêm-se ponta-a-ponta.",
    tags: ["mac", "arp", "ip"]
  }
];
