export const profile = {
  name: "Tim Okuda",
  tagline: "Data Analyst → Analytics Engineer",
  subTagline:
    "Hybrid Data Analyst + Data Engineer with a specialty in automation.",
  about:
    "I turn messy manual workflows into clean, automated data systems. Three years as the one-person analytics and automation function at an insurance company, building Python RPA tools, Power BI dashboards, and financial pipelines that eliminated 40+ analyst-hours a month. Now focused on analytics engineering: dbt, Databricks, and building data products that don't need babysitting. Outside of work, I apply those same skills to quantitative finance, backtesting trading strategies and building stock analysis pipelines",
  email: "timokuda33@gmail.com",
  github: "https://github.com/TimHBSWFL",
  linkedin: "https://www.linkedin.com/in/timothy-okuda",
  resume: "/Timothy_Okuda_Resume_2026.pdf",
};

export const traits = [
  {
    title: "Detail-oriented",
    body: "Rigorous about accuracy in data, reporting, and reconciliation work.",
  },
  {
    title: "Continuous improvement",
    body: "Always looking for the next process to streamline or optimize.",
  },
  {
    title: "Lifelong learner",
    body: "Constantly expanding into new tools across data, ML, and AI engineering.",
  },
  {
    title: "Automation mindset",
    body: "An eye for turning repetitive tasks and processes into reliable automation.",
  },
];

export const experience = [
  {
    role: "Automation Engineer",
    company: "Millennial Specialty Insurance",
    period: "March 2022 – August 2025",
    bullets: [
      "Designed and deployed Power BI dashboards integrated with Azure DevOps, enabling real-time analytics and improving KPI visibility for 30+ stakeholders across 5 product teams.",
      "Streamlined and optimized monthly financial reconciliation reporting using Excel VBA Macros, SQL, and Python — reducing labor by 40+ hours/month and cutting resource needs by over 80%.",
      "Developed Python-based RPA tools (Selenium WebDriver) to automate repetitive tasks, saving hundreds of hours annually.",
      "Built a data-driven Selenium framework for automated software testing used by QA Analysts for regression testing, cutting manual testing each release cycle.",
    ],
  },
  {
    role: "Customer Account Specialist",
    company: 'Herc Rentals',
    period: "October 2020 - March 2022",
    bullets: [
      "Managed $2M+ customer account portfolios, reducing past-due percentages by 25%.",
      "Monitor large customer accounts for past-due payments, over-payments, and other irregularities.",
      "Generate invoices for clients, process credit memos, update customer records in database, and monthly summary billing.",
      "Daily billing in various customer portals, processing invoice adjustments, reviewing remittances, and reconciling all payments.",
    ],
  },
];

export const skillGroups = [
  {
    label: "BI & Reporting",
    items: [
      "Power BI",
      "DAX",
      "Power Query",
      "Excel (VBA, Pivot Tables, advanced formulas)",
    ],
  },
  {
    label: "Languages",
    items: [
      "Python (pandas, NumPy, Scikit-learn, XGBoost, Selenium, FastAPI)",
      "SQL (window functions, CTEs, aggregations)",
    ],
  },
  {
    label: "Data Engineering",
    items: [
      "ETL pipeline development",
      "Databricks",
      "Delta Lake",
      "dbt Core",
      "Azure SQL",
      "GitHub Actions",
    ],
  },
  {
    label: "Cloud & Platforms",
    items: [
      "Microsoft Azure",
      "Microsoft Fabric",
      "AWS",
      "Azure DevOps",
      "Salesforce",
      "ServiceNow",
    ],
  },
  {
    label: "Dev Tools & Visualization",
    items: [
      "VS Code",
      "Git/GitHub",
      "Jupyter Notebooks",
      "Matplotlib",
      "Seaborn",
      "Claude Code (AI Automation)",
    ],
  },
];

export const projects = [
  {
    name: "stock-data-etl",
    description:
      "yfinance stock data scraped daily with GitHub Actions and loaded into Databricks; includes analytics and data modeling.",
    tech: ["Python", "SQL", "YAML"],
    url: "https://github.com/TimHBSWFL/stock-data-etl",
  },
  {
    name: "stock-analytics-dbt",
    description:
      "Migrating Databricks SQL logic into a dbt Core project; scheduled dbt run / dbt test via GitHub Actions, synced with Databricks.",
    tech: ["SQL", "dbt Core", "YAML"],
    url: "https://github.com/TimHBSWFL/stock-analytics-dbt",
  },
  {
    name: "s-p500-stock-analysis",
    description:
      "Quantitative analysis of S&P 500 stocks over 5 years and multi-horizon windows: log returns, volatility, max drawdown, Sharpe ratios, and an investment watchlist.",
    tech: ["Python", "Jupyter Notebook"],
    url: "https://github.com/TimHBSWFL/s-p500-stock-analysis",
  },
];

export const education = [
  {
    name: "UC San Diego Extension Machine Learning Engineering Bootcamp",
    provider: "Springboard / UC San Diego",
    period: "December 2023 – February 2025",
    description:
      "600+ hours of hands-on course material with 1:1 industry expert mentor oversight. Mastered skills in the machine learning stack, including data wrangling at scale, deep learning, and building and deploying large-scale AI systems.",
    capstones: [
      { label: "ML Capstone (GitHub)", url: "https://github.com/TimHBSWFL/UCSD-ML-Capstone" },
    ],
  },
  {
    name: "Data Analytics Career Track",
    provider: "Springboard",
    period: "October 2020 – November 2021",
    description:
      "400+ hours of hands-on course material with 1:1 industry expert mentor oversight. Mastered skills in analyzing business problems, data analysis, presenting business insights to stakeholders, SQL, Python, and data visualization.",
    capstones: [
      { label: "Analytics Capstone (GitHub)", url: "https://github.com/TimHBSWFL/Data-Analytics-Capstone" },
      { label: "Capstone 2 (Tableau)", url: "https://public.tableau.com/app/profile/timothy.okuda/viz/Capstone2_Draft_11_03_21/Capstone2" },
    ],
  },
  {
    name: "Bachelor of Arts (BA) in Film & Media Studies",
    provider: "University of California, Irvine",
    period: "September 2005 – December 2007",
    description: "",
    capstones: [],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
