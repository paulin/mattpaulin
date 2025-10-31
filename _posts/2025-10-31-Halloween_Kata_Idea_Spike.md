---
layout: post
title: "Halloween Kata Idea Spike"
date: 2025-10-31
author: "Matt Paulin"
categories: [ideas, idea-spike]
---

## Halloween Kata: Turning Pinan Sandan into a Skeleton with TensorFlow

This is the third week of my “idea spike” series — short proofs of concept to explore new technologies and test ideas. For Halloween, I wanted to do something seasonal while also experimenting with TensorFlow and body movement detection. I decided to turn Sensei Tobey’s *Pinan Sandan* kata into a skeleton version.

---

### Background

I practice karate, and one of its core elements is learning *kata* — formalized patterns of movement and technique. These patterns are later explored through *bunkai*, where each movement is paired with a practical application. It’s a structured way to develop rhythm, coordination, and precision.

I’ve long been curious about how machine vision could help improve martial arts training. This seemed like a good opportunity to explore what that might look like.

You can see one of Sensei Tobey’s original *Pinan Sandan* videos here:  
<iframe width="560" height="315" src="https://www.youtube.com/embed/Lj4i_RIh5fs" title="Sensei Tobey's Pinal Sandan kata" frameborder="0" allowfullscreen></iframe>


---

### Capturing the Human Form

The first step was to capture the human skeleton from the video. I built a system that processes a YouTube video frame by frame and detects body joint positions using the Mediapipe 33-point pose model. Each frame’s joint data is stored in a large JSON file representing the full movement of the kata.

Here’s what the skeleton detection output looks like:  
<iframe width="560" height="315" src="https://www.youtube.com/embed/lHDwXPmoTR0" title="Skeletonized version of Tobey's Pinal Sandan kata" frameborder="0" allowfullscreen></iframe>


---

### Building the Skeleton Video

With the joint data in place, I wrote another script to draw a simple skeleton based on the detected coordinates. I then used `ffmpeg` to combine the frames into a continuous video sequence, effectively creating an animated skeleton performing *Pinan Sandan*. I added a background and carried over the original sound to complete the video.

The final result can be seen here:  
<iframe width="560" height="315" src="https://www.youtube.com/embed/W59V3P0nlc0" title="Decorated skeletonized version of Tobey's Pinal Sandan kata" frameborder="0" allowfullscreen></iframe>

---

### Observations

The approach works well for most videos as long as the person remains fully in frame. When arms or legs move out of the camera’s view, the system often loses track of those joints. You can see an example of that in this additional kata video:  
<iframe width="560" height="315" src="https://www.youtube.com/embed/rGyqW_BkYXo" title="Decorated skeletonized version of Tobey's Pinal Shodan kata" frameborder="0" allowfullscreen></iframe>


Beyond the Halloween experiment, I started thinking more seriously about how this could be applied to my own training. Karate requires precise timing and positioning, and having a tool to visualize and compare my movements to an instructor’s could be extremely useful. This project represents the first step toward that kind of system.

---

### Next Steps

For now, I’m pausing this idea spike, but the concept has a lot of potential. A future iteration could compare two sets of joint data — for example, an instructor’s and a student’s — and measure alignment accuracy in real time. It could evolve into a movement teaching system applicable beyond martial arts.

This small experiment combined a bit of seasonal fun with meaningful technical exploration, and it opened up some interesting possibilities for how machine vision can enhance physical skill learning.
