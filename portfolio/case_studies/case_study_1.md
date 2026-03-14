---
layout: page
title: "Kaiizen: Building an AI Product Ecosystem That Actually Works"
permalink: /portfolio/case_studies/kaiizen/
---

Kaiizen was working in real estate renovation, and the pitch was straightforward: use AI to make renovation data better. But the actual problem turned out to be much harder than that.

We had field inspectors walking through houses with phones, taking photos, writing notes. That data had to flow into systems that contractors, investors, and property managers all relied on to make capital decisions. And somewhere in the middle, AI was supposed to make sense of it all.

The question I kept coming back to wasn't really about AI — it was about trust. How do you get humans, AI, and enterprise systems to all trust each other's data? Because without that, AI output just got ignored. Operations reverted to spreadsheets. And every new property we onboarded amplified the inconsistency instead of reducing it.

---

## Splitting the System by Intent

Early on I pushed for something that felt counterintuitive — instead of building one big product, we split it into three. The reason was that different people have different intents, and in my experience, forcing them into the same tool creates friction that kills adoption.

**Kai** was for capture. It lived at the moment of human action — the inspector in the house, phone in hand. Everything about Kai had to be fast and simple, because field users wouldn't tolerate anything else. We went SMS-first, which felt limiting at the time, but it meant adoption was nearly frictionless. You didn't need to download an app or remember a login. You just texted.

I think this is one of those cases where designing for how people actually behave — rather than how you'd like them to — made all the difference. An inspector standing in a gutted kitchen doesn't want to navigate a dashboard.

**Zen** was for the customer. It helped property owners and investors understand what the AI found — the renovation scope, the strategy, the costs. If customers couldn't understand the output, it didn't matter how good the AI was.

**Fusion** was the operations backbone. It connected everything to the internal world — CRM, suppliers, finance. This is where data had to be structured, validated, and consistent enough for downstream teams to actually use it.

Each product was optimized for a different person with a different intent. That separation ended up being the thing that let the whole ecosystem work — it removed the complexity from each user that wasn't their job to deal with.

---

## Treating Data Like a Product

One of the decisions I'm glad we made early was treating our data schema as a product, not plumbing.

We introduced strict, versioned schemas. When AI output didn't conform, validation failures surfaced immediately. We built "Fix File" processes to catch and correct inconsistencies before they flowed downstream.

It sounds boring, and it is. But it's the reason we could onboard new properties without constant rework. It's the reason enterprise partners could plug into our system without re-architecture. I've found that these kinds of shared frameworks — even when they're just data schemas — tend to be more valuable over time than any individual feature decision. They become the common language that lets everyone else do their work.

---

## What Changed

Walkthrough-to-report time dropped from days to about an hour. Data consistency improved at the point of capture, which meant everything downstream got cleaner too. Internal teams gained traceability across properties and suppliers. And the team shared a common mental model of how the whole system fit together, which I think mattered as much as any metric.

Looking back, the main thing I took away from Kaiizen is that AI alone was never the product. The product was a system that could survive contact with human behavior, operational chaos, and enterprise reality — with AI as one piece of that. The AI handled the heavy lifting. The product design tried to make everyone's job a little easier and a little more focused.
