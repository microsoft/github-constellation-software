# 💳 Usage-Based Billing (UBB) Recommendations

> A practical playbook for **Constellation Software Inc. (CSI) portfolio
> companies** preparing for GitHub Copilot's move to usage-based billing on
> **June 1**. Maintained by the **GitHub @ CSI team at Microsoft**.

For the broader list of UBB reference links (announcement blog, official
documentation, pricing reference, code review changelog), see the
[root README's UBB section](../README.md#-usage-based-billing-ubb).

> 💡 Adapted from the
> [GitHub Copilot Canada team's UBB playbook](https://github.com/microsoft/github-copilot-canada/tree/main/usage-based-billing)
> with CSI-specific framing around Azure-billed enterprises.

---

## What's Actually Changing (Starting June 1)

### Seat prices stay the same
- Copilot Business: $19 / user / month
- Copilot Enterprise: $39 / user / month

### Seats now include a pool of usage credits
Each seat contributes to a shared enterprise pool of AI credits (1 credit = $0.01).
Different Copilot features consume credits from that pool.

### Core coding assistance stays unlimited
Code completion and Next Edit Suggestions do not use credits and remain unlimited.

### A 3-month buffer covers June through August
Extra credits are included temporarily so portcos can observe usage.
- Business: 3,000 credits per seat ($30)
- Enterprise: 7,000 credits per seat ($70)

### After August
Standard included pool per seat becomes:
- Business: 1,900 credits ($19)
- Enterprise: 3,900 credits ($39)

### Nothing breaks if limits are reached
If credits and budgets are exhausted:
- Code completion keeps working.
- Other features pause until budgets are increased or the next billing cycle begins.

### You'll get usage visibility first
Before the change is finalized, you'll see actual historical usage translated
into the new model so you can estimate costs.

---

## The Practical 5-Step Plan

### 1. Check your preview usage (early May)
Look at the preview report showing how recent usage would translate under the
new billing model. Use this to understand your baseline usage patterns before
June 1.

### 2. Set a simple spending ceiling (May to early June)
Define an organization or cost-center budget for usage beyond the included
credits. Start conservatively if your procurement process is slow — you can
always raise it later. For CSI portcos, this budget is typically owned by the
same team that manages the Azure subscription the GitHub enterprise is billed
through.

### 3. Add a default per-user limit (June)
Set a standard user-level budget so a single developer can't accidentally
consume a large share of the shared pool. Increase limits only for known
heavy users.

### 4. Review the data monthly (June onward)
Use the provided reports (with user, model, and request breakdowns) to:
- see where credits are going
- tune budgets
- spot optimization opportunities

Wait until you have about 60 days of data before making major budget or
commitment decisions.

### 5. Turn on Auto Mode (starting June)
Auto Mode automatically routes tasks to cheaper or more powerful models as
needed. This lowers cost without requiring developers to think about model
selection.

---

## What Not to Overreact To

- **Don't cut seats just to control spend.** Seats also increase the size of
  your included usage pool.
- **Don't manually manage budgets for every user.** Set a default limit and
  override only for exceptions.
- **Don't make long-term spending decisions based on one early month of data.**

---

## ✅ In Simple Terms

- Pricing per seat isn't changing.
- Seats now come with a shared usage allowance.
- You'll get visibility and 3 months of extra credits to understand usage.
- Set basic org budgets and user limits to manage cost without disruption.

---

## 🏷 CSI Pricing Reminder (Azure billing)

UBB credit consumption and any overage spend flow through the **same
Azure-connected GitHub enterprise** that bills your seats — so the
**35% CSI portco discount continues to apply** to both seat charges and
UBB usage line items, as long as billing is on an Azure subscription owned
by your portco, your operating group, or CSI (credit-card billing is **not**
eligible — see the root README's
[CSI Pricing (35%) via Azure Billing](../README.md#-csi-pricing-35-via-azure-billing)
section).

Practical implications for CSI portcos:

- **Cost attribution** — UBB line items appear on the same Azure invoice as
  your seats. Reuse the tags and cost-center structure you already use for
  GitHub seats (see
  [Tag your Azure resources](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources)).
- **Budgets & alerts** — Set Azure Cost Management budgets and alerts on the
  subscription that pays for GitHub, in addition to the per-org / per-user
  Copilot budgets described in step 2 and step 3 above. See
  [Azure Cost Management overview](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/overview-cost-management).
- **Not yet on Azure billing?** Get there before UBB matters to your spend.
  See
  [Connecting an Azure subscription](https://docs.github.com/en/enterprise-cloud@latest/billing/how-tos/set-up-payment/connect-azure-sub)
  in the docs, then email
  [DevsAtCSI@microsoft.com](mailto:DevsAtCSI@microsoft.com)
  if you hit issues with admin consent, ownership mismatches, or eligibility
  questions.

---

## 📦 Usage-Based Billing Resources

The **customer billing usage report is live as of May 12**. The links
below collect the most useful UBB references for CSI portco admins
preparing their rollout:

- **April reports are now available (changelog, May 12)** — Announces the
  customer-facing billing usage report.
  [github.blog/changelog](https://github.blog/changelog/2026-05-12-april-reports-are-now-available-to-prepare-for-usage-based-billing/)
- **Preparing your organization for usage-based billing (docs)** —
  Step-by-step guidance for organization and enterprise admins.
  [docs.github.com](https://docs.github.com/en/copilot/how-tos/manage-and-track-spending/prepare-for-usage-based-billing)
- **GitHub Community FAQ** — Discussion thread with frequently asked
  questions about the move to UBB.
  [github.com/orgs/community/discussions/192948](https://github.com/orgs/community/discussions/192948)
- **Webinar recap (on-demand video)** — Recap of the UBB customer briefing.
  [github.ondemand.goldcast.io](https://github.ondemand.goldcast.io/on-demand/9c23608e-dc81-41f3-82c2-6629c9a26f36)

### Interactive tools & checklists

> Community / partner-built tools — these are not official GitHub
> documentation, but several teams have found them useful when explaining
> UBB to admins and developers.

- **UBB Resources (interactive tools)** — Animated explainer, 21 budget
  flow scenarios, decision tree, budget calculator, and model-selection
  playbook.
  [white-cliff-095e8700f.7.azurestaticapps.net](https://white-cliff-095e8700f.7.azurestaticapps.net/index.html)
- **Token-optimizer (interactive showcase)** — Scenarios, framework
  diagram, pricing calculator, and model-selection playbook for token
  optimization across AI coding workloads.
  [ashy-dune-0b4215a0f.7.azurestaticapps.net](https://ashy-dune-0b4215a0f.7.azurestaticapps.net/detailed/index.html#/home)
- **UBB Checklist (by Tim Corr)** — Step-by-step rollout checklist
  grouped by timing and role, with local progress tracking.
  [tjcorr.github.io/ubb-checklist](https://tjcorr.github.io/ubb-checklist/checklist.html)

---

## 💬 Get in Touch

Questions, portco-specific scenarios, or workshop nominations? Reach the
GitHub @ CSI team at
[DevsAtCSI@microsoft.com](mailto:DevsAtCSI@microsoft.com),
or open an issue using the templates in
[.github/ISSUE_TEMPLATE](../.github/ISSUE_TEMPLATE).
