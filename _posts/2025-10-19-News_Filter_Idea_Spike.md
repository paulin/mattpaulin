---
layout: post
title: "News Filter Idea Spike"
date: 2025-10-19
author: "Matt Paulin"
categories: [coworking, community, ideas]
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Jj_Hfx9Jc8s" title="News Filter Idea Spike on YouTube" frameborder="0" allowfullscreen></iframe>

---

### Background

I’ve always liked keeping up with current events, but lately it’s been exhausting. The political noise, the endless outrage — it’s like the news was designed to keep my blood pressure high. I’d read about something horrific that supposedly threatens my kids’ future, and I’d lie awake half the night worrying. It wasn’t helping me understand the world; it was just making me anxious.

At the same time, I *do* want to know what’s going on — but not every little twist and turn as it unfolds. I’m more interested in the *patterns* and the *strategies* behind the stories. I want data that gives context, not just anecdotes that fuel bias.

So I started thinking: what if I could track topics on a weekly cadence, collect the relevant articles, and have an AI summarize what’s actually going on? Something like a **digest** that highlights longer-term developments rather than daily drama. That seemed like a perfect use case for LLMs — they can summarize or expand information to your taste. If I want a historical overview of the Middle East, it can do that. If I just want a short executive summary of what happened there this week, it can do that too.

---

### Building the Prototype

After about a week of experimenting, I built something I called the **News Topic Radar** — a prototype for a smarter news filter.

The basic idea:
- You enter the **topics** you care about (I tested with “Elon,” “Donald Trump,” and “AI”).
- The system fetches recent articles from **The Guardian** (or eventually, any news feed).
- It stores the results as **JSON**, so you can process them and generate clean, topic-based summaries.

Over time, you can re-run it to see how each topic evolves — a kind of rolling intelligence report that filters out noise and keeps you focused on the bigger picture.

From my early tests, it worked surprisingly well. I could pull an article from a few days ago, see how it connected to the larger story, and start spotting emerging patterns.

---

### Lessons Learned

While building this, I discovered a few important things:

1. **OpenAI’s API is not up-to-date.**
   It doesn’t have live web access like ChatGPT in the browser, so I had to feed it the topics and article data manually.

2. **Tagging matters.**
   Storing articles as JSON is fine for a prototype, but to scale it, you need a database that can associate articles, topics, and summaries. This would let the LLM build richer contextual reports.

3. **User control is key.**
   Each user should be able to specify their topics, sources, and frequency — maybe even compare how different outlets cover the same event.

4. **Future ideas.**
   - Cache articles centrally and forward them to users who follow similar topics.
   - Include social media feeds to identify emerging trends.
   - Ask the LLM to infer **intentions** — what a given figure or organization might do next.

---

### User Stories

Here’s how I framed it:

- As a user, I want to list the **topics** I’m interested in and the **frequency** for reports.
- As a user, I want to choose **news sources** to maximize coverage.
- As a user, I want the system to create a **report** that builds on past summaries to show unfolding patterns.

---

### Reflection

This was a small but meaningful experiment — one week of work that reminded me how AI can *reduce* information overload rather than amplify it. I don’t need breaking news every minute. I need calm, structured insight into what’s really happening.

The News Topic Radar might never replace mainstream media, but it could help me — and others — stay informed *without losing peace of mind.*
