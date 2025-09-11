---
layout: post
title: "Ideation with Jira Product Discovery"
date: 2025-09-08
author: "Matt Paulin"
categories: [software, product-management, ideas]
---


I’ve been working with my team at Kaiizen to use Jira Product Discovery (JPD). It took me a while to get my head around what it’s for and how it works. But I’ve come to believe that building a culture around something like JPD from the ground up is a way to create a culture of continuous innovation.

## Why We Needed JPD

Our team is building a new product to replace a ten-year-old piece of software called **Renowalk**. For years, companies have used Renowalk to purchase parts from Home Depot. Now that customers finally have a chance to influence the next generation, they’ve been generous with ideas.

What we discovered is that many companies were only using Renowalk for a slice of their workflow. The rest was handled with other tools and workarounds. That gave us an opportunity — if we could understand the bigger workflow, maybe we could build something more complete and flexible.

To capture this, we pulled transcripts from our initial sales calls and put them into JPD. Sometimes we automate this step by running the transcripts through an LLM to identify themes and features. Other times, we go through the notes manually to make sure nothing gets missed. This dual approach has already helped us spot patterns: when multiple customers share the same pain point, it rises to the top of our roadmap.

## How JPD Works in Practice
![An example of the effort impact matrix](/assets/images/ideation/effort_impact_matrix.png)  
![Bots support us](/assets/images/automate-and-elevate/ladder_bots.webp)

At first glance, JPD looks like a big spreadsheet of ideas. Each row is an idea, and columns are the different dimensions you care about: name, description, product, customer, and so on.

The real power comes from the flexibility. You can:

- **Connect ideas to Jira work.** If an epic or task is underway, you can link it to the idea. JPD will even show you a progress bar so you see how far along the idea is.
- **Score ideas by effort and impact.** We added columns for these and keep it simple: engineering owns effort, business owns impact. We don’t aim for perfect accuracy — just gut-level estimates that help us compare ideas. I told the team to think of effort as five levels in 10x increments:  
  - Level 1 ≈ 10 hours  
  - Level 2 ≈ 100 hours  
  - Level 3 ≈ 1,000 hours  
  - Level 4 ≈ 10,000 hours  
  - Level 5 ≈ 10,000+ hours  
- **Visualize the landscape.** Once you have a couple of dimensions, JPD lets you pull up charts and see how ideas cluster. This makes it easier to spot what’s high impact, low effort — the quick wins.

We review JPD about every two weeks. Right now, that cadence matches our stage: wrapping up the MVP and preparing to onboard clients. Over time, we may adjust.

## Where Ideas Come From

Anyone on the team can add an idea. We don’t weight internal ideas as highly as customer feedback, but they’re still valuable. In fact, sometimes the biggest breakthroughs come from our perspective as builders who see the broader landscape of possibilities.

For example, a lot of our product comes down to how you scan a home. In older software, you could only run a few rigid types of scans. We’ve been innovating on flexible scan templates that can be reused and adapted across different workflows. That came from internal ideation, not directly from a customer request, but it solves problems that every customer will face.

## Why This Matters

At a previous company, CBRE, ideas usually came from the top down. A VP or senior leader would pitch an idea, find a way to get it funded, and push it through. Our development team was constantly being pulled in different directions, often for political reasons rather than customer needs.

JPD doesn’t magically solve politics, but it makes things more transparent. Everyone can see the pool of ideas, how they’re being scored, and what customers are actually asking for. That alone keeps the conversation grounded.

## JPD vs. Spreadsheets

I’ll be honest: JPD is a heavyweight solution. It’s like a game board, but you still have to define the rules and teach everyone how to play. The visualizations and Jira integrations are great, but the real value comes from the process you run on top of it.

In fact, I’ve run nearly the same process with a simple spreadsheet. For a small team or solo operator, a spreadsheet is faster and easier. You can add effort and impact columns, create a chart, and even track progress manually.

The key lesson is that **it’s the process that matters more than the software.** If you can consistently gather ideas, prioritize customer-driven ones, and run biweekly grooming sessions, you’ll end up with a healthier product culture no matter what tool you use.

## Conclusion

Every organization needs a system to collect and evaluate ideas together. At Kaiizen, JPD is helping us do that at scale, but the real win is the culture shift: ideas aren’t buried in someone’s inbox, lost in hallway conversations, or dictated by politics. They’re visible, comparable, and discussed openly.

That’s how you build products that resonate with customers — and a team that feels like it’s solving the right problems together.
