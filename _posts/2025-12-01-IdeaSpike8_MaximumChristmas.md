---
layout: post
title: "Spike 8: Maximum Christmas"
date: 2025-12-01
author: "Matt Paulin"
categories: [ideas, idea-spike]
---

# Spike 8: Maximum Christmas


For this week’s spike, I went in a different direction. Instead of taking a random idea and turning it into a product as quickly as possible, I decided to do something thematic for Christmas. I had a domain sitting unused for years—**[Maximum Christmas](https://maximumchristmas.com)**—originally bought just because the name made me laugh. I told myself: either build something with it this season or get rid of it.

That decision kicked off what turned out to be the **most complex spike I’ve done so far**, and by far the one with the most real engineering work behind it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/yfHAJ61o6r0" title="BMS" frameborder="0" allowfullscreen></iframe>
---

## Starting With Branding, Then Throwing It Away

I began in an unusual place: branding. I spent time with ChatGPT developing a vision for the site, discussing tone, colors, personality, and even brand pillars. The AI produced a full brand spec and then generated an initial site based on it.

The first version looked like a typical holiday site—listicles, silly blog posts, “Top 10 Ugly Christmas Things,” all leaning heavily into holiday kitsch. It technically worked, but I was underwhelmed. It felt generic. It didn’t speak to me, and I couldn't imagine publishing it.

So overnight I scrapped all of it and **started over completely**.

This turned out to be the smarter path. Rewriting the first version to become the thing I actually wanted would have taken longer than simply starting fresh. The old code carried too much design debt—it reflected a direction I no longer wanted. Starting over let me build exactly what I envisioned without fighting the previous choices.

---

## The Real Idea: A Satirical Christmas Game

What finally clicked was the idea of making **a simple, fun, satirical Christmas game** about how people can go overboard during the holidays.

The game mechanic is straightforward:

- Each day of December unlocks one “advent box.”
- Opening it reveals **four Christmas products**.
- Three are fake, one is real.
- Players get **one chance** to identify the real product.
- After 25 days, all final stats are revealed—what fooled the most people and which real items were correctly identified.

The twist is that **the fake products come from players**. People submit bizarre, unhinged, or clever fake holiday creations, while real products are submitted via Amazon URL.

Admins assemble the 25 daily challenges leading up to Christmas.

It’s deliberately absurd, festive, and playful—exactly the kind of thing a domain like MaximumChristmas deserves.

---

## This Had to Be More Than an MVP

Unlike previous spikes, this one couldn’t stop at a rough prototype. I needed something that:

- Could support real users
- Could scale without blowing up my bill
- Had proper admin tools
- Looked polished on mobile and desktop
- Included a functioning backend with telemetry, cost controls, and real workflows

My journal from the days leading up to this spike shows just how quickly scope increased.

### Must-Haves From the Journal

From November 27–28, I captured dozens of requirements and user stories:

- Reset-all / reset-challenges admin buttons  
- Admin logout  
- Ability to review, approve, and delete fake product submissions  
- Product leaderboards for both real and fake items  
- Product cards that show name, price, and image cleanly  
- Responsive design for both desktop and mobile  
- A redesigned selection dialog that’s actually readable  
- Clear score indicators on the advent calendar  
- User progress stored via cookies (no login required)  
- Affiliate-tagged product links to Amazon  
- Admin controls to hide/show leaderboards  
- Mention on the homepage that final stats reveal at the end  

Even the “nice to haves” accumulated:

- Favicon  
- Custom Christmas song (via Suno, maybe publish via DistroKid later)  
- Pricing warnings  
- Terms of Service  

This wasn’t just a spike anymore—it was evolving into a complete holiday product.

---

## Engineering Problems Worth Solving

Once the concept solidified, the engineering challenges followed fast.

### Telemetry

I wanted to know if people were actually using the site, so I set up Google Analytics with custom event tracking.

### Deployment

I chose **Google Cloud Platform**, mostly because the CLI tooling works extremely well with Cursor. Deployments ended up being smooth once configured.

### Image Management

I needed images to serve from a **CDN**. The game loads lots of images—real product photos, user-submitted fake products, Amazon hero images. Hosting them directly would have made the bill explode.

### Cost Monitoring

GCP made it easy to track daily and monthly costs in real time. Given unpredictable holiday traffic, this mattered.

### Affiliate Links

The revenue model is intentionally simple:  
**Use Amazon affiliate links to offset hosting costs.**

No ads. No banners. Just festive commerce.

### Amazon Didn’t Make Scraping Easy

I assumed Amazon would be supportive, since I was trying to sell their products. Not quite.  
They aggressively block scraping. The AIs attempted several approaches, but eventually I think my system landed on their internal “naughty list.” I had to fall back to **manual product submissions** with pre-validated images.

---

## The Hardest Spike Yet

This spike took real time—more than any before it. I estimate around **30 hours of work over 10 days**. The initial prototype took a day or two, but all the details, polish, admin workflows, and edge cases took far longer.

That’s what made this spike meaningful: it was honest engineering, not just prototyping.

---

## A Lesson in Reducing Code Debt

One of the most important lessons was the value of starting over. Rewriting the initial AI-generated site would have taken longer than building the version I actually wanted. The old version clarified my direction, but once I knew what I wanted, restarting was faster, cleaner, and more motivating.

The new pattern looks like this:

1. Explore with AI  
2. Evaluate  
3. Throw it away if needed  
4. Build the real version  

There’s power in being willing to discard early work.

---

## Always Use Git

Working with AIs makes Git absolutely essential. The AIs can make unexpected choices, misunderstand instructions, or “helpfully” refactor things that shouldn’t be touched. The only sane strategy is:

- Commit early  
- Commit often  
- Roll back as needed  

It’s like saving your progress in a video game—sometimes you simply have to revert and reattempt.

---

## The Big Takeaway: I Need a Team

Building MaximumChristmas reinforced something important:

Even with AI, **a real product needs a team**.

- Someone to manage content  
- Someone to run social media  
- Someone to handle devops  
- Someone to help tune product decisions  
- Someone to support users  

AI lets me *attempt* being a one-person startup factory, but it doesn’t make it *easy*. Wearing every hat is still real work.

---

## Closing Thoughts

Maximum Christmas started as a joke domain and grew into a game, a holiday satire, a technical playground, and a surprising amount of true engineering.

This spike wasn't about speed—it was about building something real, functional, resilient, and fun. It let me explore product development, game mechanics, AI-assisted engineering, affiliate monetization, CDN optimization, admin tooling, and cost-conscious cloud deployment—all wrapped in a silly Christmas theme.

On December 25, I will reveal the list of real products and the list of fake products. Every vote will be counted so we can see which might be made into products for next year.  
