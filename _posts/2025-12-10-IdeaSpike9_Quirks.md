---
layout: post
title: "Idea Spike 9: Quirks"
date: 2025-12-10
author: "Matt Paulin"
categories: [ideas, idea-spike]
---

# Idea Spike 9: Quirks

Quirks was a game that some friends and I dreamed up over a decade ago. It started with a simple observation: everyone has those weird little behaviors—those personality “tics” that make us who we are. Some people take endless notes. Some brag. Some fidget. Some narrate. Some quote random movie lines. These quirks are the strange spices of our personalities.

So one day we wondered: *What if we turned that into a game?*

And Quirks was born—a lightweight social layer you sprinkle on top of everyday life. It wasn’t something you played sitting around a table. It was something you played *while* you were living your life: at a bar, at a coffee shop, at a movie, walking around, whatever. A metagame that makes normal activities more memorable.

<iframe width="560" height="315" src="https://www.youtube.com/embed/kJ2zh5TKYXo" title="BMS" frameborder="0" allowfullscreen></iframe>
---

## How Quirks Works (The Rules)

Quirks is a **social deduction party game** where each player is secretly assigned a behavior they must incorporate into normal conversation. Other players try to figure out what quirk each person is performing. It’s simple, funny, and scales to any group.

### Objective
Earn the most points by correctly guessing other players’ quirks.

---

## Setup

1. Open the app and create a game.  
2. Each player enters their name.  
3. You need at least **three players**.  
4. The phone is passed from person to person as quirks are assigned.

When it’s your turn, the app gives you a secret Quirk—just for you.

In the video demo, the quirks looked like this:

- **“You have invented everything.”**  
- **“You find everything extremely fascinating.”**  
- **“Try to rhyme your sentence every now and then.”**

Each player gets theirs privately. No one else knows what you were assigned.

---

## Gameplay Loop

### 1. Receive a Quirk
When the phone is passed to you, you tap “Yes” and the app reveals your quirk.

From that moment on, you must incorporate it into regular conversation. For example:  
If your quirk is *“You have invented everything,”* you’d casually slip in:  
- “Oh yeah, I invented that.”  
- “I actually invented this coffee shop.”  

The humor is in blending the behavior into real life—not simply performing a skit.

---

### 2. Observe & Guess
Everyone watches everyone else for odd patterns, strange phrasings, or exaggerated reactions.

A player can make a guess at any time:

> “I think Matt is doing something with… inventing?”

---

### 3. Resolve the Guess
The guessed player answers honestly.

**If correct:**  
- The guesser earns **1 point**.  
- The quirked player receives a *new* quirk from the deck.

**If incorrect:**  
- No points change hands.  
- The player keeps acting out their quirk.

In the transcript example, Adam guessed correctly and instantly got a point.

---

### 4. End of Game
The game ends when:
- Time runs out,  
- A set number of rounds have been played, or  
- The Quirk deck runs out.

The app shows the winner—in the demo, Adam won.

If players tie, they receive a “showdown quirk” to act out simultaneously, and the group votes on the winner.

---

# Resurrecting a Ghost

In the early days, the original Quirks app took us months to design. We created diagrams, fiddled with flows, and slowly stitched the idea into a little iPhone app. It ended up becoming surprisingly popular in England—right up until I made the fateful decision to charge $1 for it. That instantly killed the user base. Poof. Gone.

But that was 10–12 years ago.

This time, reviving Quirks took minutes instead of months. I fed my old diagrams and memories into ChatGPT (“Chatty G”), which helped recreate the rules document. I generated a brand guide. Then I piped all of that into Claude Code (Opus 4.5), which produced the initial Android version in under ten minutes.

I pulled it into Cursor, cleaned up the Android-shaped project structure, synced over Wi-Fi, ran a gradle build—and suddenly, the ghost of Quirks was alive on my phone again.

We were playtesting within minutes.

We found missing features immediately, and the cycle of building + testing became smooth and fun. Creativity was the easy part again.

---

# Deploying… not so fun

And then I tried to deploy it.

It turns out the Google Play Store has changed dramatically. Old inactive developer accounts were burned—mine included. I had to create a new one, pay $25 again, rebuild all my forms, assets, and screenshots.

Then I faced five different questionnaires about content rating, violence level, data usage, target audience, privacy, and more. I needed marketing copy, formatted images, and everything had to match their specs exactly.

And then came the biggest surprise:

### **You must have at least 12 testers use the app for two weeks before you can even apply for production.**

This is the opposite of the old days, when you could just make something weird, publish it overnight, and see if anyone cared. AI lets you build an idea fast—but now the bottleneck is deployment.

Some friends view this as an opportunity to build a community early. They might be right. But it’s also a barrier to creativity. You can’t just make ten experiments and toss them into the world anymore. You have to treat even a tiny playful idea like a product launch.

I can still build apps—it’s just that the expectations are different now.

---

# Call to Action

If you have an Android phone, I could use your help.

I need testers so I can get Quirks through Google’s approval process and into the store.  
If you want to help revive this strange, delightful metagame from my past, reach out—  
I’ll add you to the testing list.
