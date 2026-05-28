import { useState } from "react";
import "./App.css";

type PageKey = "geral" | "municipios" | "devolutiva";

interface ReportPage {
  label: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  pageName: string;
  powerBiUrl: string;
}

const powerBiBaseUrl =
  "https://app.powerbi.com/view?r=eyJrIjoiMzc3ZWY0ODEtZjE2Ny00M2Q2LWEzZjUtNTViNTAzMjBiZGIxIiwidCI6ImNmNzJlMmJkLTdhMmItNDc4My1iZGViLTM5ZDU3YjA3Zjc2ZiIsImMiOjR9";

function buildPowerBiUrl(pageName: string) {
  return `${powerBiBaseUrl}&pageName=${pageName}`;
}

const reportPages: Record<PageKey, ReportPage> = {
  geral: {
    label: "Visão Geral",
    title: "Visão Geral da Cobertura Vacinal",
    subtitle:
      "Panorama da cobertura vacinal na Região de Sorocaba entre 2023 e 2025",
    description:
      "Esta seção apresenta uma visão consolidada da cobertura vacinal na Região de Sorocaba, considerando os imunobiológicos BCG, Pentavalente, Poliomielite Injetável e Tríplice Viral D1. O painel permite acompanhar a cobertura por ano, município e vacina, apoiando a identificação de padrões gerais e possíveis pontos de atenção.",
    highlights: [
      "Análise de dados públicos oficiais de cobertura vacinal.",
      "Comparação entre diferentes imunobiológicos.",
      "Visualização da evolução anual e mensal dos indicadores.",
      "Apoio à identificação de coberturas abaixo das metas de referência.",
    ],
    pageName: "4f7e10f9a7bb1ad9f79c",
    powerBiUrl: buildPowerBiUrl("4f7e10f9a7bb1ad9f79c"),
  },
  municipios: {
    label: "Municípios",
    title: "Análise Comparativa entre Municípios",
    subtitle:
      "Identificação de municípios com menor cobertura e maior distância em relação à meta",
    description:
      "Esta seção compara os municípios da Região de Sorocaba, permitindo identificar localidades com menor cobertura vacinal e imunobiológicos que apresentam maior necessidade de atenção. A análise auxilia na compreensão das desigualdades territoriais e pode orientar ações de comunicação e mobilização em saúde pública.",
    highlights: [
      "Ranking de cobertura vacinal por município.",
      "Comparação entre municípios e imunobiológicos.",
      "Identificação de localidades abaixo da meta vacinal.",
      "Apoio à priorização de ações educativas e informativas.",
    ],
    pageName: "87ed9944f1059c38df9e",
    powerBiUrl: buildPowerBiUrl("87ed9944f1059c38df9e"),
  },
  devolutiva: {
    label: "Devolutiva Social",
    title: "Devolutiva Social e Orientações à Comunidade",
    subtitle:
      "Informação acessível para apoiar a atualização da caderneta de vacinação",
    description:
      "Esta seção transforma os dados analisados em uma devolutiva social voltada à comunidade. O objetivo é apresentar informações de forma clara, acessível e útil, incentivando a verificação da caderneta de vacinação e a busca pelas Unidades Básicas de Saúde para atualização das vacinas em atraso.",
    highlights: [
      "Verifique a caderneta de vacinação das crianças.",
      "Procure a Unidade Básica de Saúde mais próxima.",
      "Leve documento pessoal, cartão SUS e caderneta de vacinação.",
      "Vacinas em atraso podem ser atualizadas conforme orientação da equipe de saúde.",
      "A vacinação protege o indivíduo, a família e a comunidade.",
    ],
    pageName: "bdd8e60ef391d4e5f6a7",
    powerBiUrl: buildPowerBiUrl("bdd8e60ef391d4e5f6a7"),
  },
};

const pageOrder: PageKey[] = ["geral", "municipios", "devolutiva"];

const projectFacts = [
  { label: "Período", value: "2023 a 2025" },
  { label: "Região", value: "Sorocaba/SP" },
  { label: "Fonte", value: "Ministério da Saúde" },
  { label: "Ferramentas", value: "Power BI + React" },
];

function isPlaceholderUrl(url: string) {
  return url.includes("PAGE_NAME_") || url.includes("POWER_BI_URL_");
}

export default function App() {
  const [selectedPage, setSelectedPage] = useState<PageKey>("geral");
  const currentPage = reportPages[selectedPage];
  const iframeUrl = isPlaceholderUrl(currentPage.powerBiUrl)
    ? "about:blank"
    : currentPage.powerBiUrl;

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="container header-content">
          <a className="brand" href="#top" aria-label="Início">
            <span className="brand-rule" />
            <span className="brand-title">
              Cobertura Vacinal na Região de Sorocaba
            </span>
          </a>
          <span className="project-badge">
            UNINTER · Extensionista · Ciência de Dados
          </span>
        </div>
      </header>

      <section className="hero-section" id="top">
        <div className="container hero-content">
          <span className="hero-kicker">
            Dados públicos como serviço à comunidade
          </span>
          <h1>Cobertura Vacinal na Região de Sorocaba</h1>
          <p>
            Dashboard interativo com dados públicos de cobertura vacinal,
            desenvolvido como atividade extensionista em Ciência de Dados.
          </p>
          <a className="primary-action" href="#dashboard">
            Ver Dashboard
          </a>

          <div
            className="facts-grid"
            aria-label="Informações rápidas do projeto"
          >
            {projectFacts.map((fact, index) => (
              <article
                className="fact-card"
                key={fact.label}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <nav className="tabs-bar" aria-label="Páginas do relatório">
        <div className="container tabs">
          {pageOrder.map((pageKey) => {
            const page = reportPages[pageKey];
            const isActive = pageKey === selectedPage;

            return (
              <button
                className={isActive ? "tab-button active" : "tab-button"}
                key={pageKey}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelectedPage(pageKey)}
              >
                {page.label}
              </button>
            );
          })}
        </div>
      </nav>

      <section className="dashboard-section" id="dashboard">
        <div className="container dashboard-grid">
          <article className="report-copy" key={selectedPage}>
            <span className="section-tag">{currentPage.label}</span>
            <h2>{currentPage.title}</h2>
            <p className="subtitle">{currentPage.subtitle}</p>
            <p className="description">{currentPage.description}</p>

            <ul className="highlight-list" aria-label="Destaques">
              {currentPage.highlights.map((highlight) => (
                <li key={highlight}>
                  <span aria-hidden="true">▸</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </article>

          <section className="powerbi-panel" aria-label="Dashboard Power BI">
            <div className="powerbi-label">
              <span aria-hidden="true">↗</span>
              Power BI · Relatório Interativo
            </div>

            <div className="iframe-wrapper">
              {isPlaceholderUrl(currentPage.powerBiUrl) && (
                <div className="placeholder-note">
                  Substitua <strong>{currentPage.pageName}</strong> pelo
                  pageName real da página <strong>{currentPage.label}</strong>{" "}
                  no objeto reportPages.
                </div>
              )}
              <iframe
                key={currentPage.powerBiUrl}
                title={`Power BI - ${currentPage.title}`}
                src={iframeUrl}
                allowFullScreen
                frameBorder="0"
              />
              {!isPlaceholderUrl(currentPage.powerBiUrl) && (
                <div className="powerbi-nav-mask" aria-hidden="true" />
              )}
            </div>
          </section>
        </div>
      </section>

      <section className="info-section">
        <div className="container info-grid">
          <article className="info-card">
            <span className="section-tag">DATASUS</span>
            <h2>Sobre os dados</h2>
            <p>
              Os dados utilizados neste projeto são públicos e foram obtidos a
              partir de bases oficiais do Ministério da Saúde, considerando a
              cobertura vacinal por município de residência. Foram analisados os
              anos de 2023, 2024 e 2025, com foco nos imunobiológicos BCG,
              Pentavalente, Poliomielite Injetável e Tríplice Viral D1.
            </p>
          </article>

          <article className="info-card">
            <span className="section-tag">Extensão</span>
            <h2>Objetivo extensionista</h2>
            <p>
              O objetivo da devolutiva social é transformar dados públicos em
              informação acessível para a comunidade, apoiando a conscientização
              sobre a importância da vacinação e incentivando a atualização da
              caderneta vacinal.
            </p>
          </article>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-content">
          <div>
            <h2>Pedro Henrique Sardela Correa</h2>
            <p>Curso: Tecnologia em Ciência de Dados — UNINTER</p>
            <p>Projeto: Atividade Extensionista I</p>
            <p>Fonte dos dados: Ministério da Saúde</p>
            <p>Ano do projeto: 2026</p>
          </div>

          <div className="footer-badges" aria-label="Instituições e fontes">
            <span>UNINTER</span>
            <span>2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
