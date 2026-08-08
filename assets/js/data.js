/**
 * data.js
 * Fonte única de conteúdo do portfólio.
 * Pensado para, futuramente, ser substituído por arquivos JSON
 * carregados via fetch (ex: /projects/projects.json).
 */

const SITE_DATA = {
  githubUsername: "CarlosDevCode",

  stats: {
    yearsStudying: 1,
    projectsCount: 0,
  },

  stack: {
    categories: ["Linguagens", "Front-end", "Back-end", "Banco de Dados", "Ferramentas"],
    items: [
      { name: "Java", category: "Linguagens", level: 80, time: "6 meses", desc: "POO, coleções, streams e ecossistema Spring." },
      { name: "JavaScript", category: "Linguagens", level: 75, time: "1 mês", desc: "ES6+, assíncrono, manipulação de DOM." },
      { name: "Python", category: "Linguagens", level: 65, time: "1 ano", desc: "Scripts, automações e APIs com FastAPI." },
      { name: "SQL", category: "Linguagens", level: 70, time: "6 meses", desc: "Modelagem relacional e consultas otimizadas." },

      { name: "HTML", category: "Front-end", level: 85, time: "2 anos", desc: "Semântica, acessibilidade e SEO on-page." },
      { name: "CSS", category: "Front-end", level: 80, time: "2 anos", desc: "Layout responsivo, Grid, Flexbox e variáveis." },
      { name: "JavaScript (DOM)", category: "Front-end", level: 75, time: "1 mês", desc: "Interfaces interativas sem frameworks." },


      { name: "SQLite", category: "Banco de Dados", level: 70, time: "6 meses", desc: "Persistência local para projetos menores." },

      { name: "Git", category: "Ferramentas", level: 85, time: "6 meses", desc: "Fluxo de branches, rebase e revisão de código." },
      { name: "GitHub", category: "Ferramentas", level: 85, time: "6 meses", desc: "Versionamento, Actions e Pages." },
      { name: "VSCode", category: "Ferramentas", level: 90, time: "2 anos", desc: "Ambiente principal de desenvolvimento." },
      { name: "Eclipse", category: "Ferramentas", level: 65, time: "6 meses", desc: "Projetos Java acadêmicos e corporativos." },
      { name: "Linux", category: "Ferramentas", level: 70, time: "1 anos", desc: "Terminal como ambiente de trabalho principal." },
    ],
  },

  projects: [
    {
      name: "Sistema para Segurança Farmacológica e Otimização de Estoque",
      desc: "Aplicação de segurança farmacológica e otimização de estoque",
      objective: "Uso de análise preditiva atráves de machine-learning para gerenciamento de estoque e risco de interações medicamentosas.",
      tech: ["Python", "Pandas", "MySQL"],
      status: "Concluído",
      year: 2025,
      github: "https://github.com/seuusuario/estoque-api",
      demo: "",
      difficulty: "Intermediária",
      learnings: "Modelagem de banco relacional e validação de regras de negócio.",
      solved: "",
    },
    {
      name: "Máquina de Criptografia Enigma",
      desc: "Simulação da máquina Enigma utilizada para comunicação militar durante a Segunda Guerra Mundial",
      objective: "Praticar programação orientada á objetos em java e desenvolvimento web.",
      tech: ["JavaScript", "HTML", "CSS"],
      status: "Em desenvolvimento",
      year: 2026,
      github: "https://github.com/CarlosDevCode/dashboard-metricas",
      demo: "https://CarlosDevCode.github.io/dashboard-metricas",
      difficulty: "Intermediária",
      learnings: "Organização de componentes JS.",
      solved: "",
    },
    {
      name: "Sistema para Automação de Relatórios",
      desc: "Sistema que filtra dados especificos e preenche automaticamente em relatórios personalizados",
      objective: "Reduzir trabalho manual repetitivo com automação simples.",
      tech: ["Python"],
      status: "Em desenvolvimento",
      year: 2026,
      github: "https://github.com/seuusuario/relatorios-automaticos",
      demo: "",
      difficulty: "Intermediára",
      learnings: "Manipulação de arquivos e agendamento de tarefas.",
      solved: "",
    },
  ],

  timeline: [
    { date: "2026", title: "Estágio no HUAC", desc: "Desenvolvimento de softwares com foco na automação de processos dentro do Setor de Gestão da Qualidade (STGQ) do Hospital Universitário Alcides Carneiro (HUAC)." },
    { date: "2025", title: "Hackathon 2º Edição INOVA HUAC", desc: "Equipe classificada em 2º lugar, com aplicação via python e machine learning para segurança farmacológica e controle de estoque." },
    { date: "2025", title: "Início da graduação", desc: "Ingresso no curso de Tecnologia em Análise e Desenvolvimento de Sistemas na Universidade Estadual da Paraíba (UEPB)." },
    { date: "2017", title: "Desenvolvimento de Jogos Digitais", desc: "Início do meu contato com programação e desenvolvimento atráves da plataforma Roblox Studio." },
  ],

  formation: [
    { date: "2025 - atual", title: "Tecnologia em Análise e Desenvolvimento de Sistemas", desc: "UEPB - Universidade Estadual da Paraíba" },
    { date: "2021 - 2023", title: "Ensino Médio", desc: "ECIEM - Teodósio de Oliveira Lêdo" },
  ],

  certifications: [
    { name: "Cert. de participação na 15ª Edição do Fetech", org: "Fundação Parque Tecnológico da Paraíba", year: 2026, link: "#" },
    { name: "Cert. de Participação na 2ª Edição do Inova Huac", org: "Hospital Universitário Alcides Carneiro (HUAC)", year: 2025, link: "#" },
  ],

  objectives: [
    { goal: "Concluir a graduação em Tecnologia e Análise e Desenvolvimento de Sistemas", target: "2027" },
    { goal: "Encontrar um emprego na área", target: "2027" },
    { goal: "Contribuir com um projeto open-source relevante", target: "2027" },
  ],

  contact: {
    email: "eraldocarlos77777@gmail.com",
  },
};
