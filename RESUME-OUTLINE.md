# Résumé: outline, wording and industry versions

*Last updated: 12 November 2026.* Titles, dates, employers and numbers come from CONSISTENCY.md. If a fact changes, change it there first.

## The four versions

| Version | Use it for | Status |
|---|---|---|
| **General** | The website download; any application that doesn't clearly fit A, B or C | **Built.** `assets/Jose-Farfan-Resume.docx` and `.pdf` |
| **A. Manufacturing & semiconductor operations** | Plant, fab, operations and business-solutions analytics roles; process-improvement and engineering-analytics roles | Outlined below, files not built yet |
| **B. Enterprise BI / Microsoft data stack** | Senior BI Developer, Power BI Developer, Analytics Engineer and BI Lead roles; Microsoft partners and consultancies | Outlined below, files not built yet |
| **C. Operations & commercial analytics** | Revenue, contract, pricing and operations analytics in services, distribution, logistics, mining and utilities | Outlined below, files not built yet |

All four use the same facts, titles, dates and numbers. Only the headline, the summary, the order of the skills lines and the order of the bullets change. Nothing is added to one version that isn't true in all of them.

**Where the files live.** Only the General version is published (it is the site's download). Keep A, B and C in a private `resumes/` folder, which is gitignored: one public résumé avoids a recruiter finding two different ones.

## Format rules (these are what make it parse)

- **One column.** No tables, text boxes, columns, icons, emoji, photos or graphics.
- **Font:** Calibri 10.5 pt body, 11.5 pt section headings, 20 pt name. US Letter; margins 0.6" sides, 0.5" top and bottom.
- **Headings** use Word's built-in *Heading 1* style: **Summary, Skills, Experience, Education, Awards & Training**.
- **Contact details in the body**, never in Word's header/footer area. Three lines: headline / city, phone, email / LinkedIn, website, work authorization.
- **Each role on three lines:** Title / Employer — City, Country / MM/YYYY – MM/YYYY, then bullets.
- **Length:** 2 pages, no exceptions. If a new bullet goes in, an old one comes out.
- **Official job titles only** in the Experience section. The headline is positioning and can change per version; the titles cannot, because background checks verify them with the employer.
- **When you edit in Word:** keep the styles, keep File → Properties (Title "Jose Farfan – Résumé", Author "Jose Farfan"), and export with File → Save As → PDF. No emoji: a single one embedded a 7.7 MB font once.

---

## General version (built, and served by the site)

```
JOSE FARFAN
Senior BI Developer & Data Lead | Power BI, Microsoft Fabric, DAX, SQL
Phoenix, AZ | (480) 620-6419 | jrfarfanf@gmail.com
linkedin.com/in/jose-rafael-farfan | josefarfan.com | Authorized to work in the US — no sponsorship required
```

### SUMMARY
Senior BI developer and data lead with 7+ years in data analytics and 10+ years across engineering and data. Turns operations, sales and finance data into recommendations on revenue, cost and process efficiency, and leads the projects, governance and adoption that make them stick. Led a Sales & Finance semantic model adopted by 500+ users that flagged £5M+ (~$6.5M) in contract revenue for review. Mechanical engineer who raised packing-machine MTBF 6× with sensor data and Lean Six Sigma methods. Bilingual English/Spanish.

### SKILLS
- **BI & Modeling:** Power BI, DAX, Power Query (M), advanced Excel (Power Pivot), semantic models, star/galaxy schema, row-level security, deployment pipelines, KPI design, data storytelling, PowerPoint
- **Data Engineering:** SQL (T-SQL), Python (PySpark), Microsoft Fabric (Lakehouse, Warehouse, Dataflows Gen2), ETL/ELT
- **Leadership & Governance:** stakeholder management, requirements gathering, data governance, data quality, master data management, KPI standardization, change management, mentoring, coaching
- **Project Delivery & Platforms:** project management, Azure DevOps, Agile/Scrum, sprint planning, backlog management, SAP ECC/Fiori (ERP), NetSuite, Dayforce
- **Manufacturing & Process Improvement:** Lean Six Sigma methods, root cause analysis, OEE, MTBF, SPC, Lean manufacturing, cost-benefit analysis, bills of materials (BOM)
- **AI & Automation:** AI-assisted development (Claude Code, MCP servers), LLM workflow automation
- **Languages:** English (fluent), Spanish (native)

### EXPERIENCE

The italic tag at the start of each bullet is a label for the version notes below. It is not part of the résumé text.

**Senior Business Intelligence Analyst**
Biffa Waste Services — London, United Kingdom (Hybrid)
01/2025 – 11/2026
1. *[model]* Led end to end the enterprise Sales & Finance semantic model in Power BI, a galaxy schema over NetSuite, Dayforce and contract data, which became the single source of truth for 500+ active users across every UK region, all sales channels, Finance and leadership.
2. *[revenue]* Flagged £5M+ (~$6.5M) in annualized contract revenue pending rollover through contract-health reporting; about 30% went to the business as recoverable revenue and the rest was obsolete contracts, suspended to clean up the data.
3. *[efficiency]* Improved internal process efficiency by replacing 5+ siloed Excel processes (pre-sales CRM, revenue projection, rolling revenue, churn, contract-health checks), eliminating ~13,500 manual requests a year, worth ~$52K (£40K) in labor.
4. *[definitions]* Partnered with the Sales and Finance business owners to standardize revenue definitions, including the variants used for bonus calculations, so reporting and sales bonuses run on one agreed number.
5. *[delivery]* Brought a structured approach to project management and execution: introduced Azure DevOps sprint delivery for the 8-person BI team, with a prioritized, visible backlog and cost-benefit sizing (time saved × labor cost, revenue at risk) for each project.
6. *[governance]* Owned model governance and administrative controls (row-level security, deployment pipelines, refresh reliability); cut refresh time from 20 to 5 minutes while covering more data.

**Business Intelligence Executive**
BAT (British American Tobacco) — Southampton, United Kingdom
12/2022 – 01/2025
1. *[SAP]* Built Power BI SLA-compliance reporting for the global Operations Data Management team: 3,000+ SKU master-data change requests a month (bills of materials, leaf and packaging specifications) in SAP ECC/Fiori across five continents.
2. *[tool]* Designed a change-request selection tool that routes users to the right option among 200+ CR types, cutting selection time from ~5 to ~1 minute (200+ hours saved a month) and incorrect requests by ~10%.
4. *[quality]* Ensured strict process adherence and high data-quality standards for SAP master data, helping sustain the 99% master-data quality compliance target through monitoring, prevention and corrective fixes.
5. *[storytelling]* Delivered executive data storytelling in PowerPoint and Power BI for regional and global Continuous Improvement / Work Process Improvement leadership.

**Business Intelligence Engineer**
BAT (British American Tobacco) — Caracas, Venezuela
06/2021 – 12/2022
1. *[suite]* Built an end-to-end Power BI KPI suite on machine sensor data (stops, MTBF, OEE, waste) for 12 production lines, used by 80+ technicians, admin staff and factory leaders.
2. *[reliability]* Partnered with maintenance on root-cause analysis using Lean Six Sigma methods, raising packing-machine MTBF from under 10 to 60+ minutes (6×) and plant OEE from ~65% to ~71%, beating the 70% target.
3. *[automation]* Automated data cleansing and transformation in SQL and Power Query, replacing manual production reports.
4. *[adoption]* Worked day to day with 40+ factory technicians (line manager for about 20), embedding the KPI suite into shop-floor routines to drive adoption.

**Business Intelligence Developer**
ASIS Consulting — Caracas, Venezuela
07/2019 – 06/2021
1. Delivered Power BI solutions for 5+ major tax-consulting clients: financial modeling, tax and transactional reporting with DAX time intelligence.
2. Administered Power BI Service across client environments (workspace governance, deployment, user access) and translated stakeholder requirements into scalable data models with the Data Engineering team.

**3D Printing Engineer**
3D TECH — Caracas, Venezuela
03/2017 – 06/2019
1. Operated and maintained the lab's 3D printers, producing 6+ medical models a month (mainly jaw models) used by doctors to plan procedures and prosthetics.

**Junior Project Engineer**
Venezuelan Heavy Industry CA (VHICOA) — Bolívar, Venezuela
02/2016 – 02/2017
1. Worked on 2 high-pressure vessel projects for the oil industry ($30M+ each) to ASME, AWS and API standards: drawings, NDT and hydrostatic testing, and materials, labor and progress tracking in Excel.

### EDUCATION
**Bachelor of Engineering (B.Eng.), Mechanical Engineering**
Universidad Metropolitana — Caracas, Venezuela | 2015

### AWARDS & TRAINING
- Nominee, Diamond Awards (high-performer recognition), Biffa Waste Services, for the Sales & Finance semantic model
- Digital Learner Award, BAT (British American Tobacco)
- Training: Project Management (Tecnología Financiera, 2016); Change Management Foundations (LinkedIn Learning)

---

## Version A: Manufacturing & semiconductor operations

**Reader:** an operations, manufacturing or business-solutions manager who wants an engineer who can analyze, improve a process and run the project. They look for plant experience, Lean Six Sigma, SAP and cost awareness before they look for Power BI.

**Headline**
`Senior BI & Analytics Engineer | Manufacturing Analytics, Process Improvement, Power BI, SQL, Python, SAP`

**Summary**
Mechanical engineer and senior BI and analytics engineer with 7+ years in data analytics and 10+ years across engineering and data. On the factory floor, raised packing-machine MTBF 6× and plant OEE from ~65% to ~71% across 12 production lines using sensor data and Lean Six Sigma methods. In global operations, governed SAP master data (bills of materials, material and packaging specifications) for 3,000+ change requests a month at 99% quality compliance. Led a Sales & Finance model adopted by 500+ users that flagged £5M+ (~$6.5M) in contract revenue for review. Works independently and across factory, sales and business-unit teams with a structured approach to project management. Bilingual English/Spanish.

**Skills order:** Manufacturing & Process Improvement → Project Delivery & Platforms (move SAP ECC/Fiori (ERP) to the front of the line) → Data Engineering → BI & Modeling → Leadership & Governance → AI & Automation → Languages.

**Bullet order**
- Biffa: revenue, efficiency, delivery, model, definitions. Drop governance if space is short.
- BAT Executive: SAP, quality, tool, SLA, storytelling.
- BAT Engineer: reliability, suite, adoption, automation. This role carries the version, so it keeps all four bullets.
- ASIS: one bullet (the first).
- 3D TECH and VHICOA: keep both. Regulated manufacturers read ASME / AWS / API and NDT as credibility. Restore the fuller VHICOA wording: "…prepared and checked drawings, coordinated NDT and hydrostatic testing, and tracked materials, labor and progress in Excel."

**Words to mirror from the posting when they are true:** factory, operations, OEE, MTBF, downtime, root cause analysis, continuous improvement, process improvement, Lean Six Sigma methods, SPC, SAP, ERP, bills of materials, master data, cost-benefit, cross-functional, project management, Python.

**Do not claim:** semiconductor or packaging experience, JMP, Tableau, a Six Sigma belt, product cost modeling (say "cost-benefit and savings models"), yield engineering.

## Version B: Enterprise BI / Microsoft data stack

**Reader:** a BI or data-platform manager, or a consulting practice lead, who will test depth in Power BI, DAX, Fabric and SQL and wants someone who can own a model and handle stakeholders.

**Headline**
`Senior BI Developer & Data Lead | Power BI, Microsoft Fabric, DAX, SQL`

**Summary**
Senior BI developer and data lead with 7+ years in Power BI and 10+ years across engineering and data. Led end to end an enterprise Sales & Finance semantic model (galaxy schema over NetSuite, Dayforce and contract data) adopted by 500+ active users, with row-level security, deployment pipelines and refresh cut from 20 to 5 minutes. Hands-on in DAX, Power Query, T-SQL and Microsoft Fabric (Lakehouse, Warehouse, Dataflows Gen2, PySpark notebooks). Introduced Azure DevOps sprint delivery for an 8-person BI team and standardized revenue definitions with Sales and Finance leadership. Known for stakeholder alignment, data governance and the change management that drives adoption. Bilingual English/Spanish.

**Skills order:** BI & Modeling → Data Engineering → Leadership & Governance → Project Delivery & Platforms → AI & Automation → Manufacturing & Process Improvement (shortened to one line) → Languages.

**Bullet order**
- Biffa: model, governance, definitions, delivery, revenue, efficiency.
- BAT Executive: tool, SAP, SLA, storytelling. Drop quality if space is short.
- BAT Engineer: suite, automation, reliability.
- ASIS: restore three bullets (client delivery; Power BI Service administration; requirements to data models with the Data Engineering team). Consulting experience matters to partners.
- 3D TECH and VHICOA: one line each.

**Words to mirror when true:** semantic model, star schema, DAX, Power Query, Fabric, Lakehouse, Warehouse, row-level security, deployment pipelines, Azure DevOps, data governance, self-service BI, requirements gathering, stakeholder management.

**Do not claim:** Azure Synapse, Databricks, Tableau, DP-600 or PL-300 until earned.

## Version C: Operations & commercial analytics

**Reader:** a commercial, finance or operations leader in a services, distribution or resources business who cares about contracts, revenue, churn and cost, and wants analysis that changes decisions.

**Headline**
`Senior BI & Analytics Lead | Revenue, Contract & Operations Analytics, Power BI, SQL, Bilingual English/Spanish`

**Summary**
Senior BI and analytics lead with 7+ years in data analytics and 10+ years across engineering and data. In waste and recycling services, led the enterprise Sales & Finance model that 500+ people across every region and sales channel used to run pipeline, revenue projection, churn and contract health; it flagged £5M+ (~$6.5M) in annualized contract revenue for review and removed ~$52K a year in manual reporting. Standardized revenue definitions, including those behind sales bonuses, with Sales and Finance leadership. Mechanical engineer with plant-floor experience (MTBF 6×, OEE ~65% to ~71%) and global SAP master-data operations across five continents. Bilingual English/Spanish, with experience in the UK and Latin America.

**Skills order:** BI & Modeling → Leadership & Governance → Project Delivery & Platforms → Manufacturing & Process Improvement → Data Engineering → AI & Automation. Put **Languages** second when the role touches Latin America.

**Bullet order**
- Biffa: revenue, model, definitions, efficiency, delivery, governance. All six stay; this role carries the version.
- BAT Executive: SLA, SAP, tool, quality, storytelling.
- BAT Engineer: reliability, suite, adoption.
- ASIS: two bullets, leading with financial modeling.
- 3D TECH: one line. VHICOA: keep the full bullet for mining, energy and heavy-industry employers.

**Words to mirror when true:** contracts, revenue, churn, pipeline, sales channels, revenue projection, bonus calculations, operations, cost savings, cross-functional, Latin America, bilingual.

**Do not claim:** route optimization, cost-to-serve modeling, pricing models, mining experience.

---

## Five-minute tailoring before each application

1. Pick the version by the reader, not by the company name.
2. Read the posting's top five requirements and make sure each appears in the summary or the first bullet of a role, in the posting's own words, wherever it is true.
3. Reorder the skills line that matters most so the posting's tools come first.
4. Check the file is still 2 pages, then export to PDF.
5. Save the posting and the exact résumé you sent, so you can re-read both before the interview.

## How the numbers are calculated (be ready to say this in interviews)

- **Biffa ~$52K a year:** ~13,500 report requests a year × 6 minutes each = ~1,350 hours × $39/hour average cost of the people requesting and processing them ≈ $52.7K (≈ £40K).
- **Biffa £5M+ (~$6.5M) flagged:** annualized value of contracts the contract-health and sales model showed as pending rollover. Roughly 70% proved to be obsolete contracts that were suspended or deleted (a data-quality result) and roughly 30% was recoverable revenue the business acted on. The split is an estimate, so say "about 30%" and never present the full £5M as recovered. The dollar figure uses the same rate as the savings (£1 ≈ $1.30).
- **BAT 200+ hours a month:** 3,000+ change requests a month × ~4 minutes saved each (5 minutes → 1 minute) ≈ 200 hours.
- **Cost-benefit sizing:** time an action takes × hourly cost of the person doing it × how often it happens, plus revenue at risk where it applies. This is how projects and process improvements were valued. It is a business-case model, not product cost modeling; say so if asked.
