import type { ChapterId } from "../data/chapters";
import type { DocumentId } from "../data/documents";

export type Route =
  | { name: "home" }
  | { name: "chapter"; chapterId: ChapterId }
  | { name: "document"; documentId: DocumentId };

export function getRouteFromHash(hash: string): Route {
  const cleanHash = hash.replace(/^#\/?/, "");
  const [section, id] = cleanHash.split("/");

  if (section === "capitulo" && isChapterId(id)) {
    return { name: "chapter", chapterId: id };
  }

  if (section === "documento" && isDocumentId(id)) {
    return { name: "document", documentId: id };
  }

  return { name: "home" };
}

export function chapterHref(id: ChapterId): string {
  return `#/capitulo/${id}`;
}

export function documentHref(id: DocumentId): string {
  return `#/documento/${id}`;
}

export function homeHref(): string {
  return "#/";
}

function isChapterId(value: string | undefined): value is ChapterId {
  return Boolean(value && /^(4\.[1-9]|5\.[1-7])$/.test(value));
}

function isDocumentId(value: string | undefined): value is DocumentId {
  return value === "conceitos" || value === "topicos";
}
