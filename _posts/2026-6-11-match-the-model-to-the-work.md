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

---

## Here are the skills, if you want them

These are the two Claude Code skills, exactly as they run on my machine. They're project-agnostic — they talk to Linear and Claude Code generically, so they should drop into your own setup with little more than a model-label convention. The canonical copies live as gists if you'd rather grab them there:

- **The tagging skill** — [`linear-model-process-label`](https://gist.github.com/paulin/8aced65bed197fab049706b0b3bf0489)
- **The processing skill** — [`linear-model-process-todo`](https://gist.github.com/paulin/4f33f26c81be34685d8d012ac1caf6d4)

### The tagging skill

This one reads each open ticket and labels it with the tier it needs. It's the "thinking" half — done once, deliberately, so the doing half never has to guess.

````markdown
---
name: linear-model-process-label
description: For a given Linear project, ensure model labels exist and tag each open/backlog issue with the appropriate Claude model tier based on what the issue requires at runtime or implementation time.
---

# /linear-model-process-label

Audit a Linear project's open and backlog issues, create the three model labels if they don't exist, and tag each issue with the right one. The label signals which Claude model tier should handle the issue — either as the **runtime model** for features that call the API, or as the **Claude Code session model** for pure implementation work.

**Prereqs:** the Linear MCP is connected (`mcp__linear-app__*` tools are available).

## Model tiers

| Label | Model ID | When to apply |
|---|---|---|
| `model: opus-4-8` | `claude-opus-4-8` | Deep reasoning over large context — multi-step LLM pipelines, synthesis over big inputs, anything where quality of reasoning is the bottleneck |
| `model: sonnet-4-6` | `claude-sonnet-4-6` | Medium complexity — single-document/record processing, extract pipelines, standard code implementation in a Claude Code session |
| `model: haiku-4-5` | `claude-haiku-4-5` | Lightweight inference — classification, keyword diffing, short-input tasks where speed and cost matter more than reasoning depth |

When the issue is **pure code** (no LLM call in scope), label it with the Claude Code session tier you'd use to implement it — usually `sonnet-4-6` unless the task requires reasoning over a large codebase context (`opus-4-8`) or is a trivial one-liner (`haiku-4-5`).

## Step 1 — identify the project

If the user named a project (e.g. `/linear-model-process-label <ProjectName>`), use it. Otherwise ask which Linear project to process before proceeding.

## Step 2 — ensure labels exist

`list_issue_labels` for the project's team. For each of the three labels that is missing, call `create_issue_label` with:

| Name | Color | Description |
|---|---|---|
| `model: opus-4-8` | `#5E6AD2` | Deep reasoning — complex multi-step LLM tasks, synthesis over large context |
| `model: sonnet-4-6` | `#4EA7FC` | Medium complexity — record/document processing, extract pipelines, Claude Code implementation sessions |
| `model: haiku-4-5` | `#4CB782` | Lightweight — classification, keyword/diff checks, short inference tasks where speed and cost matter |

Resolve the team from the project (the project carries a `team`) and pass that team ID so labels are scoped to the right team, not created workspace-wide.

## Step 3 — load open issues

`list_issues` filtered to the project with `statusType` of `unstarted` or `backlog` (i.e. not Done/Cancelled). Include issues already labelled — you may need to correct or confirm the existing tag.

## Step 4 — classify and tag

For each issue, read the title and description and pick **one** model label. Apply the label via `save_issue`. Use the table above; the key questions:

1. Does this issue involve an LLM call at runtime? If yes, which tier does the task need?
   - Reasoning over large context → `opus-4-8`
   - Processing / extraction / matching a single record or document → `sonnet-4-6`
   - Classification, diff, short yes/no inference → `haiku-4-5`
2. If no runtime LLM call (pure TypeScript / React / SQL / infrastructure):
   - Complex codebase reasoning across many files → `opus-4-8`
   - Standard feature / bug fix / refactor → `sonnet-4-6`
   - Trivial one-file change → `haiku-4-5`

Don't tag issues that are Done or Cancelled — there's no action to take.

## Step 5 — report

List each issue you tagged (or confirmed), the label applied, and one sentence of reasoning. End with:
- count tagged / already-correct / skipped (Done/Cancelled)
- any issues you weren't sure about, with your tentative choice and why
````

### The processing skill

This is the doing half. It reads the tag and implements the ticket on that tier — by handing the actual coding to a subagent launched on the tagged model, while the main session stays the orchestrator. This is the version with the delegation fix baked in.

````markdown
---
name: linear-model-process-todo
description: Pick up a Linear issue and implement it by delegating to a subagent running on the model tier the issue is tagged with. Auto-detects the issue from the current git branch, or accepts an issue ID as an arg (e.g. /linear-model-process-todo MIN-777). When finished, loops through all remaining Todo issues in that project; when the Todo column is empty makes a PR.
---

# /linear-model-process-todo

Work through a Linear project's backlog one ticket at a time: pick the first **Todo** issue, implement it **on the model tier it's tagged with**, commit, move to **In Review**, write the journal, then loop. When the Todo column is empty, open a PR.

**How the model tier is honored.** A running Claude can't switch its *own* main-loop model — `/model` is a user-only control. So this skill keeps the **main session as the orchestrator** (Linear, git, journal, PR, the loop) and **delegates the implementation step to a subagent launched on the tagged tier** via the Agent tool's `model` override. That's the only way to make the tag actually drive which model writes the code, without asking the user to run `/model` for every ticket.

This skill is **project-agnostic** — it resolves the target project and team at runtime (a project-specific copy in a repo's `.claude/skills/` overrides this one).

**Prereqs:** the Linear MCP is connected (`mcp__linear-app__*` tools are available). The app should be running if the issue involves UI or API changes.

## Step 1 — identify the issue + project

Resolve the issue in this order:

1. **Issue ID passed as an arg** (e.g. `MIN-777`, `ENG-42`) → use it. `get_issue` gives you its project + team.
2. **Otherwise, current git branch** — `git branch --show-current`. If it matches `<user>/<prefix>-<number>-<slug>` (e.g. `matt/min-777-page-count-guardrail`, `jane/eng-42-fix-cache`), extract the `<PREFIX>-<number>` key and use it. The prefix is the team's issue-key prefix — don't assume a specific one.
3. **Otherwise, ask which Linear project** to work (or use a project name passed as an arg). Resolve it via `list_projects`, then fetch the first Todo issue: `list_issues` for that project, `statusType: unstarted`, ordered by `createdAt`, limit 1.
   - If no Todo issues exist, the column is empty → go to the PR step.

If the issue is Done or Cancelled, skip it and fetch the next.

## Step 2 — fetch and read the issue

`get_issue` with the identifier. Read:
- title + full description (the spec)
- current model label (label starting with `model:`)
- current status
- its **team** and **project** (you'll need the team for status transitions)

Then **`list_comments` on the issue and read them** — a Todo ticket is often a *re-pick* that was kicked back from In Review, and the latest **acceptance/rework comments are authoritative** (they override or refine the description). Don't re-implement the original spec blind. If recent comments revise the direction, treat them as the spec.

## Step 3 — resolve the model tier

Map the `model:` label to the Agent-tool model alias used when delegating in Step 5:

| Label | Agent `model` |
|---|---|
| `model: opus-4-8` | `opus` |
| `model: sonnet-4-6` | `sonnet` |
| `model: haiku-4-5` | `haiku` |

- **No `model:` label?** Default to `sonnet` and note it to the user.
- **Already running on the tagged tier?** You may implement inline (Step 5b) instead of delegating — same model, and it preserves interactivity (you can ask a mid-build question). When unsure what model you're on, delegate.

## Step 4 — branch + move to In Progress

1. Use the issue's own `gitBranchName` (from `get_issue`) — don't hand-construct it. If a branch already exists, check it out; otherwise create it:
   ```
   git checkout -b <gitBranchName>
   ```
2. `save_issue` → status **In Progress**. Resolve the status ID with `list_issue_statuses` for **the issue's team** (from Step 2) if needed.

## Step 5 — implement on the tagged tier

### Step 5a — delegate to a tier subagent (default)

Spawn **one** subagent with the Agent tool, `subagent_type: "general-purpose"` and `model:` set to the alias from Step 3. The subagent shares the working tree (the branch is already checked out), so it edits files directly. Give it everything it needs in the prompt — it can't see this conversation:

- The repo path and that branch `<gitBranchName>` is **already checked out** — implement against the current working tree.
- The issue key + title + **full description as the spec**, plus any authoritative rework comments from Step 2 (paste them; the subagent can't read Linear context you've already loaded).
- These working rules:
  - Read relevant files before editing — never edit blind.
  - Smallest change that satisfies the spec; no scope creep.
  - Follow all conventions in the repo's `CLAUDE.md`.
  - If the issue involves an API or UI change, **verify it works** (`curl` the endpoint, or open the page in a browser) and report how.
  - **Do NOT** run `git commit`/`push`, change Linear status, or open a PR — the caller orchestrates all of that. Just make + verify the code change.
  - **If the spec is genuinely ambiguous or under-specified, do NOT guess** — stop and return the single tightest clarifying question instead of implementing.
- Required return shape (so the caller can act): a short report with **(a)** files changed, **(b)** what changed and why, **(c)** how it was verified, **(d)** either `BLOCKED: <one clarifying question>` or `DONE`.

When the subagent returns:
- **`BLOCKED`** → relay its question to the user and **stop** (leave the issue In Progress; don't commit). Resume when they answer (re-delegate with the answer folded in).
- **`DONE`** → continue to Step 6.

### Step 5b — inline (only if already on the tagged tier)

If Step 3 determined you're already running the tagged model, implement directly following the same working rules above (read first, smallest change, verify, ask one tight question if ambiguous).

## Step 6 — write the journal entry (if the repo keeps one)

If the repo has a journal (per its `CLAUDE.md`; common path `docs/journal.md`), append an entry (newest on top, under today's date heading):

```markdown
## YYYY-MM-DD        ← only add this heading if it doesn't exist for today

- **<ISSUE-KEY> — <title>.** <What changed and why; key files; how verified.>
```

One dense paragraph — make the "why" and "what was verified" clear. Base it on the subagent's report. If the repo has no journal convention, skip this step.

## Step 7 — commit

Stage and commit the relevant files. Attribute the commit to the **tier that implemented it** (the delegated model, or yourself if you implemented inline):
```
<short imperative summary> (<ISSUE-KEY>)

Co-Authored-By: <implementing model> <noreply@anthropic.com>
```

## Step 8 — move to In Review

`save_issue` → status **In Review**.

## Step 9 — loop or PR

- **If more Todo issues exist** in the same project: go back to Step 1 and work the next one. Each ticket re-resolves its own tier in Step 3 — a haiku-tagged ticket delegates to haiku, a sonnet-tagged one to sonnet, regardless of what the previous ticket used.
- **If the Todo column is now empty**: push the branch and open a PR:
  ```
  git push -u origin <branch>
  gh pr create --title "<short summary of the batch>" --body "..."
  ```
  The PR body should list each issue implemented (`<ISSUE-KEY> — title`, one sentence) and a verification checklist. Do **not** move issues to Done — that's the human's call after review.

## Notes & limits

- **Why delegate instead of switching:** the assistant cannot change the main-loop model itself; the Agent-tool `model` override is the supported way to run work on a specific tier. The main session's orchestration turns still bill at *your* session model — the savings come from the implementation (usually the bulk) running on the tagged tier.
- **Lost interactivity in delegation:** a subagent can't pause to ask you a question mid-build, which is why it's instructed to return `BLOCKED` with one question rather than guess. The main session relays it.
- **Subagent isolation:** the subagent shares the filesystem/branch but not this conversation — always pass the full spec and any authoritative comments into its prompt.
````
