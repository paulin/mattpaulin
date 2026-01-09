---
layout: page
carousels:
  - images:
    - image: /assets/images/portfolio/kaiizen/fusion-1.png
    - image: /assets/images/portfolio/kaiizen/fusion-2.png
    - image: /assets/images/portfolio/kaiizen/zen-listing-1.png
    - image: /assets/images/portfolio/kaiizen/zen-listing-2.png
---
{% comment %}
This comment prevents the first line from showing up in the navbar.
{% endcomment %}

{% include carousel.html height="120" unit="%" duration="7" number="1" %}

# Context: Kaiizen matching real estate opporitunities to REITs
Real Estate Investment Trusts need a constant flow of opporitunities to improve their portfolios. Wholesellers need a path for selling off opporitunities they have found. Kaiizen fit right in the middle by building a Buybox search and listing system.

# Situation — A Broken Front Door to Real Estate Decisions

Kaiizen was operating in a space where decisions were expensive, slow, and poorly informed. Renovation and deal decisions relied on manual walkthroughs, inconsistent notes, spreadsheets, and delayed reports. The people closest to the property—the ones doing walkthroughs—were often the least equipped with usable tools, while the people making capital decisions received incomplete or lagging data.

At the same time, the business faced classic scale tensions:

Field users resisted complex apps and training

Renovation data varied wildly by person and market

Internal teams lacked a shared view of deals, suppliers, and outcomes

Enterprise partners expected rigor, while reality was messy

There was no clear system connecting what was seen in the field to what decisions were made in the office. AI was promising, but most solutions ignored real user behavior and over-indexed on idealized workflows.

# Action: From 0->1 creating an AI first system for renovations

Instead of starting with dashboards or enterprise tooling, we started where the friction actually was: the walkthrough.

I helped design and evolve Kaiizen as an ecosystem of connected products, each with clear responsibilities:

Kai: a mobile-first, SMS-driven AI that guides walkthroughs and captures structured renovation data in real time—designed so anyone could use it with no training.

Zen: a customer-facing portal that transformed raw walkthrough output into usable renovation insights, deal history, and exit strategies.

Fusion: an internal operating system that connected AI-generated data to suppliers, CRM workflows, deal stages, and revenue attribution.

Kai.pro: a renovation intelligence layer that standardized scopes of work, line items, and templates across portfolios.

Along the way, I pushed hard on principles that mattered long-term:

Treat schemas and data models as products, not implementation details

Separate internal and customer systems intentionally

Reduce complexity before scaling it

Make system boundaries explicit to avoid organizational confusion

This work required navigating ambiguity, enterprise constraints, incomplete integrations, and competing incentives—while still shipping incrementally and keeping the system usable.

# Results — Faster Decisions, Better Data, Stronger Alignment

The result was not a single “feature,” but a coherent operating system for how Kaiizen captured, processed, and acted on renovation intelligence.

Key outcomes included:

Reducing time-to-report from days to roughly one hour after walkthroughs

Standardizing renovation data at the point of capture instead of downstream cleanup

Enabling customers to explore rental, flip, and hold strategies from the same data

Creating traceability from walkthrough → deal → supplier → revenue

Establishing schema validation and governance that prevented silent data failures

Improving internal alignment by clearly separating Kai, Zen, and Fusion responsibilities

Just as importantly, the system surfaced hard truths early—where automation helped, where humans were still required, and where organizational assumptions broke down. That clarity enabled better decisions, even when the answer was not to build more software.

Kaiizen became a case study in designing AI products that respect real human behavior, operate under real constraints, and still scale with rigor.
