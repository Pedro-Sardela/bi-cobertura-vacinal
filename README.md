# Cobertura Vacinal na Região de Sorocaba

Landing page institucional desenvolvida em React + TypeScript para apresentar uma devolutiva social digital sobre a cobertura vacinal na Região de Sorocaba/SP entre 2023 e 2025.

O projeto utiliza dados públicos oficiais do Ministério da Saúde e integra um dashboard publicado no Power BI por meio de iframe público.

Site Publicado

A landing page está hospedada na Vercel e pode ser acessada pelo link:

https://bi-cobertura-vacinal-sorocaba.vercel.app/

## Objetivo

Transformar dados públicos de cobertura vacinal em informação acessível para a comunidade, apoiando a conscientização sobre a importância da vacinação e incentivando a atualização da caderneta vacinal.

Este projeto foi desenvolvido como parte da **Atividade Extensionista I** do curso **Tecnologia em Ciência de Dados — UNINTER**.

## Conteúdo do Dashboard

O relatório Power BI possui três páginas principais:

- **Visão Geral da Cobertura Vacinal**
- **Análise Comparativa entre Municípios**
- **Devolutiva Social e Orientações à Comunidade**

Na landing page, as abas alteram dinamicamente os textos explicativos e a página exibida no iframe do Power BI.

## Tecnologias

- React
- TypeScript
- Vite
- CSS moderno
- Power BI via iframe público

Não há backend, autenticação, API do Power BI ou Power BI Embedded com token.

## Como Rodar Localmente

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador:

```text
http://localhost:5173
```

## Scripts Disponíveis

```bash
npm run dev
```

Executa o projeto em modo desenvolvimento.

```bash
npm run build
```

Gera a versão de produção na pasta `dist`.

```bash
npm run preview
```

Executa localmente a versão gerada pelo build.

## Deploy

O projeto está publicado na Vercel.

Fluxo utilizado:

Repositório GitHub
→ Integração com Vercel
→ Build automático
→ Publicação da landing page

A cada novo push na branch principal do repositório, a Vercel executa automaticamente um novo deploy da aplicação.

Configuração utilizada para projeto React com Vite:

Build Command: npm run build
Output Directory: dist
Install Command: npm install

## Configuração do Power BI

As URLs do Power BI estão centralizadas em `src/App.tsx`.

A URL base do relatório fica em:

```ts
const powerBiBaseUrl = "https://app.powerbi.com/view?r=...";
```

Cada página do relatório usa um `pageName` específico:

```ts
pageName: '4f7e10f9a7bb1ad9f79c',
powerBiUrl: buildPowerBiUrl('4f7e10f9a7bb1ad9f79c'),
```

Para alterar a página exibida em cada aba, substitua apenas o valor do `pageName` dentro do objeto `reportPages`.

## Estrutura Principal

```text
.
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src
    ├── App.tsx
    ├── App.css
    ├── main.tsx
    └── vite-env.d.ts
```

## Fonte dos Dados

Os dados utilizados neste projeto são públicos e foram obtidos a partir de bases oficiais do **Ministério da Saúde**, considerando a cobertura vacinal por município de residência.

Foram analisados os anos de **2023, 2024 e 2025**, com foco nos imunobiológicos:

- BCG
- Pentavalente
- Poliomielite Injetável
- Tríplice Viral D1

## Autor

**Pedro Henrique Sardela Correa**

Curso: Tecnologia em Ciência de Dados — UNINTER  
Projeto: Atividade Extensionista I  
Ano: 2026
