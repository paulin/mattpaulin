---
layout: post
title: "The Great AI Refactor"
date: 2026-07-06
categories: ai product-management systems organization-design
tags: ai agents org-design future-of-work roles hiring product-management
---

# The Great AI Refactor

I've been writing software for thirty years, so the word that keeps coming to mind for what AI is doing to companies isn't *automation*. It's *refactor*.

When you refactor a piece of software, you keep what it does exactly the same — same inputs, same outputs, same promise to the user — but you tear up how it works on the inside. The old structure was built around constraints that don't apply anymore, so you reorganize around the constraints you actually have now. Nothing about the *purpose* changes. Everything about the *internals* does.

That's the best description I have for what's happening to organizations. Companies still need to find customers, build products, make money, and stay trustworthy. The purpose is unchanged. But the way work is organized on the inside — who does what, in what order, with what handoffs — was designed for a world where building was slow and expensive and human labor was the bottleneck. That world is going away. So the internals are getting refactored, whether we plan for it or not.

I spent a long conversation mapping out what the "after" looks like, and it turned into a single picture I keep coming back to.

![The Great AI Refactor — how AI is rewriting the way work gets done](/assets/images/great-ai-refactor/the-great-ai-refactor.png)

Everything below is really just me walking through that graphic and explaining why I think it's right.

## Why the old org chart looked the way it did

Look at the left column: Customer Need → Product Management → Design → Frontend → Backend → QA → DevOps → Customer. Every one of us has lived inside some version of that pipeline. It feels like the natural shape of building software.

But it isn't natural. It's a *response to a constraint.* Building was expensive and specialized, so we split the work into narrow disciplines and hired a different specialist for each one. The org chart is a map of where the hard, scarce human labor used to sit. Frontend was its own job because writing frontend was slow and required a person who'd spent years getting good at it. Same for the backend, the tests, the infrastructure. We divided by *technical function* because technical function was the thing that was hard to come by.

And because the work was chopped into specialties, we needed handoffs to stitch it back together. Every arrow in that left column is a handoff, and every handoff is a little tax — a delay, a translation loss, a "wait, that's not what I meant." We got extraordinarily good at managing those handoffs. We built entire methodologies around them. But they were always overhead we tolerated, not value we created.

## What changed is the constraint

Here's the pivot the whole thing turns on. When AI can write the code, draft the design, generate the tests, stand up the infrastructure, and produce five prototypes before lunch, then *implementation stops being the scarce thing.*

And the moment implementation is cheap, dividing your company around who-can-implement-what makes no more sense than organizing a modern kitchen around who owns the fire. The scarcity moved. It moved to judgment, to taste, to knowing which problem is worth solving, to reading whether the thing you built is actually any good, to deciding what deserves attention when you can suddenly build anything.

So the right column of the graphic reorganizes the company around *those* things — around stages of value creation instead of technical specialties:

- **Scout** — find the valuable problems. Talk to customers, watch the market, mine the signal. Deliverable: an *opportunity brief.* The question it answers: *what important problem should we solve?*
- **Editor** — decide what deserves focus. When ideas and prototypes are cheap, attention becomes the bottleneck, and the Editor protects the org from thrashing. Deliverable: an *approved initiative.* The question: *what are we going to focus on, and why?*
- **Prototyper** — explore fast. Build the throwaway versions, test the assumptions, learn. Deliverable: a *working prototype.* The question: *what could this look like?*
- **Builder** — turn the promising prototype into a real, production-grade system. Deliverable: a *production product.* The question: *how do we make this reliable enough for real users?*
- **Sweeper** — improve quality and remove friction. Simplify, refactor, pay down debt, make it cleaner and faster. Deliverable: a *refined product.*
- **Grower** — drive adoption, retention, and product-market fit. Deliverable: a *growth roadmap.*
- **Maintainer** — protect the long-term health: reliability, security, cost, trust. Deliverable: a *reliable platform.*

And then the part that matters most: the loop closes. The Maintainer's operational signal — the incidents, the complaints, the bottlenecks — flows straight back to the Scout as the raw material for the next round of opportunities. The old pipeline was a line that ended at "Customer." The new one is a circle that never stops feeding itself.

Notice these roles aren't *frontend* and *backend*. They're not defined by the technology. They're defined by the *kind of value a human adds* to a workflow that AI is largely executing. That's the whole refactor in one sentence.

## The three eras, because this doesn't happen overnight

The strip along the bottom of the graphic is the part I'd underline for anyone who thinks this is a switch you flip.

**Era 1 — Pre-AI.** Human → Software. We do the work; software is just the tool we do it with.

**Era 2 — AI Copilot.** Human → AI Copilot → Software. This is where most companies actually are right now. AI makes each person faster, everyone's productivity ticks up — but the org chart is untouched. You've made the old machine quicker. You haven't rebuilt it.

**Era 3 — The Great AI Refactor.** Human → Fleet of AI Agents → Software. Now the human *orchestrates* a fleet, and the organization itself gets redesigned around that. Roles, hiring, teams, metrics — all of it.

The trap is Era 2 comfort. Bolting a copilot onto every seat feels like transformation, and it produces a real, measurable bump, so it's easy to declare victory and stop. But it leaves the expensive old structure — the specialties, the handoffs, the function-shaped teams — completely in place. You've optimized the thing you were eventually going to replace. Era 3 isn't "Era 2 but the AI is better." It's a different architecture.

## What the refactor means if you're a person

A few things fall out of this that I think are worth saying plainly.

**Your job title is probably about to stop describing your job.** The graphic's roles don't map one-to-one onto the old ones. A great Product Manager might live across Scout, Editor, Grower, and the connective-tissue work of holding it all together. A strong full-stack engineer might span Prototyper, Builder, Sweeper, and Maintainer. Most real people will straddle two or three of these stages, and the smaller the company, the more stages each person covers.

**Hiring flips from "can you build it" to "can you drive it."** The old question was *can this person write React, ship an API, run a roadmap?* The new one is closer to *can this person take an ambiguous problem, point a fleet of agents at it, judge whether the result is actually good, improve it, and move a real number for a customer?* Specialized craft doesn't become worthless — but it stops being the thing you screen for first.

**Metrics have to move from output to outcome.** Tickets closed, features shipped, lines written — those measured how much human execution you produced, back when execution was the scarce, expensive thing. When agents produce execution by the yard, counting it tells you nothing. The measures that matter become things like: how good are the opportunities we find, how fast do we get from signal to prototype, how much do we actually learn per prototype, how quickly do we adapt. Learning velocity becomes the number.

## Where this is all going

I have been watching for how our world is going to adapt to the quantization of work that tokens and AI have allowed. It's become a game of wack-a-mole for where the bottlenecks are. The old bottlenecks don't exist so the system has refactored itself into a new set of roles. I think we might start seeing job titles that reflect the roles I have listed out here.

The line to keep from all of this is the one printed across the bottom of the graphic: **AI doesn't eliminate jobs so much as it eliminates the old assumptions about how work should be organized.**

The companies that win the next decade won't be the ones that automate their existing workflows the fastest. Automating the old pipeline just makes a structure built for a vanished constraint run quicker. The winners will be the ones willing to do the harder thing — keep the purpose, tear up the internals, and rebuild the way work flows around what AI actually makes possible.

That's a refactor. And like every refactor I've ever done, the scary part isn't the new code. It's admitting the old structure was only ever a workaround for a problem you don't have anymore.
