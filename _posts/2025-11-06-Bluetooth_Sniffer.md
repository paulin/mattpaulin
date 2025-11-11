---
layout: post
title: "Idea Spike 4: Bluetooth Sniffer Android App"
date: 2025-11-06
author: "Matt Paulin"
categories: [ideas, idea-spike]
---
# Building a Bluetooth Sniffer in 24 Hours


For week four of my idea sprints, I set out to build a small Android application in a single day. These “idea spikes” are my way of stress-testing what modern development tools — particularly AI-assisted ones — can do when given a clear technical objective.  

This week’s challenge: create an app that listens for the invisible conversations happening all around us. I called it **Bluetooth Sniffer**.

<iframe width="560" height="315" src="https://www.youtube.com/embed/BjbswQt9Okw" title="Bluetooth Sniffer" frameborder="0" allowfullscreen></iframe>

## Building the Prototype

I’ve built Android apps before, but this was the first time I approached it with a full AI-assisted workflow. I used **Claude Code** for the broad architectural components, **Cursor** for detailed refinement, and **Android Studio** for deployment and testing. The workflow was unexpectedly efficient. Each tool handled a different part of the problem — Claude for structure, Cursor for polish, and Studio for integration. I never wrote code directly in Android Studio; I only used it to push builds to the phone a...

With this setup, I was able to build the first working version in roughly 24 hours.

## What the App Does

Bluetooth Sniffer continuously scans for nearby Bluetooth devices, logs what it hears, and keeps a history of everything detected. Each device entry includes its signal strength, timestamp, and a few other broadcast details. The app can also **bookmark** specific devices — for example, a pair of headphones — and notify you when they reappear.

The original idea was simple: if I knew the Bluetooth signature of a friend’s device, I could be alerted when they were nearby. Maybe I’d know when a friend walked into the grocery store or when a familiar car pulled into the parking lot.  

It turns out reality is less cooperative. Modern Bluetooth devices **rotate their MAC addresses every 15 minutes**. This means the same device looks like dozens of new ones over time. To get around that, I implemented a **fingerprinting system** that uses broadcast data — manufacturer identifiers, service UUIDs, transmit power, and a few statistical heuristics — to group signals that are probably from the same source. The system isn’t perfect, but it provides a consistent enough view to make the data mea...

## From Scanner to Visualizer

Once the core scanning worked, I added visual layers. The first was a **radar view**, loosely inspired by the proximity tracker from *Aliens*. It uses the phone’s compass and orientation sensors to approximate where each detected device might be relative to you. The display updates as you rotate the phone, pointing north and showing devices as they flicker in and out. It’s not scientifically accurate, but it does make the invisible visible.

The second visualization was a **density grid**, a heat map that builds up as you walk around. Each detected device adds a trace, gradually revealing clusters of Bluetooth activity. Walking through a crowded space — a café, a gym, or a busy street — produces an unexpectedly dense pattern.  

At one point, in a rock climbing gym, the app picked up forty-three devices. Each one was a small piece of radio evidence that modern life is saturated with wireless signals.

## What I Learned

A few things became clear during development and testing:

- **Bluetooth is noisy and unpredictable.** Devices appear and vanish constantly. Some advertise every second; others might go silent for five or ten minutes. The system’s low-energy design means intermittent visibility is a feature, not a bug.
- **MAC randomization breaks naïve tracking.** Every modern phone and wearable changes its identity frequently. The fingerprinting system helped, but the data will always be probabilistic.
- **Battery consumption is real.** Continuous scanning and sensor fusion drained my phone rapidly. Even when the app was idle, background services consumed significant power, and I eventually had to stop the service manually to prevent runaway battery use.
- **Android’s throttling behavior matters.** Without a foreground service, scans get paused or delayed when the device sleeps. The app needed to remain active to produce meaningful results.

A simple timeout of 60 seconds for “last seen” devices proved too aggressive. Extending that to two or three minutes stabilized the display and provided a more accurate representation of nearby activity.

## Reflections on Tools and Process

The technical stack — Claude, Cursor, and Android Studio — worked better than expected. Using AI tools as collaborators, not just assistants, changed how I approached the project. I spent less time writing boilerplate and more time thinking about behavior: how to interpret rotating addresses, how to visualize uncertainty, and how to make probabilistic data feel intuitive.

This was also a reminder that “rapid prototyping” doesn’t mean “throwaway.” Even a one-day build can yield insights about user experience, energy use, and hardware limits. Bluetooth Sniffer isn’t a product, but it’s a working experiment that exposes how connected — and how opaque — our digital environment really is.

## Conclusion

Bluetooth Sniffer began as a one-day prototype. It turned into a small field study in wireless visibility. The app doesn’t decode or connect to anything; it simply listens. And in listening, it reveals how saturated the modern world has become with quiet digital signals — phones, cars, speakers, sensors — all broadcasting in overlapping whispers.

For me, the project was a useful reminder that we can still build meaningful things quickly. With the right tools, a clear idea, and a bit of curiosity, a single day is enough to turn invisible phenomena into something you can actually see.
