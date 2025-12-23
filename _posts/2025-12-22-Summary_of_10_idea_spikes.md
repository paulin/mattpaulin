---
layout: post
title: "Lessons from 10 AI Projects"
date: 2025-12-22
author: "Matt Paulin"
categories: [ideas, idea-spike, product-management]
---

# Lessons From 10 of AI-Driven Idea Spikes

In late 2025, I ran a personal experiment as part of my 10-week goals: build a different idea every week. I started calling these *Idea Spikes*—a fixed amount of time allocated to create something, not to perfect it, but to learn as much as possible.

One week sounded reasonable. In practice, most spikes took between four and ten hours of real work.

These were not intended to be production-ready products. The point was to reduce friction, increase throughput, and understand how modern AI tools change the mechanics of product development. I wanted to see where the bottlenecks actually moved.

---

## A Workflow That Stabilized

Over time, the process settled into something repeatable:

I started with pen and paper, diagramming the idea without tools. This forced me to confront the shape of the thing before naming it.

Next, I talked the idea out loud with an AI. I found that conversational tools worked best here. Speaking forced clarity in a way typing didn’t.

I exported the transcript and fed it into another AI to summarize the product and extract user stories. From there, I converted it into a lightweight product spec in Markdown.

That spec lived in a `/docs` folder inside a fresh GitHub repository. From there, I used an AI to implement directly from the documentation.

I pulled the code locally and reviewed it using an editor, then iterated between tools to refine functionality, remove unnecessary features, and adjust structure. If the project was a web app, I deployed it to the cloud.

What surprised me was not that this worked—but how little variance there was once the loop stabilized.

---

## Tools as Metaphors

At this point, I think of these tools less as software and more as machines.

Claude Code behaves like a 3D printer for software. You give it a task, and five to ten minutes later it produces an entire system: schemas, APIs, UI scaffolding, all of it.

Cursor felt more like a Dremel. I used it to smooth edges, reshape features, and make the larger pieces fit together.

Reviewing the database schema early became a reliable diagnostic. Schema design reveals whether the system actually understands the problem domain.

---

## Speed Changed My Behavior

The most noticeable effect was speed.

AI lowered the cost of exploration enough that holding ideas in my head stopped making sense. It became cheaper to write them down, structure them, build them, and move on.

This unlocked ideas I had been carrying for years—unfinished projects, half-formed thoughts, and unresolved experiments from earlier in my career.

---

## Editing Became the Constraint

Editing was the real bottleneck.

Like a chef in a kitchen, you still have to taste the food. You can delegate the prep, but not the judgment.

The highest-leverage work involved removing features, simplifying language, and aligning output with personal taste and intent. AI made production cheap. Judgment stayed scarce.

---

## Closing Thoughts

AI has shifted the bottleneck in software creation.

Execution is no longer the constraint. Expression, taste, and relevance are.

The tools are cheap and improving rapidly. The differentiator isn’t whether something can be built, but whether it’s worth building—and whether it resonates with anyone else.
