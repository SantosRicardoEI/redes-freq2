import type { ReactNode } from "react";
import type { Concept } from "./concepts";

type MarkdownRendererProps = {
  markdown: string;
  concepts?: Concept[];
  highlightConcepts?: boolean;
};

type ListItem = {
  text: string;
  checked?: boolean;
};

const inlineCodePattern = /`([^`]+)`/g;
const boldPattern = /\*\*([^*]+)\*\*/g;
const italicPattern = /\*([^*]+)\*/g;
const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

export function MarkdownRenderer({
  markdown,
  concepts = [],
  highlightConcepts = false
}: MarkdownRendererProps) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const nodes: ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (line.trim() === "---") {
      nodes.push(<hr key={`hr-${index}`} />);
      index += 1;
      continue;
    }

    if (line.startsWith("```")) {
      const language = line.slice(3).trim();
      const codeLines: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].startsWith("```")) {
        codeLines.push(lines[index]);
        index += 1;
      }
      index += 1;
      nodes.push(
        <pre key={`code-${index}`} className="code-block">
          <code data-language={language || undefined}>{codeLines.join("\n")}</code>
        </pre>
      );
      continue;
    }

    if (/^#{1,6}\s/.test(line)) {
      const level = Math.min(line.match(/^#+/)?.[0].length ?? 2, 4);
      const text = line.replace(/^#{1,6}\s+/, "");
      nodes.push(renderHeading(level, text, `heading-${index}`, concepts));
      index += 1;
      continue;
    }

    if (line.startsWith(">")) {
      const quoteLines: string[] = [];
      while (index < lines.length && lines[index].startsWith(">")) {
        quoteLines.push(lines[index].replace(/^>\s?/, ""));
        index += 1;
      }
      nodes.push(
        <blockquote key={`quote-${index}`}>
          {quoteLines.map((quoteLine, quoteIndex) => (
            <p key={`quote-line-${quoteIndex}`}>
              {renderInline(quoteLine, concepts, highlightConcepts)}
            </p>
          ))}
        </blockquote>
      );
      continue;
    }

    if (isTableStart(lines, index)) {
      const tableLines: string[] = [];
      while (index < lines.length && lines[index].includes("|")) {
        tableLines.push(lines[index]);
        index += 1;
      }
      nodes.push(renderTable(tableLines, `table-${index}`, concepts, highlightConcepts));
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      const items: ListItem[] = [];
      while (index < lines.length && /^\s*[-*]\s+/.test(lines[index])) {
        const text = lines[index].replace(/^\s*[-*]\s+/, "");
        const checkbox = text.match(/^\[( |x|X)\]\s+(.*)$/);
        if (checkbox) {
          items.push({ checked: checkbox[1].toLowerCase() === "x", text: checkbox[2] });
        } else {
          items.push({ text });
        }
        index += 1;
      }
      nodes.push(
        <ul key={`list-${index}`} className="markdown-list">
          {items.map((item, itemIndex) => (
            <li key={`list-item-${itemIndex}`}>
              {typeof item.checked === "boolean" && (
                <span className={item.checked ? "checkbox checked" : "checkbox"} aria-hidden="true" />
              )}
              {renderInline(item.text, concepts, highlightConcepts)}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\d+\.\s+/, ""));
        index += 1;
      }
      nodes.push(
        <ol key={`ordered-${index}`} className="markdown-list">
          {items.map((item, itemIndex) => (
            <li key={`ordered-item-${itemIndex}`}>{renderInline(item, concepts, highlightConcepts)}</li>
          ))}
        </ol>
      );
      continue;
    }

    const paragraphLines = [line];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^#{1,6}\s/.test(lines[index]) &&
      !lines[index].startsWith("```") &&
      !lines[index].startsWith(">") &&
      !/^\s*[-*]\s+/.test(lines[index]) &&
      !/^\d+\.\s+/.test(lines[index]) &&
      !isTableStart(lines, index) &&
      lines[index].trim() !== "---"
    ) {
      paragraphLines.push(lines[index]);
      index += 1;
    }
    nodes.push(
      <p key={`paragraph-${index}`}>{renderInline(paragraphLines.join(" "), concepts, highlightConcepts)}</p>
    );
  }

  return <div className="markdown-body">{nodes}</div>;
}

function renderHeading(level: number, text: string, key: string, concepts: Concept[]) {
  const content = renderInline(text, concepts, false);
  if (level === 1) {
    return <h1 key={key}>{content}</h1>;
  }
  if (level === 2) {
    return <h2 key={key}>{content}</h2>;
  }
  if (level === 3) {
    return <h3 key={key}>{content}</h3>;
  }
  return <h4 key={key}>{content}</h4>;
}

function isTableStart(lines: string[], index: number): boolean {
  return (
    index + 1 < lines.length &&
    lines[index].includes("|") &&
    /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(lines[index + 1])
  );
}

function renderTable(
  tableLines: string[],
  key: string,
  concepts: Concept[],
  highlightConcepts: boolean
) {
  const [headerLine, , ...bodyLines] = tableLines;
  const headers = splitTableRow(headerLine);
  const rows = bodyLines.map(splitTableRow);

  return (
    <div className="table-wrap" key={key}>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={`header-${index}`}>{renderInline(header, concepts, false)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`cell-${rowIndex}-${cellIndex}`}>
                  {renderInline(cell, concepts, highlightConcepts)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function splitTableRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function renderInline(text: string, concepts: Concept[], highlightConcepts: boolean): ReactNode[] {
  const tokens = tokenizeInline(text);
  return tokens.flatMap((token, tokenIndex) => {
    if (token.kind === "text") {
      return highlightConcepts
        ? highlightText(token.value, concepts, `text-${tokenIndex}`)
        : [token.value];
    }

    if (token.kind === "code") {
      return <code key={`inline-code-${tokenIndex}`}>{token.value}</code>;
    }

    if (token.kind === "strong") {
      return <strong key={`strong-${tokenIndex}`}>{renderInline(token.value, concepts, highlightConcepts)}</strong>;
    }

    if (token.kind === "em") {
      return <em key={`em-${tokenIndex}`}>{renderInline(token.value, concepts, highlightConcepts)}</em>;
    }

    return (
      <a key={`link-${tokenIndex}`} href={token.href} target={token.href.startsWith("http") ? "_blank" : undefined}>
        {token.label}
      </a>
    );
  });
}

type InlineToken =
  | { kind: "text"; value: string }
  | { kind: "code"; value: string }
  | { kind: "strong"; value: string }
  | { kind: "em"; value: string }
  | { kind: "link"; label: string; href: string };

function tokenizeInline(text: string): InlineToken[] {
  const tokens: InlineToken[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    const matches = [
      findNext(remaining, inlineCodePattern, "code"),
      findNext(remaining, boldPattern, "strong"),
      findNext(remaining, italicPattern, "em"),
      findNext(remaining, linkPattern, "link")
    ].filter((match): match is InlineMatch => Boolean(match));

    const next = matches.sort((a, b) => a.index - b.index)[0];
    if (!next) {
      tokens.push({ kind: "text", value: remaining });
      break;
    }

    if (next.index > 0) {
      tokens.push({ kind: "text", value: remaining.slice(0, next.index) });
    }

    if (next.kind === "link") {
      tokens.push({ kind: "link", label: next.groups[0], href: next.groups[1] });
    } else {
      tokens.push({ kind: next.kind, value: next.groups[0] });
    }

    remaining = remaining.slice(next.index + next.raw.length);
  }

  return tokens.filter((token) => token.kind !== "text" || token.value.length > 0);
}

type InlineMatch =
  | { kind: "code" | "strong" | "em"; index: number; raw: string; groups: [string] }
  | { kind: "link"; index: number; raw: string; groups: [string, string] };

function findNext(text: string, pattern: RegExp, kind: InlineMatch["kind"]): InlineMatch | null {
  pattern.lastIndex = 0;
  const match = pattern.exec(text);
  if (!match || typeof match.index !== "number") {
    return null;
  }

  if (kind === "link") {
    return { kind, index: match.index, raw: match[0], groups: [match[1], match[2]] };
  }

  return { kind, index: match.index, raw: match[0], groups: [match[1]] };
}

function highlightText(text: string, concepts: Concept[], keyPrefix: string): ReactNode[] {
  if (!text || concepts.length === 0) {
    return [text];
  }

  const nodes: ReactNode[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    const match = findConceptAt(text, cursor, concepts);

    if (!match) {
      nodes.push(text[cursor]);
      cursor += 1;
      continue;
    }

    nodes.push(
      <span
        className="concept-mark"
        tabIndex={0}
        role="button"
        aria-label={`${match.concept.term}: ${match.concept.definition}`}
        data-definition={match.concept.definition}
        key={`${keyPrefix}-concept-${cursor}`}
      >
        {text.slice(cursor, cursor + match.length)}
      </span>
    );
    cursor += match.length;
  }

  return coalesceTextNodes(nodes, keyPrefix);
}

function findConceptAt(text: string, index: number, conceptList: Concept[]) {
  for (const concept of conceptList) {
    const candidate = text.slice(index, index + concept.term.length);
    if (candidate.toLocaleLowerCase("pt-PT") !== concept.term.toLocaleLowerCase("pt-PT")) {
      continue;
    }

    if (!hasTermBoundary(text, index, concept.term.length)) {
      continue;
    }

    return { concept, length: concept.term.length };
  }

  return null;
}

function hasTermBoundary(text: string, start: number, length: number): boolean {
  const before = start > 0 ? text[start - 1] : "";
  const after = start + length < text.length ? text[start + length] : "";
  return !isWordCharacter(before) && !isWordCharacter(after);
}

function isWordCharacter(character: string): boolean {
  return Boolean(character && /[\p{L}\p{N}_-]/u.test(character));
}

function coalesceTextNodes(nodes: ReactNode[], keyPrefix: string): ReactNode[] {
  const output: ReactNode[] = [];
  let buffer = "";

  nodes.forEach((node) => {
    if (typeof node === "string") {
      buffer += node;
      return;
    }

    if (buffer) {
      output.push(buffer);
      buffer = "";
    }
    output.push(node);
  });

  if (buffer) {
    output.push(buffer);
  }

  return output.map((node, index) =>
    typeof node === "string" ? <span key={`${keyPrefix}-plain-${index}`}>{node}</span> : node
  );
}
