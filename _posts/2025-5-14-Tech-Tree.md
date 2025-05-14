---
layout: post
title: Organizing Innovation Teams with a Tech Tree
date: 2025-05-14
author: "Matt Paulin"
categories: [software, product-management, readiness-levels]
---

It can be overwhelming to figure out how to keep track of what everyone on your team should be working on. Running daily scrums and standups is just one piece of the puzzle. What’s often harder is deciding what to do next, when to pause a project, and how to pick it back up again.

On innovation teams, this challenge is amplified. Teams might be experimenting in multiple directions—failing fast, rewriting what they just built, or pivoting to new ideas entirely.

It can feel chaotic. But your role is still to bring structure and clarity. One of the most helpful mental models I’ve found is a familiar one: the **Tech Tree**.

## What’s a Tech Tree?

In video games, a *tech tree* (short for *technology tree*) is a visual representation of how upgrades, abilities, or features progress over time. It's a concept popular in strategy games like *Civilization*, *StarCraft*, and *Age of Empires*.

Each capability in the tree builds upon the last. You unlock one feature to make the next possible. Bringing this idea into team planning can help clarify how your innovation work should unfold.

---

## How to Organize Capabilities Using a Tech Tree

### Step 1: Identify Your Deadlines

Start by collecting key dates: product demos, stakeholder meetings, conferences, or press releases. These dates shape the timeline of your roadmap.

### Step 2: Define What Needs to Be Ready at Each Deadline

For each date, define the capability you plan to showcase. Phrase these as headlines, like:  
> “Now our product can do X!”

These capabilities will later become **epics** in your task management system. But hold off on that for now—just focus on defining the outcomes.

### Step 3: Prioritize Capabilities with Stakeholders

Sit down with stakeholders and work together to place each capability on the timeline. This is an iterative process—they may shift priorities or timing.

As part of this conversation, assign a **Readiness Level (RL)** to each capability. This indicates how polished the capability needs to be for the intended milestone (e.g., prototype, MVP, fully production-ready). Understanding the RL helps align effort with expectations.

### Step 4: Review with the Engineering Team

Now bring the plan to your builders. Show them the timeline and RL values. Let them assess what’s involved, think through architecture changes, identify unknowns, and start shaping **user stories**.

Key questions to ask:
- What needs to happen for this capability to be real?
- Who is the user, and what do they need?
- What spikes (exploration tasks) are needed?

The goal here is to test feasibility and validate the timeline before locking it in.

### Step 5: Define Dependencies Between Capabilities

Once user stories are mapped out, you’ll begin to see natural dependencies: Capability A must happen before Capability B. This gives you your **tech tree**.

Now, you have:
- Capabilities with associated user stories
- A dependency map (the tech tree)
- A timeline

### Step 6: Map the Plan to Your Tools

Translate each capability into an **epic** in your task tracking system. Then, connect the user stories that must be completed to achieve the epic.

Each epic becomes a milestone toward releasing the associated capability. When those user stories are done, the "headline" can be announced.

---

## Bringing the Whole Picture Together

At this point, you can visualize the full roadmap—capabilities, dependencies, and deadlines. Here’s an example:

![Tech Tree Example](/assets/images/tech_tree_example.png)  
*Note: My image doesn’t use real capability names. In practice, use the actual headlines of your capabilities.*

Each node in the tree represents a capability. Arrows show what depends on what. Some nodes have spikes—exploratory tasks—before they can begin.

This diagram is not just for you. It’s a **communication tool**. It helps your team and stakeholders get on the same page about what needs to be released, when, and to what level of quality.

---

## Final Thoughts

This kind of visualization is often missing in projects. From the top-down view, leadership sees goals and KPIs. From the bottom-up view, builders see tasks. But without a bridge between the two, the plan often feels disjointed.

The tech tree brings it all together.

A few final notes:
- This tool doesn’t replace progress tracking—you’ll still want to monitor how many user stories are complete per epic to measure velocity.
- But it **does** give you a shared mental model—and that’s worth a thousand words. And those words? They shorten meetings and reduce confusion.
