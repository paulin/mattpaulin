---
layout: post
title: "Interactive Imitation Learning (DAgger for Carbot)"
date: 2025-10-19
author: "Matt Paulin"
categories: robotics carbot
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/KSR3HaJ6_vI" title="DAgger Technique for Carbot" frameborder="0" allowfullscreen></iframe>

---

### October 2025: “Interactive Imitation Learning”

Previously, I had built **Carbot** to collect data while in ROV mode — capturing images, then processing them through a CNN in an attempt at behavioral cloning.  

It didn’t work well at all. Most of the time, the car would just drift forward without reacting to anything. I realized I needed a safer, more controlled environment, so I switched to a **virtual model** instead. After some research, I found a Unity simulator that lets you drive a simple car using keyboard commands — **WASD** controls, just like a game.  

This approach turned out to be a great way to isolate how learning happens and iterate on CNN behavior before trying it in the real world.

---

### My First Attempt

In this experiment, I captured about **500 frames** and control pairs — steering and throttle commands — while driving manually in the simulator. Once enough data was collected, I trained a model and set it to run autonomously.

When the car inevitably went off track, I introduced a recovery mechanism: pressing **H** while manually correcting its behavior. Each of those “fixes” (the recovery frames and control inputs) would then be **added back** into the dataset and retrained into the model — an ongoing feedback loop that improved over time.

This approach is called **DAgger**, short for **Dataset Aggregation** — a well-known algorithm in imitation learning where an agent learns not just from demonstrations, but also from its own mistakes as they’re corrected by an expert.

As I later described it to the AI, what I was doing was:

> “Interactive imitation learning (a.k.a. DAgger-style training) with live fine-tunes + hot-reload.  
> You keep the sim running, correct the car when it messes up, and those corrections get folded into the model that’s driving…without restarting.”

It’s a powerful concept: the AI learns *while* it’s being corrected.

---

### What I Learned

This worked surprisingly well — enough to get usable data and consistent runs. But it was also clear that behavioral cloning alone has limits.  

If the model was trained too narrowly on a single driving style, it would simply repeat that — sometimes moving forward successfully, but often just veering off the road or freezing. It lacked generalization.

Still, it was a huge step forward in understanding how to train **Carbot** interactively.

---

### Gotchas!

- **Keyboard control permissions:**  
  Cursor needs access to your keyboard commands. If you see the error  
  `"This process is not trusted! Input event monitoring will not be possible until it is added to accessibility clients."`  
  Go to **System → Privacy & Security → Accessibility**, and grant permission.

- **Timeouts are your friend:**  
  At one point, the system went rogue and wouldn’t stop typing `D`s. I had to track down the process and kill it while it was spamming forward commands. Add a timeout or safety check to avoid infinite loops.


---

**Next Steps:**  
Continue experimenting with interactive imitation learning loops — possibly layering in reinforcement learning or simulated sensor noise to improve generalization before deploying to real hardware.
