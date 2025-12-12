---
layout: post
title: "Idea Spike 9: Quirks"
date: 2025-12-10
author: "Matt Paulin"
categories: [ideas, idea-spike]
---

<style>
.quirks-rules{
  background:#f8fafc;
  border:1px solid #e2e8f0;
  border-left:6px solid #fb923c; /* orange accent */
  padding:22px 24px;
  margin-top:48px;
  border-radius:12px;
  box-shadow:0 8px 24px rgba(0,0,0,.06);
}

.quirks-rules h2, .quirks-rules h3, .quirks-rules h4{
  margin-top:14px;
}

.quirks-badge{
  display:inline-block;
  font-size:.75rem;
  letter-spacing:.08em;
  font-weight:700;
  padding:4px 10px;
  border-radius:999px;
  background:#111827;
  color:#fff;
  margin-bottom:10px;
}
</style>

Quirks was a game that some friends and I dreamed up over a decade ago. It started with a simple observation: everyone has those weird little behaviors—those personality “tics” that make us who we are. Some people take endless notes. Some brag. Some fidget. Some narrate. Some quote random movie lines. These quirks are the strange spices of our personalities.

So one day we wondered: *What if we turned that into a game?*

And Quirks was born—a lightweight social layer you sprinkle on top of everyday life. It wasn’t something you played sitting around a table. It was something you played *while* you were living your life: at a bar, at a coffee shop, at a movie, walking around, whatever. A metagame that makes normal activities more memorable.

<iframe width="560" height="315" src="https://www.youtube.com/embed/kJ2zh5TKYXo" title="BMS" frameborder="0" allowfullscreen></iframe>
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




<div class="quirks-rules" markdown="1">
<span class="quirks-badge">RULES</span>

## Quirks – Official Game Rules

### Overview
Quirks is a social deduction party game. Each player secretly receives a “quirk”—a behavior they must subtly incorporate into normal conversation. Other players try to guess each other’s quirks.

### Objective
Accumulate the most correctly guessed quirks by the end of the game.

### Setup
- Each player enters their name into the app.  
- The system automatically assigns hidden quirks one at a time.  
- Minimum of three players.

### Gameplay Loop

#### 1. Receive a Quirk
The active player receives a secret quirk and must incorporate it into normal conversation.

#### 2. Observe and Guess
Players watch for unusual behavior. A player may guess another’s quirk at any time.

#### 3. Resolving a Guess
- **Correct guess:**  
  - Guesser earns 1 point.  
  - Quirked player discards the quirk and receives a new one.  
- **Incorrect guess:**  
  - No points change.  
  - The player keeps their quirk.

#### 4. Ending the Game
The game ends when:  
- A set time expires,  
- A set number of rounds is completed, or  
- The quirk deck is exhausted.

### Winning
Highest score wins.  
If tied, the app assigns a showdown quirk; the group votes on the winner.

### Variants
- **Hard Mode:** Can't repeat quirk behavior more than once every 30 seconds.  
- **Silent Round:** No verbal guessing—only observation.  
- **Chaos Mode:** Players may receive two quirks at once.

</div>
