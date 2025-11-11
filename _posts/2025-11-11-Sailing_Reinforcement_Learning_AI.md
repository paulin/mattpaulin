---
layout: post
title: "Idea Spike 5: Reinforcement Learning Docking Simulator"
date: 2025-11-11
author: "Matt Paulin"
categories: [ideas, idea-spike]
---

# Record RL Docking Simulator

This is my fifth idea spike — a quick prototype to explore an idea all the way to a working MVP. The question I keep asking myself with these spikes is: *How quickly can I bring an idea to life using modern AI tools?* Lately, the answer has been *very quickly* — fast enough that it feels like I can build almost anything I can imagine.

This project started from a real sailing experience. I wanted to simulate maneuvering a sailboat out of a marina on a windy day — a tricky problem where the physics of wind, dock lines, and tight spaces make for a rich challenge. So I built a simulator with a marina editor that lets me place boats, docks, cleats, and lines. Each setup represents a different scenario, such as varying wind directions and dock configurations.

The goal: train a reinforcement learning (RL) agent to figure out how to safely undock the boat on its own.

<iframe width="560" height="315" src="https://www.youtube.com/embed/2h6KT1efMEA" title="Bluetooth Sniffer" frameborder="0" allowfullscreen></iframe>

---

### The Simulation

In the simulator, you can load predefined scenarios, tweak parameters, and then select a learning algorithm — like Q-Learning, Deep Q-Network (DQN), or Cross-Entropy. Once training begins, the boat starts moving — backing out, moving forward, reacting to simulated wind. Watching it in real time is interesting but slow, so I added a speed control to fast-forward through training runs.

Here’s the setup:
- **Environment:** A 2D marina with docks, lines, and wind.
- **Agent:** The boat.
- **Goal:** Back out of the slip and reach a target point (the green circle) without collisions.

Each training session runs multiple episodes, and over time, the algorithm learns which actions lead to success — taking off dock lines, steering against the wind, and timing the throttle correctly.

---

### Early Observations

Reinforcement learning is well-studied, but applying it to something as chaotic and continuous as docking a sailboat brings new challenges. The simulation includes random wind gusts and the physics of line tension, which makes the environment partially observable and non-linear — exactly the kind of messy reality RL is good for.

My idea is to eventually let the system train overnight: drop in any sailboat, set up the dock and wind parameters, and let it figure out the best undocking procedure through trial and error. The longer it trains, the better it should get.

This first version was a lot of fun to build — from creating the marina editor to integrating multiple learning algorithms. There’s still plenty to refine in the AI’s fine-tuning, but the concept feels promising. I plan to come back to it later to explore more advanced techniques like model-based RL and policy gradients.

---

# Marina Docking RL Simulator (Technical Appendix)

A reinforcement learning environment for training autonomous agents to navigate a sailboat out of a narrow marina slip under realistic physics including wind, prop-walk, and dock line dynamics.

---

### Reference Definitions
# Reinforcement Learning Cheat Sheet

## Core Vocabulary

| Term | Definition |
|------|-------------|
| **Agent** | The decision maker that learns by interacting with the environment. |
| **Environment** | Everything outside the agent that provides states and rewards. |
| **State (s)** | A representation of the environment at a specific moment (e.g., game screen, robot position). |
| **Action (a)** | A choice the agent can make (e.g., move left, buy stock). |
| **Reward (r)** | Numerical feedback from the environment after an action. Positive for success, negative for penalties. |
| **Episode** | A full sequence from start to terminal state (e.g., one game run). |
| **Policy (π)** | A mapping from states to actions. \( \pi(a|s) \) = probability of taking action *a* in state *s*. |
| **Value Function (V(s))** | Expected cumulative reward starting from state *s* and following policy π. |
| **Action-Value Function (Q(s,a))** | Expected cumulative reward starting from state *s*, taking action *a*, and then following policy π. |
| **Discount Factor (γ)** | Determines how much future rewards are worth compared to immediate ones (0 ≤ γ ≤ 1). |
| **Learning Rate (α)** | Controls how quickly the agent updates its knowledge (0 < α ≤ 1). |
| **Exploration vs Exploitation** | Balancing trying new actions (exploration) vs using known good ones (exploitation). |
| **ε-Greedy Policy** | Chooses a random action with probability ε, otherwise takes the best-known action. |
| **Temporal Difference (TD) Error** | The difference between predicted and newly observed reward estimates. |
| **Replay Buffer** | A memory that stores past experiences (s, a, r, s′) for reuse in training (used in Deep RL). |

---

## Key Formulas

### 1. Return (Total Discounted Reward)

\[
G_t = R_t + \gamma R_{t+1} + \gamma^2 R_{t+2} + \dots
\]

### 2. State Value Function

\[
V^{\pi}(s) = \mathbb{E}_{\pi} [ G_t \mid S_t = s ]
\]

Expected total reward when following policy π from state *s*.

### 3. Action Value Function

\[
Q^{\pi}(s, a) = \mathbb{E}_{\pi} [ G_t \mid S_t = s, A_t = a ]
\]

Expected total reward when taking action *a* in state *s* and then following π.

### 4. Optimal Value Functions

\[
V^*(s) = \max_{a} Q^*(s, a)
\]

\[
Q^*(s,a) = \mathbb{E} [ r + \gamma \max_{a'} Q^*(s', a') ]
\]

These represent the best possible long-term return from any state or action.

---

## Q-Learning (Off-Policy TD Control)

**Update Rule:**

\[
Q(s, a) \leftarrow Q(s, a) + \alpha \big[ r + \gamma \max_{a'} Q(s', a') - Q(s, a) \big]
\]

- \( \alpha \): learning rate  
- \( \gamma \): discount factor  
- The term in brackets is the **TD error**

---

## SARSA (On-Policy TD Control)

**Update Rule:**

\[
Q(s, a) \leftarrow Q(s, a) + \alpha \big[ r + \gamma Q(s', a') - Q(s, a) \big]
\]

Difference: SARSA uses the *actual* next action \( a' \) from the current policy instead of the best action.

---

## Exploration Strategy (ε-Greedy)

\[
a =
\begin{cases}
\text{random action}, & \text{with probability } \varepsilon \\
\arg\max_{a} Q(s,a), & \text{with probability } 1 - \varepsilon
\end{cases}
\]

---

## Deep Q-Network (DQN)

Uses a **neural network** to approximate Q(s, a):

\[
Q(s, a; \theta) \approx \text{Neural Network}(s)
\]

**Loss Function:**

\[
L(\theta) = \big( r + \gamma \max_{a'} Q(s', a'; \theta^-) - Q(s, a; \theta) \big)^2
\]

Uses:
- **Experience replay** (random mini-batches from replay buffer)
- **Target network** (θ⁻) for stable updates

---

## Key Intuitions

| Concept | Intuition |
|----------|------------|
| **Temporal Difference Learning** | Learn directly from raw experience without needing the full episode outcome. |
| **Reward Propagation** | Information about future rewards flows backward to earlier states. |
| **Credit Assignment** | Determining which earlier actions deserve credit for future outcomes. |
| **Discounting (γ)** | Balances short-term vs. long-term planning. |
| **Exploration (ε)** | Prevents premature convergence to suboptimal strategies. |

---

## Quick Symbol Reference

| Symbol | Meaning |
|---------|----------|
| \( s, s' \) | current and next state |
| \( a, a' \) | current and next action |
| \( r \) | reward received after action |
| \( \alpha \) | learning rate |
| \( \gamma \) | discount factor |
| \( \varepsilon \) | exploration probability |
| \( Q(s, a) \) | value of taking action a in state s |
| \( \pi(a|s) \) | policy — probability of action a given s |
