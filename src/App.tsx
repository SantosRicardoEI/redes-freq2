import { useEffect, useState } from "react";
import { chapterById, chapters, type AulaId, type Chapter, type ChapterId } from "./data/chapters";
import { documentById, type StudyDocument } from "./data/documents";
import { questions, type StudyQuestion } from "./data/questions";
import { concepts } from "./lib/concepts";
import { chapterHref, documentHref, getRouteFromHash, homeHref, type Route } from "./lib/routes";
import { MarkdownRenderer } from "./lib/markdown";

const aulaLabels: Record<AulaId, string> = {
  "4": "Aula 4 — Nível Rede",
  "5": "Aula 5 — Nível Ligação"
};

export function App() {
  const route = useHashRoute();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [route.name, route.name === "chapter" ? route.chapterId : "", route.name === "document" ? route.documentId : ""]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href={homeHref()} aria-label="Ir para o índice">
          Redes
        </a>
        <nav className="top-actions" aria-label="Acessos rápidos">
          <a href={homeHref()}>Índice</a>
          <a href={documentHref("conceitos")}>Conceitos</a>
          <a href={documentHref("topicos")}>Tópicos</a>
        </nav>
      </header>

      <main className="main-panel">
        {route.name === "home" && <HomePage />}
        {route.name === "chapter" && <ChapterPage chapterId={route.chapterId} />}
        {route.name === "document" && <DocumentPage documentId={route.documentId} />}
      </main>
    </div>
  );
}

function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(() => getRouteFromHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash(window.location.hash));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

function HomePage() {
  return (
    <div className="page-stack">
      <header className="page-header">
        <h1>Índice</h1>
        <p>Apontamentos de Redes organizados por aula e capítulo.</p>
      </header>

      <section className="chapter-index" aria-label="Lista de capítulos">
        {(["4", "5"] as AulaId[]).map((aula) => {
          const aulaChapters = chapters.filter((chapter) => chapter.aula === aula);

          return (
            <div className="aula-section" key={aula}>
              <h3>{aulaLabels[aula]}</h3>
              <div className="chapter-list">
                {aulaChapters.map((chapter) => (
                  <ChapterRow chapter={chapter} key={chapter.id} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

function ChapterRow({ chapter }: { chapter: Chapter }) {
  const chapterQuestions = questions.filter((question) => question.chapterId === chapter.id);

  return (
    <a className="chapter-row" href={chapterHref(chapter.id)}>
      <span className="chapter-number">{chapter.id}</span>
      <span className="chapter-row-main">
        <strong>{chapter.title}</strong>
        <small>{chapter.summary}</small>
      </span>
      {chapterQuestions.length > 0 && <span className="chapter-questions">{chapterQuestions.length} pergunta(s)</span>}
    </a>
  );
}

function ChapterPage({ chapterId }: { chapterId: ChapterId }) {
  const chapter = chapterById.get(chapterId);
  const chapterIndex = chapters.findIndex((item) => item.id === chapterId);
  const previous = chapterIndex > 0 ? chapters[chapterIndex - 1] : undefined;
  const next = chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1] : undefined;
  const chapterQuestions = questions.filter((question) => question.chapterId === chapterId);

  if (!chapter) {
    return <NotFound title="Capítulo não encontrado" />;
  }

  return (
    <article className="content-page">
      <header className="page-header content-header">
        <p className="eyebrow">{aulaLabels[chapter.aula]}</p>
        <h1>
          <span>{chapter.id}</span>
          {chapter.title}
        </h1>
        <p>{chapter.summary}</p>
      </header>

      <MarkdownRenderer markdown={chapter.content} concepts={concepts} highlightConcepts />

      <QuestionSection questions={chapterQuestions} chapter={chapter} />

      <nav className="chapter-pager" aria-label="Navegação entre capítulos">
        {previous ? (
          <a href={chapterHref(previous.id)}>
            <small>Anterior</small>
            {previous.id} · {previous.title}
          </a>
        ) : (
          <span />
        )}
        {next ? (
          <a href={chapterHref(next.id)}>
            <small>Seguinte</small>
            {next.id} · {next.title}
          </a>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}

function QuestionSection({ questions: chapterQuestions, chapter }: { questions: StudyQuestion[]; chapter: Chapter }) {
  return (
    <section className="questions-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Perguntas</p>
          <h2>{chapterQuestions.length ? "Perguntas deste capítulo" : "Pool pronta para crescer"}</h2>
        </div>
        <span className="question-count">{chapterQuestions.length}</span>
      </div>

      {chapterQuestions.length === 0 ? (
        <p className="empty-state">
          Ainda não há perguntas para {chapter.id}. Adiciona novas entradas em{" "}
          <code>src/data/questions.ts</code> com <code>chapterId: "{chapter.id}"</code>.
        </p>
      ) : (
        <div className="question-list">
          {chapterQuestions.map((question) => (
            <QuestionAccordion question={question} key={question.id} />
          ))}
        </div>
      )}
    </section>
  );
}

function QuestionAccordion({ question }: { question: StudyQuestion }) {
  const [open, setOpen] = useState(false);

  return (
    <article className={open ? "question-card open" : "question-card"}>
      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span>{question.question}</span>
        <small>{open ? "Ocultar resposta" : "Mostrar resposta"}</small>
      </button>
      {open && (
        <div className="question-answer">
          <MarkdownRenderer markdown={question.answer} concepts={concepts} highlightConcepts />
          {question.tags && question.tags.length > 0 && (
            <div className="tag-row">
              {question.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}

function DocumentPage({ documentId }: { documentId: string }) {
  const document = documentById.get(documentId as StudyDocument["id"]);

  if (!document) {
    return <NotFound title="Documento não encontrado" />;
  }

  return (
    <article className="content-page">
      <header className="page-header content-header">
        <p className="eyebrow">Documento de apoio</p>
        <h1>{document.title}</h1>
        <p>{document.description}</p>
      </header>
      <MarkdownRenderer markdown={document.content} concepts={concepts} highlightConcepts={false} />
    </article>
  );
}

function NotFound({ title }: { title: string }) {
  return (
    <section className="content-page">
      <header className="page-header content-header">
        <p className="eyebrow">404</p>
        <h1>{title}</h1>
        <p>Volta ao índice e escolhe uma das páginas disponíveis.</p>
      </header>
      <a className="button-link" href={homeHref()}>
        Ir para o índice
      </a>
    </section>
  );
}
