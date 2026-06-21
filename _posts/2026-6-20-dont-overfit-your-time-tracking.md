---
layout: post
title: "Don't Overfit Your Time Tracking"
date: 2026-06-20
categories: ai product-management systems automation
tags: ai claude-code agents time-tracking systems
---

# Don't Overfit Your Time Tracking

I have never once been good at tracking my time. I'd start a timer, forget to stop it, forget to start the next one, and three days later try to reconstruct a week from memory and a browser history. The tools aren't the problem exactly — they're fine — but they all quietly assume a shape my work doesn't have. One project, one timer, one line on an invoice. Meanwhile I'm running half a dozen things at once, some of which roll up into a single bill and some of which should be split across several. The neat little timer never matched the messy real thing, so I kept falling off it.

What finally fixed it wasn't more discipline. It was noticing that the sensor was already running.

## The thing that was already in the room

When I'm building, I have Claude Code open. It's right there in the repo, doing the work *with* me. It already knows which project I'm in — it's literally sitting in the folder. It knows when I'm active and when I've wandered off to make coffee. All the information I'd been failing to write down by hand was already passing through the one tool that's open every time I do real work.

So I stopped asking myself to be the sensor and let the session be the sensor instead. Now, quietly in the background, it books my time in small increments to whatever project I'm actually working in. I don't start anything. I don't stop anything. I just work, and at the end of the day the log is already there.

The part I'm proudest of is the part you can't see: it runs *everywhere* by default. It's not something I install per project. It's wired in once, at the level of the tool itself, so every project I touch gets it for free. And if a project hasn't been told where its time should go, nothing happens — no junk entries, no guesses, just silence until I take ten seconds to point it at the right home. The capability is universal; the configuration is per-project; the absence of configuration is a no-op, not an error. That last property is the whole reason it's safe to leave on.

## Point at the ledger, not the stopwatch

The second move was deciding *where the truth lives.* A stopwatch is a terrible system of record. The place that already knows my projects — which ones are billable, which client they belong to, what the rate is — is the system I run my business out of. So that's where the time goes now. The session writes its record straight into the place that can actually do something with it, and the old timer becomes a mirror: a human-friendly view that gets a copy, rather than the source everything depends on.

This is a small idea with a big payoff. The moment the record lives next to the billing, a whole category of "wait, how many hours did that actually take" reconciliation just evaporates. The number was correct the first time, written by the thing that watched it happen.

## And then I tried to capture everything

Here's where I almost ruined it.

Once the machinery worked, I got greedy. If I can track the build work perfectly, why not track *all* of it? So I went looking for the stuff that wasn't landing anywhere — the marketing afternoons, the writing, the general business development that eats real, focused hours but doesn't belong to any one project. And I started trying to carve it into projects too. A bucket for this kind of writing, a bucket for that kind of outreach, finer and finer.

It got worse, not better. The categories multiplied, none of them fit cleanly, and I was spending mental energy sorting effort into bins that didn't help me make a single decision. I'd traded one failure mode for another.

It took me an embarrassingly long time to recognize the shape, because I'd seen it a hundred times in a different costume: **this is overfitting.** A model that memorizes every noisy detail of its training data doesn't get smarter — it gets *worse*, because it's fitting the noise instead of the signal. Time tracking has exactly the same failure mode. Chase every last minute into a precisely-labeled project and you don't get a clearer picture; you get a brittle, ever-growing taxonomy and a lot of false precision that no decision actually needs.

The fix in machine learning is regularization — deliberately stop the model from contorting itself to fit every point. The fix here turned out to be the same. **The coarse "general business" bucket isn't a gap in the system. It's the regularizer.** It's the thing that says: this hour was real, it was focused, it mattered, and it does *not* need its own label. Let it be general. Move on.

So now there are two tiers, on purpose. High resolution where resolution pays — the focused, billable, project-shaped work, where knowing exactly where the hours went actually changes what I do. And a coarse bucket for everything else, held deliberately blurry. Something only graduates from the bucket into its own project when it earns it: when it becomes billable, or when I genuinely want to watch it as a discrete bet. Until then, precision would be a cost, not a feature.

## What I'm being careful about

**The blur is intentional, and that means I'm choosing not to see something.** Most days that's right. But "general business" can hide a quiet problem — three weeks of "focused effort" with nothing to show. The bucket saves me from over-measuring; it doesn't excuse me from occasionally looking inside it.

**"Has it earned its own project" is a judgment call.** I don't have a clean rule, and I don't think I want one — a rule would just be a different way of overfitting. For now I make the call by hand and let most things stay coarse.

**The automatic part only covers the work the session can see.** The manual buckets are still manual. The machine watches me build; it doesn't watch me think on a walk. That's fine — but it means the holistic picture is still a *merge* of what the sensor caught and what I tell it, not a single magic feed.

The system I ended up with tracks the things worth tracking without me thinking about it, which is what I wanted. But the more useful thing it gave me was the discipline to stop. Knowing what *not* to measure turned out to be the whole game — and, like a lot of good engineering, the win wasn't a better number. It was the decision to stop chasing one.
