---
layout: post
title: "Most of My Tickets Don't Need My Smartest Model"
date: 2026-06-11
categories: ai product-management systems automation
tags: ai claude-code agents cost-efficiency linear automation
---

# Most of My Tickets Don't Need My Smartest Model

I had a quiet realization the other day while looking at my AI usage: I was running everything on the most expensive model I had.

Every ticket. The big architectural ones, sure — but also "fill in two missing GitHub repo URLs" and "fix a JSON escaping bug that's one bad character." All of it going through the equivalent of flying my best engineer across the country to change a lightbulb.

That's not a moral failing. It's just the path of least resistance. You pick a good model, you leave it there, and you stop thinking about it. But once I noticed it, I couldn't unsee it — and it turned into a small system I'm genuinely happy with.

## Three tiers, and they're not priced the same

I work out of [Claude Code](https://claude.com/claude-code) most days, with my backlog living in Linear. The models I reach for come in three rough tiers, and the price gap between them is bigger than I'd been treating it:

- **Haiku** — $1 per million input tokens, $5 per million output. The fast, cheap one.
- **Sonnet** — $3 in, $15 out. The balanced workhorse.
- **Opus** — $5 in, $25 out. The deep reasoner.

Line them up and the ratio is clean: Haiku is **1×**, Sonnet is **3×**, Opus is **5×**. Running a Haiku-sized task on Opus isn't a little wasteful — it's five times the cost for work that didn't need the extra horsepower.

The thing is, most of my tickets are not deep-reasoning problems. They're standard implementation. Read the spec, make the smallest change, verify it works. That's Sonnet's whole job. A real minority are genuinely hard — a migration that has to hold a whole codebase in its head, synthesis across a pile of old documents — and those earn Opus. And a surprising number are just mechanical: a config edit, a label fix, a one-line bug. Haiku eats those for breakfast.

## Tagging the work before doing the work

So I built two small skills that talk to each other.

The first one walks my Linear backlog and **tags every open ticket with the model tier it actually needs** — `opus`, `sonnet`, or `haiku`. It reads the ticket, asks one question: what does this task require at the moment someone implements it? Deep reasoning over a lot of context goes to Opus. Standard build work goes to Sonnet. Short, mechanical, low-ambiguity stuff goes to Haiku. The label sits right there on the ticket.

To make that concrete with real tickets off my own board:

- *"Fill in two missing repo URLs"* → **Haiku.** It's data entry with a confirmation step.
- *"Fix the calendar fetch that dies on a bad control character"* → **Haiku.** One-file bug, clear repro.
- *"Build the new contact-reconciliation step"* → **Sonnet.** Normal feature work.
- *"Backfill years of old journal docs into structured history"* → **Opus.** That one has to reason across messy, inconsistent source material, and a wrong guess is expensive.

The second skill is the one that does the work. You point it at a ticket, it reads the tag, and it implements the ticket **on that tier**. When the column's empty, it opens a PR. The tagging is the thinking; the processing is the doing.

This is the **Automate and Elevate** idea I keep coming back to, pointed at myself for once. The boring decision — "which model should run this?" — gets made once, deliberately, and then I never have to think about it again. I just process the queue.

## The catch I didn't see coming

Here's where I got humbled, and I think it's the most interesting part.

My first version of the processing skill *said* it would "switch to the tagged model and implement." Reasonable-sounding. Except it turns out a running Claude **can't change its own model mid-conversation.** That's a control you, the human, hold — not something the assistant can flip on itself. So my skill was quietly doing nothing but *telling me* to switch manually. Which, of course, I'd ignore, and the work would run on whatever I happened to be using. Usually Opus. Right back where I started.

The fix was to stop trying to switch the main conversation at all. Instead, the processing skill stays the **orchestrator** — it handles the Linear status, the git branch, the commit, the PR, the loop — but when it's time to actually write the code, it hands that step off to a **subagent launched on the tagged tier.** The subagent shares the working files, does the implementation on Haiku or Sonnet or Opus as tagged, and reports back. The main session never changes models; the work just happens at the right price.

It's a bit like running a workshop. I don't need my most expensive specialist standing at every bench. I need them coordinating — and then the right hand for each job actually does it. A Dremel for the fine work, the big CNC only when the job earns it.

## Being honest about the savings

I want to be careful not to oversell this. The orchestration — the part that's checking Linear, branching, committing — still runs on whatever my main session is set to. So I'm not getting a clean five-to-one cut across the board. The savings come from the *implementation*, which is usually the bulk of the tokens on any real ticket. For a chunky feature that's a clear win. For a tiny one, the coordinating overhead is most of the cost and the savings are modest.

And there's a real trade-off in delegating: a subagent can't stop and ask me a quick question mid-build the way I could in a live session. So I told it to come back and *ask* rather than guess when a spec is ambiguous, instead of charging ahead on a wrong assumption. I'd rather a clarifying question than a confident mistake — especially on the cheaper tiers.

## The part I actually like

What I keep noticing is that the tagging made me think about my own work more clearly, not just more cheaply. Sorting a backlog by "how much brainpower does this really need" is a useful exercise on its own. It surfaces which tickets are genuinely hard and which ones I've just been avoiding because they're tedious. The tedious ones turn out to be perfect for the fast, cheap model — which means they finally get done.

Match the tool to the work. It's an old idea. It just took watching myself fly the genius out to change a lightbulb to actually apply it.
