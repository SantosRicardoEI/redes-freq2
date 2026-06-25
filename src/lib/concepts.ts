import conceitosMarkdown from "../../conceitos.md?raw";

export type Concept = {
  term: string;
  definition: string;
};

const conceptLinePattern = /^-\s+\*\*(.+?)\*\*\s+—\s+(.+)$/;

export function parseConcepts(markdown = conceitosMarkdown): Concept[] {
  const seen = new Set<string>();

  return markdown
    .split("\n")
    .map((line) => line.trim().match(conceptLinePattern))
    .filter((match): match is RegExpMatchArray => Boolean(match))
    .map((match) => ({
      term: normalizeInlineText(match[1]),
      definition: normalizeInlineText(match[2])
    }))
    .filter((concept) => {
      const key = concept.term.toLocaleLowerCase("pt-PT");
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return concept.term.length > 1 && concept.definition.length > 1;
    })
    .sort((a, b) => b.term.length - a.term.length);
}

function normalizeInlineText(value: string): string {
  return value
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .trim();
}

export const concepts = parseConcepts();
