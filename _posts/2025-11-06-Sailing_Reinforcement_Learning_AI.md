---
layout: post
title: "Idea Spike 4: Saling with Reinforcement Learning"
date: 2025-10-31
author: "Matt Paulin"
categories: [ideas, idea-spike]
---

# Marina Docking RL Simulator

A reinforcement learning environment for training autonomous agents to navigate a sailboat out of a narrow marina slip under realistic physics including wind, prop-walk, and dock line dynamics.

---

### Reference Defintions
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
