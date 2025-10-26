---
layout: post
title: "Debate Simulator Idea Spike"
date: 2025-10-26
author: "Matt Paulin"
categories: [ideas, idea-spike]
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/sCBbBwdj9Lk" title="Debate Simulator Idea Spike on YouTube" frameborder="0" allowfullscreen></iframe>

---

### Background
Sometimes debating politics can feel like sparring — it’s an art that needs practice, but finding the right partner isn’t always easy. **DebateSim** is my attempt to create a personal debate partner powered by AI — one you can *argue with safely* to sharpen your reasoning skills.

## The Idea

I wanted to create an Android application that works like a **phone call** — except instead of chatting with another person, you’re debating with a **large language model (LLM)**.  
Each conversation is structured, timed, and documented, giving you a transcript of the debate afterward.

The goal is to **practice handling common political arguments**, learning to stay concise, logical, and calm under pressure.

It all starts with a question, like:

> “Should states be responsible for the school system, or should it be a federal responsibility?”

You pick a side — *for* or *against* — and the LLM automatically takes the opposite.  
Each turn is limited to **200 words or less**, encouraging you to express your position clearly and succinctly. Anything longer is flagged and noted.

---

## Architecture

The first version is built with:

- **React Native** using **Expo** (cross-platform for Android & iOS)
- **Node.js backend**
- **Anthropic’s Claude** as the debating LLM (though the architecture supports other models too)

This setup allows fast prototyping, voice integration, and easy deployment across mobile platforms.

---

## MVP User Stories

### Topic & Side Selection
- As a user, I want to start a debate by entering a question.  
- As a user, I want to choose which side (for or against) I will argue.  
- As a user, I want the LLM to automatically take the opposite side.  
- As a user, I want to start the debate quickly after selecting my topic and stance.

### Structured Turn-Taking Debate
- As a user, I want to take turns speaking with the LLM.  
- As a user, I want to see when it’s my turn to respond.  
- As a user, I want to keep responses under 200 words, with a visible counter.  
- As a user, I want the system to flag longer responses.  
- As a user, I want to end the debate at any time.  
- As a user, I want to speak my argument aloud, and hear the AI’s reply spoken back to me.

### Transcript & Documentation
- As a user, I want to see the debate transcript in real time.  
- As a user, I want to know who said what and when (with timestamps).  
- As a user, I want to review and save the transcript automatically after the debate ends.

---

## What I Learned

Coding it with **ClaudeCode** was an unexpectedly smooth experience.  
I fed in the user stories, walked away for ten minutes, and came back to a **ready pull request**. From there, I used **Cursor** to refine the implementation.

However, the constant back-and-forth via pull requests broke my concentration — I missed being “in the loop” while coding. Next time, I’ll stay closer to the active iteration.

A few other takeaways:
- **200 words was too long.** The debates dragged on. I switched to a “**1 tweet**” rule for brevity and energy.
- The app already feels surprisingly real — hearing an AI argue with you while you’re driving is both entertaining and slightly unsettling.

---

## What’s Next

Future improvements:
- Introduce **logical fallacies** so the AI can argue badly — helping users learn to spot poor reasoning.
- Enable **auto-mic activation** to keep the conversation flowing hands-free.
- Explore a **“car mode”** version for debate practice during commutes.
