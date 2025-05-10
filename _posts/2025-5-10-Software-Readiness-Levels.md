---
layout: post
title: "Understanding Readiness Levels in Software Development"
date: 2025-05-10
author: "Your Name"
categories: software product-management readiness-levels
---

You can’t have a meaningful conversation about software development without eventually asking: **How good do you want the software to be?**

This is a question directly tied to **budget**.

Most people, when they imagine having software developed, assume it will be flawless — like the polished apps they download from app stores or buy online. But in reality, there are many levels to how far a product can be developed, and each level comes with vastly different time, cost, and quality trade-offs.

The truth is, any refined product you hold in your hands isn’t just an object, tool, or app — it represents a **total number of hours** poured into getting it to that level. Sure, once you see the final result, you might think you could replicate it more cheaply, but you’re standing on the shoulders of everyone who worked to get it there in the first place. We tend to forget that.

Look around you right now at every product or tool you’re using: **How many human hours went into making it work the way it does?**

---

### Re-Introducing the Readiness Levels

These readiness levels come originally from my friend Shane Brinkman-Davis ([link](https://shanebdavis.medium.com/)), who I’ve worked with at Kaiizen. I believe Shane’s thinking also draws on ideas developed with our friends at [GenUI](https://www.genui.com/).

At the core, the concept adapts NASA’s **Technology Readiness Levels** ([Wikipedia link](https://en.wikipedia.org/wiki/Technology_readiness_level)) to software development.

This wasn’t my invention, but I’ve found it incredibly useful for explaining **how “done” a piece of software needs to be** and helping align teams and stakeholders.

| Level  | Name                               | UX            | Test Coverage | Description                          |
|--------|------------------------------------|---------------|---------------|--------------------------------------|
| RL0    | Plan                               | N/A           | N/A           | Goals, requirements, architecture    |
| RL1    | Spike                              | Barely        | 0%            | One non-trivial thing works          |
| RL2    | Prototype / Proof of Concept (POC) | Demoable      | 20%           | One core user journey can be achieved |
| RL3    | Alpha                              | Usable        | 50%           | Usable, but with rough edges         |
| RL4    | Beta                               | Release-ready | 70%           | All happy-paths work                 |
| RL5    | Industry Standard / Consumer-grade | Standard      | 80%           | Important edge cases handled         |
| RL6    | Industry-leading / Professional    | Leader        | 90%           | Polished                             |
| RL7    | World-leading / Mission-critical   | Delightful    | 95%           | Highly refined                      |
| RL8    | World-changing                     |               | 100%          | Transformative                      |
| RL9    | Epic / Once-in-a-lifetime          |               | 100%          | Breakthrough, historic               |

---

### Why This Matters

What I love about this model is that it helps frame a crucial question with stakeholders:

**How far do you want us to go?**

For innovation teams, showing this table early in a conversation helps set expectations. You may even discover stakeholders are on very different pages — some imagining a key, company-defining technology, while others just want something functional for now.

This is a **dimension of the conversation that needs to happen upfront** because how far someone wants to go dramatically changes the nature, timeline, and cost of the work.

---

### Practical Examples

For instance, if someone just wants to test an idea — “Can this even work?” — that’s an **RL1 (Spike)**. The innovation team’s job is simply to make it work once. The code from this phase is usually throwaway or reference-only. The goal here is **speed and learning**, not standards or robustness. Personally, I love these because they’re all about curiosity and experimentation.

If the ask is a **Prototype or POC (RL2)**, then the software needs to be deployable and demoable so others can try it. That means technology choices shift, and the delivery timeline grows.

The further up you go, the more time and resources are required. The effort scales **geometrically**:
- RL1 → ~1–10 hours  
- RL2 → ~10–100 hours  
- RL3 → ~100–1,000 hours  

You can see how quickly this ramps up, which is why budgeting and expectation-setting are so important at the **beginning** of the project.

---

### What About the Higher Levels?

To be honest, I’ve never personally worked on an **RL7 or higher** project. I suspect the effort keeps scaling sharply — but in practice, most software we encounter in the wild tops out around RL5 or RL6.

Even when a marketing department claims they’re building “world-changing” software, the reality is that reaching those upper levels usually takes **a combination of brand building, product development, and sometimes industry-wide collaboration**. No single team or project gets there alone.

---

### How Do Capabilities Fit In?

Think of **capabilities** as mini-products inside a larger product — and each can have its **own readiness level**.

Once the base product reaches a certain level, adding new capabilities becomes a natural extension. But again, the key question for each addition is:  
**How finished does this need to be, and by when?**

That’s often a conversation between product, marketing, and sales — but knowing the expected level of effort changes the entire planning and scoping discussion.

---

### This Applies to All Technology

While this discussion focuses on software, the same principles apply to **any technology** being developed. Feel free to reinvent or tailor these readiness levels to your context.

At the end of the day, **product management** is about smoothing the conversations between people so they can work together more effectively.

This framework?  
It’s just one more useful tool in the toolbox.
