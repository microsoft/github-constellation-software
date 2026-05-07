<div align="center">

# 🌐 GitHub @ Constellation Software

> A curated public hub of **GitHub** and **GitHub Copilot** resources for
> Constellation Software Inc. (CSI) portfolio companies — maintained by the
> **GitHub @ CSI team at Microsoft**.

---

## Where are you on the journey?

| 🚚 Migrate | 🤖 Adopt | 📈 Scale |
|---|---|---|
| Move to GitHub from Bitbucket / Azure DevOps / GitLab / SVN → [GitHub Migrations](#-github-migrations) | Onboard GitHub Copilot in your team → [Learning & Skilling](#-github-copilot--learning--skilling) | Run GitHub & Copilot across your portco at scale → [Governance & Architecture](#-governance--architecture) |

</div>

---

## 📅 CSI Developer Days

CSI Developer Days is the GitHub @ CSI team's **bi-weekly developer event
series** for engineers across the Constellation Software portfolio. Sessions
cover GitHub fundamentals, migrations, Copilot enablement, agentic workflows,
and Q&A with Microsoft and GitHub product teams.

<!-- placeholder: provision aka.ms/github-constellation-software-dev-days before publishing -->
- **CSI Developer Days — Bi-weekly series** — Open to engineers across all
  CSI operating groups (Volaris, Harris, Vela, Jonas, Perseus, Topicus, and
  others). Sign up to be notified about upcoming sessions.
  [aka.ms/github-constellation-software-dev-days](https://aka.ms/github-constellation-software-dev-days)
- **Apply for workshops, office hours & invite-only events** — Get on the
  GitHub @ CSI team's invite list.
  [aka.ms/github-constellation-software-events-form](https://aka.ms/github-constellation-software-events-form)

---

## 🚚 GitHub Migrations

Many CSI portcos are moving to GitHub from Bitbucket Server / Data Center,
Bitbucket Cloud, Azure DevOps Repos, GitLab self-managed, or Subversion. This
section is your starting point.

#### Plan your migration
- **GitHub Enterprise migration overview** — Concepts, planning, and the
  supported source systems.
  [docs.github.com/migrations](https://docs.github.com/en/migrations)
- **Migration paths to GitHub Enterprise Cloud** — Choose the right tooling
  based on where your code lives today.
  [docs.github.com](https://docs.github.com/en/migrations/overview/migration-paths-to-github)

#### Source-specific guides
- **From Bitbucket Server / Data Center** — Use **GitHub Enterprise Importer
  (GEI)** with the BBS migrator (`gh bbs2gh`).
  [docs.github.com](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud)
- **From Bitbucket Cloud** — Migrate repositories to GitHub Enterprise Cloud
  using GEI.
  [docs.github.com](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-from-bitbucket-cloud-to-github-enterprise-cloud)
- **From Azure DevOps Repos** — Use GEI with the ADO migrator (`gh ado2gh`).
  [docs.github.com](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-from-azure-devops-to-github-enterprise-cloud)
- **From GitLab (self-managed or GitLab.com)** — Use GEI's GitLab migrator.
  [docs.github.com](https://docs.github.com/en/migrations/using-github-enterprise-importer/migrating-between-github-products/migrating-repositories-from-gitlab-to-github-enterprise-cloud)
- **From Subversion (SVN)** — Use `git-svn` to convert history, then push to
  GitHub.
  [docs.github.com](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-subversion-repository)

#### Tooling
- **GitHub Enterprise Importer (GEI) — `gh-gei` CLI** — The primary,
  supported tool family for migrations.
  [github.com/github/gh-gei](https://github.com/github/gh-gei)
- **`gh-ado2gh`** — Azure DevOps → GitHub extension to the `gh` CLI.
  [github.com/github/gh-ado2gh](https://github.com/github/gh-ado2gh)
- **`gh-bbs2gh`** — Bitbucket Server → GitHub extension to the `gh` CLI.
  [github.com/github/gh-bbs2gh](https://github.com/github/gh-bbs2gh)

#### Reference
- **Pre-migration checklist & runbooks** — Best practices for org structure,
  identity (SAML/SCIM), and cutover planning.
  [docs.github.com](https://docs.github.com/en/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/overview-of-a-migration-with-github-enterprise-importer)

---

## 📚 GitHub Copilot — Learning & Skilling

#### Self-paced & curated
- **Awesome Copilot — Learning Hub** — Structured learning paths for every level. [awesome-copilot.github.com/learning-hub](https://awesome-copilot.github.com/learning-hub/)
- **Awesome Copilot (site)** — Community-curated index of prompts, instructions, chat modes, and extensions. [awesome-copilot.github.com](https://awesome-copilot.github.com/)
- **Awesome Copilot (repo)** — Source repo for the above. [github.com/github/awesome-copilot](https://github.com/github/awesome-copilot)

#### Hands-on
- **GitHub Copilot Tutorials** — Official short-form tutorials by scenario and language. [docs.github.com/en/copilot/tutorials](https://docs.github.com/en/copilot/tutorials)
- **GitHub Copilot Labs (Microsoft Learn)** — Step-by-step lab environment. [microsoftlearning.github.io/mslearn-github-copilot-dev](https://microsoftlearning.github.io/mslearn-github-copilot-dev/)

#### Reference
- **GitHub Documentation** — Full GitHub product documentation, including Copilot. [docs.github.com](https://docs.github.com/en)
- **GitHub Changelog** — Authoritative source for everything that ships across GitHub and Copilot. [github.blog/changelog](https://github.blog/changelog/)

#### Video
- **GitHub Upskilling Playlists on YouTube** — Official GitHub channel with Copilot deep-dives, demos, and conference talks. [youtube.com/@GitHub/playlists](https://www.youtube.com/@GitHub/playlists)

---

## 🛠 GitHub Copilot — Developer Enablement Series

A multi-part series for CSI portco engineering teams covering prompt patterns,
chat modes, agentic workflows, code review, and team-scale adoption.

<!-- placeholder: provision aka.ms/github-constellation-software-dev-enablement-series before publishing -->
- **AI Coding with GitHub Copilot — Developer Enablement Series for CSI** —
  Multi-part workshop series tailored for CSI portco engineering teams.
  [aka.ms/github-constellation-software-dev-enablement-series](https://aka.ms/github-constellation-software-dev-enablement-series)

---

## 💳 Usage-Based Billing (UBB)

Resources about Copilot's move to usage-based billing.

- **Announcement (blog)** — GitHub Copilot is moving to usage-based billing. [github.blog](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/)
- **UBB documentation** — Concept docs for usage-based billing in organizations and enterprises. [docs.github.com](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises)
- **UBB pricing & models** — Reference for Copilot billing models and pricing. [docs.github.com](https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing)
- **GitHub Community FAQ** — Discussion thread with frequently asked questions. [github.com/orgs/community/discussions/192948](https://github.com/orgs/community/discussions/192948)
- **Copilot code review changelog** — Code review will start consuming GitHub Actions minutes on June 1, 2026. [github.blog/changelog](https://github.blog/changelog/2026-04-27-github-copilot-code-review-will-start-consuming-github-actions-minutes-on-june-1-2026/)

---

## 🏛 Governance & Architecture

CSI's federated, multi-portco model means each operating group and portco
runs GitHub on its own terms. These resources help you do that well.

- **Agentic Governance (Microsoft APM)** — Microsoft's framework for governing teams of AI agents at enterprise scale. [docs](https://microsoft.github.io/apm/) · [repo](https://github.com/microsoft/apm)
- **GitHub Well-Architected Framework** — GitHub's official guidance for well-architected systems on the GitHub platform, including Copilot. [wellarchitected.github.com](https://wellarchitected.github.com/)
- **GitHub Enterprise Cloud — managing multiple organizations** — Patterns for running many orgs under one enterprise (relevant for portco-per-org topologies). [docs.github.com](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-your-enterprise-account/about-enterprise-accounts)
- **Enterprise Managed Users (EMU)** — Identity-managed user accounts for tighter control over access and provisioning. [docs.github.com](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/understanding-iam-for-enterprises/about-enterprise-managed-users)
- **GitHub audit log streaming** — Stream audit log events to your SIEM for portfolio-wide visibility. [docs.github.com](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)

---

## 💬 Get in Touch

- **Email us** — [githubConstellationSoftwareInc@microsoft.com](mailto:githubConstellationSoftwareInc@microsoft.com)
- **Open an issue** to suggest a resource, report a broken link, or request a topic — see [issue templates](.github/ISSUE_TEMPLATE) and [CONTRIBUTING.md](CONTRIBUTING.md).
- **Through your Microsoft account team** — they can route you to the GitHub @ CSI team directly.

---

## 🛠 Contributing

Suggestions, broken-link reports, and improvements welcome — see [CONTRIBUTING.md](CONTRIBUTING.md). By participating, you agree to the [Microsoft Open Source Code of Conduct](CODE_OF_CONDUCT.md).
