---
layout: page
---

**I’m Matt Paulin — a product leader, technologist, and entrepreneur who builds systems, ships software, and explores how emerging technology turns into real product capability.**

For the past 20 years, I’ve founded companies, launched products, and delivered software that people actually use. I believe all great technology comes down to one thing: **communication.** Whether it’s a product interface, a system that connects people, or software that lets humans and machines work together, I focus on building tools that help people learn, decide, and move forward together.

---

## What I Do
I wear three hats that work together:

- **Entrepreneur** – I create companies and communities that bring ideas to life.
- **AI-Driven Product Leader** – I explore how machine learning, data, and autonomy translate into real product capabilities, tradeoffs, and decisions.
- **Product Builder** – I deliver software from concept to launch, always focused on real users and real-world constraints.

I use hands-on projects and experiments to stay close to emerging capabilities — not to chase hype, but to sharpen product judgment and understand what’s actually possible.

What excites me most is seeing people use what I’ve built — because that’s when ideas become impact.

---

## How I Work
I approach product development like climbing a mountain without a map. As a team, we explore, adapt, and learn as we go — using evidence, feedback, and judgment to decide the next move.

- I believe in shipping early and learning fast.
- I trust teams and empower them with clarity instead of bloated requirements.
- I focus on systems, incentives, and decision-making, not just features.

OKRs have been part of my toolkit at every company I’ve led — not as busywork, but as guardrails for strategy, focus, and accountability.

---

## What I’m Exploring Now
We’re living in a new era of product development, shaped by AI. As complexity gets abstracted away, the most important question is no longer *how* to build, but *what should we build — and why?*

I’m currently exploring:

- **AI-Driven Products** – hands-on experiments in how machine learning and data systems meaningfully change product capability.
- **Autonomy & Learning** – exploration of reinforcement learning and autonomous systems, with a focus on limits and tradeoffs.
- **Games & Play** – using games as tools for education, creativity, and learning through experience.

At the heart of it all is one goal: creating products that give people **epiphanies** — new ways to understand, learn, and act.

---

## Collaborations & Community
I enjoy working with people who combine design sense, technical depth, and intellectual honesty. I bring structure, momentum, and systems thinking — helping ideas move from ambiguity to something real.

If you’re building software products, leading teams, or exploring how AI is reshaping product work, I’d love to connect.

---



<div class="cta-container">
  <button class="btn btn-primary btn-lg" onclick="openContactModal()">Reach out to me</button>
</div>





<!--<p/>{:.porthole style="height:200px;"}-->

<!-- Contact Modal -->
<div id="contactModal" class="modal" style="display: none;">
  <div class="modal-content">
    <span class="close" onclick="closeContactModal()">&times;</span>
    <h2>Get in Touch</h2>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdNtNhYTiYU3jY8DA7p-TEzU8mbx2BrfrnL_EXUYztZ8Ocs6Q/viewform?embedded=true" width="100%" height="731" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  </div>
</div>


<style>
/* Modal Styles */
.modal {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(44, 62, 80, 0.8);
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from { 
    opacity: 0;
    transform: translateY(-50px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-content {
  background-color: #ffffff;
  margin: 2% auto;
  padding: 30px;
  border: none;
  border-radius: 12px;
  width: 95%;
  max-width: 700px;
  max-height: 95vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.modal-content iframe {
  border: none;
  border-radius: 4px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Style the modal content to better match the theme */
.modal-content h2 {
  color: #2c3e50;
  font-family: inherit;
  margin-bottom: 20px;
  text-align: center;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 10px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
}

/* CTA Container - Center the button */
.cta-container {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}

/* Button Styles - Match Beautiful Jekyll theme */
.btn {
  display: inline-block;
  padding: 12px 24px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.btn-primary {
  background-color: #2c3e50;
  color: white;
  border: 2px solid #2c3e50;
}

.btn-primary:hover {
  background-color: #34495e;
  border-color: #34495e;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(44, 62, 80, 0.3);
}

.btn-lg {
  padding: 15px 30px;
  font-size: 18px;
}
</style>

<script>
function openContactModal() {
  document.getElementById('contactModal').style.display = 'block';
}

function closeContactModal() {
  document.getElementById('contactModal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  var modal = document.getElementById('contactModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
</script>
