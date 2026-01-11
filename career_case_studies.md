---
layout: page
title: Career Case Studies
permalink: /career-case-studies/
---

In-depth case studies exploring product leadership, strategic decision-making, and organizational challenges in real-world contexts.

---

## Case Studies

<div class="case-studies-grid">
  <div class="case-study-card">
    <h3><a href="/portfolio/case_studies/kaiizen/">Designing an AI Product Ecosystem Under Real Operational Constraints</a></h3>
    <p class="case-study-meta">Kaiizen</p>
    <p class="case-study-excerpt">How to build an AI product ecosystem that survives contact with human behavior, operational reality, and enterprise systems. This case explores splitting systems by human intent, going mobile-first and SMS-first, and treating data models as products.</p>
    <a href="/portfolio/case_studies/kaiizen/" class="read-case-study">Read case study →</a>
  </div>

  <div class="case-study-card">
    <h3><a href="/portfolio/case_studies/signetic/">Building and Scaling a Public Health Platform Under Extreme Time Pressure</a></h3>
    <p class="case-study-meta">Signetic</p>
    <p class="case-study-excerpt">Leading a vaccination management platform during COVID-19 that supported ~415,000 vaccinations. This case examines positioning as a managed solution, prioritizing operational reliability, and designing for equity and access.</p>
    <a href="/portfolio/case_studies/signetic/" class="read-case-study">Read case study →</a>
  </div>

  <div class="case-study-card">
    <h3><a href="/portfolio/case_studies/leapfrog/">Leading Focus and Tradeoffs Inside a Global Services Organization</a></h3>
    <p class="case-study-meta">Leapfrog Technology</p>
    <p class="case-study-excerpt">Aligning a 300+ person global consultancy around strategic focus in digital health. This case explores narrowing focus, treating product bets explicitly, and confronting market reality when conditions change.</p>
    <a href="/portfolio/case_studies/leapfrog/" class="read-case-study">Read case study →</a>
  </div>

  <div class="case-study-card">
    <h3><a href="/portfolio/case_studies/cbre-build/">Leading Product Strategy Inside a Fortune 500 Enterprise</a></h3>
    <p class="case-study-meta">CBRE Build</p>
    <p class="case-study-excerpt">Navigating innovation inside a Fortune 500 commercial real estate firm with legal constraints, political capital, and deeply ingrained human behavior. This case examines treating governance as a product problem, prioritizing behavioral adoption, and creating organizational coherence.</p>
    <a href="/portfolio/case_studies/cbre-build/" class="read-case-study">Read case study →</a>
  </div>
</div>

<style>
.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  margin-top: 40px;
}

.case-study-card {
  padding: 32px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.case-study-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transform: translateY(-2px);
  border-color: #d0d0d0;
}

.case-study-card h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 1.4em;
  line-height: 1.3;
}

.case-study-card h3 a {
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.2s ease;
}

.case-study-card h3 a:hover {
  color: #1a252f;
}

.case-study-meta {
  margin: 0 0 16px 0;
  font-size: 0.95em;
  font-weight: 600;
  color: #7f8c8d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.case-study-excerpt {
  flex: 1;
  margin: 0 0 20px 0;
  color: #555;
  line-height: 1.6;
  font-size: 0.95em;
}

.read-case-study {
  display: inline-block;
  color: #2c3e50;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95em;
  padding: 8px 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
  margin-top: auto;
}

.read-case-study:hover {
  color: #1a252f;
  border-bottom-color: #2c3e50;
  padding-left: 4px;
}

@media (max-width: 768px) {
  .case-studies-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .case-study-card {
    padding: 24px;
  }
  
  .case-study-card h3 {
    font-size: 1.2em;
  }
}
</style>
