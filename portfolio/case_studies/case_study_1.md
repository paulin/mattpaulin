---
layout: page
title: "Kaiizen: Building an AI Product Ecosystem That Actually Works"
permalink: /portfolio/case_studies/kaiizen/
---

# Kaiizen: Building an AI Product Ecosystem That Actually Works

Kaiizen was the kind of problem I love — messy, real, and full of humans doing unpredictable things.

We were working in real estate renovation. The pitch was simple: use AI to make renovation data better. But the actual problem was much harder than that. We had field inspectors walking through houses with phones, taking photos, writing notes. That data had to flow into systems that contractors, investors, and property managers all relied on to make capital decisions. And somewhere in the middle, AI was supposed to make sense of it all.

The obvious question was "How do we capture better renovation data using AI?" But that's not the question that kept me up at night. The real question was: **how do we get humans, AI, and enterprise systems to trust each other's data?**

Because without that trust, nothing worked. AI output got ignored. Operations reverted to spreadsheets. And every new property we onboarded just amplified the inconsistency. Trust wasn't a nice-to-have — it was the infrastructure the whole system depended on.

---

## Designing for How People Actually Behave

Early on, I pushed for something that felt counterintuitive — instead of building one big product, we split it into three. The reason was simple: different people have different intents, and forcing them into the same tool creates friction that kills adoption.

**Kai** was for capture. It lived at the moment of human action — the inspector in the house, phone in hand. Everything about Kai had to be fast and stupid-simple, because field users would not tolerate anything else. We went SMS-first, which felt limiting at the time, but it meant adoption was nearly frictionless. You didn't need to download an app or remember a login. You just texted.

This was a lesson I keep learning: **design for how people actually behave, not how you wish they would.** An inspector standing in a gutted kitchen doesn't want to navigate a dashboard. They want to take a photo and move on.

**Zen** was for the customer. It helped property owners and investors understand what the AI found — the renovation scope, the strategy, the costs. This was the trust layer. If customers couldn't understand the output, none of the AI work mattered. Zen had to translate machine confidence into human confidence.

**Fusion** was the operations backbone. It connected everything to the internal world — CRM, suppliers, finance. This is where data had to be structured, validated, and consistent enough that downstream teams could actually use it.

Each product was optimized for a different person with a different intent. That separation was the thing that made the whole ecosystem work — it **elevated** each user by automating away the complexity that wasn't their job.

---

## Treating Data Like a Product

One of the decisions I'm proudest of was treating our data schema as a product, not plumbing.

We introduced strict, versioned schemas. When AI output didn't conform, validation failures surfaced immediately. We built "Fix File" processes to catch and correct inconsistencies before they flowed downstream.

This sounds boring. It is boring. But it's the reason we could onboard new properties without constant rework. It's the reason enterprise partners could plug into our system without re-architecture. The unsexy infrastructure decision turned out to be the one that made scale possible.

I've found this pattern repeating throughout my career: **the frameworks and shared language you build early become the trust layer everything else depends on.** At Kaiizen, the schema was that shared language — the thing that let AI, operations, and customers all work from the same source of truth.

---

## What Changed

Walkthrough-to-report time dropped from days to about an hour. Data consistency improved at the point of capture, which meant everything downstream got cleaner too. Internal teams gained traceability across properties and suppliers. And maybe most importantly, the team shared a common mental model of how the whole system fit together.

The thing I keep coming back to is that **AI alone was never the product.** The product was a system that could survive contact with human behavior, operational chaos, and enterprise reality — with AI as one piece of that system. The AI automated the heavy lifting. The product design elevated everyone who touched it.

That's the kind of problem I want to spend my time on.
