import conceitos from "../../conceitos.md?raw";
import topicos from "../../topicos_provaveis.md?raw";

export type DocumentId = "conceitos" | "topicos";

export type StudyDocument = {
  id: DocumentId;
  title: string;
  description: string;
  content: string;
};

export const documents: StudyDocument[] = [
  {
    id: "conceitos",
    title: "Conceitos",
    description: "Glossário com definições usadas nos capítulos.",
    content: conceitos
  },
  {
    id: "topicos",
    title: "Tópicos prováveis",
    description: "Lista curta do que tem mais probabilidade de sair.",
    content: topicos
  }
];

export const documentById = new Map(documents.map((document) => [document.id, document]));
