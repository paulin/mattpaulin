---
layout: post
title: "So Where Does the Smartest Model Go?"
date: 2026-06-25
categories: ai product-management systems automation
tags: ai claude-code agents context-management code-review automation
---

# So Where Does the Smartest Model Go?

A couple weeks ago I [wrote about](/) a small system I'd built: tag every ticket in my backlog with the model tier it actually needs, then let the cheaper models do the work that doesn't require my most expensive one. The point was that most of my tickets are ordinary — read the spec, make the change, verify it — and I'd been quietly running all of them on the genius model out of pure inertia.

A fair question came back, including from me: if the smart model isn't doing the grunt work anymore, does it just sit on the bench? Is it now an expensive coffee machine?

It turns out it found a better job. And getting there taught me something I hadn't fully appreciated when I set the whole thing up.

## I was overspending two things, not one

The cost was the obvious waste. The one I missed was **context**.

Here's the part I'd glossed over. When the system implements a ticket, it doesn't do the work in my main session — it hands it off to a separate worker that runs in its own little world. That worker reads a dozen files, makes a few wrong turns, retries an edit, runs something to check its work. All of that — the whole messy transcript of *actually doing the thing* — happens over in the worker's space. When it's done, the only thing that comes back to me is a short report: here's what I changed, here's why, here's how I checked it.

I'd thought of that as a cost trick. It's also a focus trick.

Think of a foreman's desk. If every worker dumps their scrap, their wrong cuts, and their half-finished drafts on it, the desk is buried by lunchtime and the foreman can't think straight. But if each worker keeps their bench tidy and just walks over with the finished piece and a one-line note, the foreman's desk stays clear all day. That's the difference. My main session used to fill up with the debris of every task it touched, and somewhere around the eighth or ninth ticket it would get crowded and a little dazed. Now it holds a stack of tidy notes instead of a pile of sawdust, and it can work the whole backlog without losing the thread.

So delegation bought me two things I'd been spending without noticing: money *and* attention.

## The blind spot that came with it

Every good trade has a catch, and here's this one.

Each worker only ever saw *its own* ticket. That's exactly what keeps the desk clean — but it means that when the dust settles, **nobody has looked at the whole thing.** Ticket four might have quietly stepped on something ticket two built. An acceptance criterion might have been technically met and practically missed. Two tickets might have touched the same file in ways that made sense alone and conflict together. None of the workers could see any of that, because none of them could see past their own bench.

And my main session only ever got the *summaries*. It's a good coordinator, but it was coordinating on faith — reading "DONE, verified" without ever seeing the actual diff.

That's the job I'd been missing. That's where the expensive model goes.

## Generate cheap, check expensive

So now, once the whole batch is built and before it becomes a pull request, the system does one more thing: it spins up a top-tier reviewer and hands it the **entire** change at once — the full diff, every ticket's spec, every acceptance criterion. Its only job is to look at the batch as a whole. Are the criteria actually met? Are there bugs? Did any two tickets collide? It writes its findings into the pull request, sorted by severity, with a plain **ship** or **hold** at the bottom.

That, finally, is the right home for the genius. Not on the lightbulb-changing. On the one task in the whole pipeline that genuinely rewards reasoning over everything at once: the final look before it ships.

I've come to think of the shape as **generate cheap, check expensive.** Use the fast, inexpensive hands for the isolated, well-scoped work — there's a lot of it, and isolation keeps it tidy. Then spend the expensive judgment exactly once, at the gate, where a missed problem is cheapest to catch and most costly to let through. It's the same instinct as *Automate and Elevate*, just pointed at the models instead of at people: push the routine down so the smart thing can be spent on the part that actually needs to be smart.

## What I'm being careful about

A few honest caveats, because this isn't magic.

**The review is a gate, not a guarantee.** A good reviewer catches a lot. It doesn't catch everything, and I'd be fooling myself to treat a green "ship" as proof. It raises the floor; it doesn't replace me reading the PR.

**The reviewer sees the diff, not the reasoning.** It's looking at what changed, not at why each worker made the call it made. That's usually enough — the diff is the thing that ships — but it's a real limit worth naming.

**I keep it advisory, for now.** The reviewer writes notes; it doesn't act on them. I could let it kick failing tickets back into the queue to be re-done automatically, and I might, once I trust it more. But a reviewer that re-opens its own complaints can loop forever if it's never quite satisfied, so for the moment the findings land in front of me and *I* decide. Knowing when to stop is its own discipline.

**Isolation doesn't shrink a hard job.** Keeping each ticket on its own bench stops the *pile* from growing. It doesn't make any single ticket smaller. A genuinely huge task can still overwhelm one worker — delegation just keeps that one task's mess from spilling onto everything after it.

## The crew and the eyes

What I like about where this landed is how ordinary it is. A crew of cheap, capable hands, each doing a focused job at their own bench without cluttering anyone else's. One expensive set of eyes that looks over the finished batch before it goes out the door. That's not a clever AI architecture — that's just how a decent shop has always run.

I spent a while overthinking which model should do what. The answer turned out to be the same one a good foreman already knows: most of the work doesn't need the master. The last look does.
