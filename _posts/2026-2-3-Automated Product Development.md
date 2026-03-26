---
layout: post
title: "Automating my Product Development"
date: 2026-02-03

---

Over the past few months, I’ve found myself repeatedly solving the same problem:

> We have great conversations with clients — rich, nuanced, full of intent — and then we lose signal as we try to turn that intent into an executable product plan.

This post outlines a workflow I’m developing to close that gap. It’s not about replacing humans with AI. It’s about **building a system that preserves intent, creates alignment, and makes execution safer and faster**.

---

## The Core Problem

Most product workflows break in one of three places:

1. **Conversation → Documentation**  
   Nuance is lost. Decisions blur with assumptions.

2. **Documentation → Roadmap**  
   Roadmaps are either too vague to execute or too rigid to survive reality.

3. **Roadmap → Execution**  
   Tickets drift from original intent, and AI (when used) amplifies the drift.

The goal of this workflow is to reduce entropy at every step.

---

## The High-Level Flow

Here’s the shape of the system:

```
Client Conversation
  ↓
Transcript + Notes
  ↓
AI-assisted Structuring
  ↓
Google Sheet (Client Review)
  ↓
Linear (Execution System)
  ↓
AI-assisted Ticket Execution (Human-in-the-loop)
```

Each step has a clear purpose, a clear artifact, and a clear owner.

---

## Step 1: Capture the Conversation

We start with tools clients already use:

- Google Meet for calls  
- Automatic transcripts  
- Optional AI-generated notes (Gemini, etc.)

These raw artifacts are **immutable**. They are never edited. They serve as the ground truth if questions arise later.

---

## Step 2: Structure the Chaos (with AI)

This is where AI shines — not as a decision-maker, but as a **structuring assistant**.

Given transcripts and notes, AI helps:
- Identify candidate epics
- Extract user stories
- Propose acceptance criteria
- Flag assumptions vs. confirmed decisions

The output at this stage is **explicitly a draft**.

AI is allowed to suggest. Humans are required to decide.

---

## Step 3: The Google Sheet as the Trust Layer

Before anything enters an execution system, it goes through a **shared Google Sheet**.

Why Sheets?

- Clients understand it instantly
- It’s easy to review live or async
- Comments are first-class
- It exports cleanly to CSV

This sheet becomes the **alignment artifact**.  
When a client says, *“Yes, this reflects what we agreed to,”* we lock it.

That sentence matters.

---

## Step 4: Linear as the Execution Boundary

Once approved, the sheet is exported and imported into Linear via script.

Important rules:
- The flow is **one-way** (Sheets → Linear)
- Linear is not used for discovery or debate
- Each ticket traces back to a reviewed row in the sheet

Linear becomes a place for **doing**, not negotiating.

---

## Step 5: AI-Assisted Execution (Safely)

This is where tools like Claude come in — but with constraints.

The model:
- Sees **one ticket at a time**
- Receives the full context of that ticket
- Produces plans, drafts, or code
- Never moves tickets or closes work on its own

Think of AI here as a junior teammate:
helpful, fast, and always reviewed.

---

## Why This Matters

This workflow optimizes for a few non-obvious but critical things:

- **Intent preservation**  
- **Client trust**  
- **Auditability**  
- **Safe AI leverage**

It’s not the fastest possible system.  
It *is* a system that scales without collapsing under ambiguity.

---

## What This Is (and Isn’t)

This is:
- A repeatable consulting workflow
- A productized way to turn conversations into execution
- A foundation for responsible AI use

This is not:
- Fully autonomous AI
- A replacement for product judgment
- A silver bullet

---

## Closing Thought

AI doesn’t remove the need for rigor — it **demands more of it**.

The teams that win won’t be the ones who automate the most.  
They’ll be the ones who design the best boundaries.

If you’re thinking about similar problems — or building something like this yourself — I’d love to compare notes.
