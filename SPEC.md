# Tim Okuda — Portfolio Website Spec

> Status: Draft for review. No code written yet. Update freely before build.

## 1. Overview

A personal portfolio site for **Timothy "Tim" Okuda**, positioning him for **Data Analyst / Analytics Engineering** roles. Goal: communicate his hybrid Data Analyst + Data Engineer profile, automation specialty, domain expertise (insurance / operations / accounting), and showcase selected GitHub projects.

## 2. Tech & Delivery Decisions

| Decision | Choice |
|---|---|
| Framework | **Next.js** (App Router) |
| Styling | **Tailwind CSS** |
| Structure | **Single-page scroll** with anchored nav sections |
| Aesthetic | **Dark mode / techy** (developer-focused, monospace accents) |
| Hosting | **Local dev only for now** (`next dev`). No hosting commitment yet — prototype/experiment first. Static export remains an option later. |
| Contact | Links only (no backend form) |
| Projects | Hardcoded from a curated list (3 specific repos) |
| Domain | None purchased yet. Likely future: **timothyokuda.com**. Build domain-agnostic. |
| Accent color | **Emerald `#10b981`** on a near-black background (`#0a0a0b`). |

## 3. Site Sections (single-page scroll)

Sticky top nav with smooth-scroll links: **Home · About · Experience · Skills · Projects · Contact**

### 3.1 Hero / Home
- Name: **Tim Okuda**
- Tagline: **"Full-Stack Analyst & Aspiring Analytics Engineer"**
- One-line sub-tagline: hybrid Data Analyst + Data Engineer specializing in automation.
- Primary CTAs: `View Projects`, `Download Resume`, social icons (GitHub, LinkedIn, Email).
- Dark hero with subtle techy visual (e.g. grid/gradient or animated terminal-style accent — kept tasteful).

### 3.2 About
Blurb (final copy):
> Hybrid Data Analyst and Data Engineer with a specialty in automation. Secondary background in machine learning and familiarity with AI Engineering. Domain expertise in insurance, operations, and accounting. Seeking a Data Analyst or Analytics Engineering role to leverage skills in scripting, data transformation, feature engineering, data pipelines, analytics, APIs, orchestration, and machine learning.

### 3.3 Why Hire Me / Characteristics
Lead traits (display as cards or a short list):
- Detail-oriented
- Strives for continuous improvement
- Lifelong learner
- Eye for automating tasks and processes

### 3.4 Experience (Highlights only)
**Automation Engineer** — Millennial Specialty Insurance
*March 2022 – August 2025*
- Designed and deployed Power BI dashboards integrated with Azure DevOps, enabling real-time analytics and improving KPI visibility for 30+ stakeholders across 5 product teams.
- Streamlined and optimized monthly financial reconciliation reporting using Excel VBA Macros, SQL, and Python — reducing labor by 40+ hours/month and cutting resource needs by over 80%.
- Developed Python-based RPA tools (Selenium WebDriver) to automate repetitive tasks, saving hundreds of hours annually.
- Built a data-driven Selenium framework for automated software testing used by QA Analysts for regression testing, cutting manual testing each release cycle.

### 3.5 Skills (grouped)
- **BI & Reporting:** Power BI, DAX, Power Query, Excel (VBA, Pivot Tables, advanced formulas)
- **Languages:** Python (pandas, NumPy, Scikit-learn, XGBoost, Selenium, FastAPI), SQL (window functions, CTEs, aggregations)
- **Data Engineering:** ETL pipeline development, Databricks, Delta Lake, dbt Core, Azure SQL, GitHub Actions
- **Cloud & Platforms:** Microsoft Azure, Microsoft Fabric, AWS, Azure DevOps, Salesforce, ServiceNow
- **Dev Tools & Visualization:** VS Code, Git/GitHub, Jupyter Notebooks, Matplotlib, Seaborn, Claude Code (AI Automation)

### 3.6 Projects (curated cards, each links to GitHub)
1. **stock-data-etl** — yfinance stock data scraped daily with GitHub Actions and loaded into Databricks; includes analytics and data modeling.
   - Tech: Python, SQL, YAML
   - https://github.com/TimHBSWFL/stock-data-etl
2. **stock-analytics-dbt** — Migrating Databricks SQL logic into a dbt Core project; scheduled `dbt run` / `dbt test` via GitHub Actions, synced with Databricks.
   - Tech: SQL, dbt Core, YAML
   - https://github.com/TimHBSWFL/stock-analytics-dbt
3. **s-p500-stock-analysis** — Quantitative analysis of S&P 500 stocks over 5 years and multi-horizon windows: log returns, volatility, max drawdown, Sharpe ratios, and an investment watchlist.
   - Tech: Python, Jupyter Notebook
   - https://github.com/TimHBSWFL/s-p500-stock-analysis

### 3.7 Contact
Links only (no form):
- **Email:** timokuda33@gmail.com (mailto link)
- **GitHub:** https://github.com/TimHBSWFL
- **LinkedIn:** https://www.linkedin.com/in/timothy-okuda
- **Resume:** download button → PDF served from site

## 4. Assets

| Asset | Source / Action |
|---|---|
| Resume PDF | Copy from `C:\Users\tokud\OneDrive\Documents\Employment\Resumes\Data Analyst\Timothy_Okuda_Resume_05.17.2026.pdf` into `public/` as `Tim_Okuda_Resume.pdf` |
| Profile photo | Use `C:\Users\tokud\OneDrive\Pictures\LinkedIn_Tim.jpg` → copy into `public/` as `tim-okuda.jpg`. Displayed in hero/about. |
| Favicon / logo | Generate a simple monogram (e.g. "TO") in accent color. TBD |

## 5. Design Notes

- **Theme:** dark, near-black background; high-contrast light text; one accent color; monospace font for code/section labels, clean sans-serif for body.
- **Typography suggestion:** `Inter` or `Geist` for body, `JetBrains Mono` / `Geist Mono` for accents.
- **Responsive:** mobile-first; nav collapses to a hamburger or simple stacked menu on small screens.
- **Motion:** subtle scroll-reveal on sections; restrained, professional. No heavy animation.
- **Accessibility:** sufficient contrast, semantic HTML, keyboard-navigable nav, alt text.
- **SEO:** page title "Tim Okuda — Data Analyst & Analytics Engineer", meta description from the About blurb, Open Graph tags.

## 6. Resolved Decisions

1. **Accent color** — Emerald `#10b981`. ✅
2. **Domain** — none yet; likely `timothyokuda.com` later. Build domain-agnostic. ✅
3. **Profile photo** — Yes, use LinkedIn photo in hero/about. ✅
4. **Email** — `timokuda33@gmail.com` (used for job applications). ✅
5. **Hosting** — Local dev only for now; prototype first, decide hosting later. ✅

## 7. Proposed Build Plan (after spec sign-off)

1. Scaffold Next.js + Tailwind project (static-export config).
2. Set up theme tokens (colors, fonts) and global dark styling.
3. Build layout shell: sticky nav + smooth scroll + footer.
4. Implement sections in order: Hero → About → Why Hire Me → Experience → Skills → Projects → Contact.
5. Add resume PDF to `public/`, wire download button.
6. Responsive pass + accessibility pass.
7. SEO/meta + favicon.
8. `next build` static export; verify `out/` renders locally.
9. Hand off deployment steps for Hostinger.
