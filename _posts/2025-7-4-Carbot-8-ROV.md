---
layout: post
title: "Carbot 8: ROV Console"
date: 2025-05-14
author: "Matt Paulin"
categories: robotics carbot
---

Carbot continues to grow.  Now I have a full ROV mode available. It's rather amusing because it really is an Android phone on top of a remote control car.  The phone talks to an Aduino via BLE to control the servo and the motors.  However I now have a console to monitor the device system and can control it to drive around a house or a yard.  The point was to use the cell network to allow this to run anywhere.  Below are the details.

# The two modes of Carbot
This time I wanted to make sure I could either run it in ROV mode or in teathered mode.  Teathered mode is what I had built up to this point. In this case I carry the phone attached to the viewer and then the Android app is connecting to the car via bluetooth.  This has been good but it has also been limiting.  So I came up with ROV Mode.  In this case the phone is on the car and I can run it from a desktop.



This is what it looks like on the car.
![Carbot ROV Mode](/assets/images/Carbot8/carbot_phone.png)  

This is what the Android app looks like
![Teathered View](/assets/images/Carbot8/teatheredview.jpg)  

This is what the desktop console currently looks like
![Desktop Console](/assets/images/Carbot8/desktopconsole.png)  

## Bonus: I played with OpenCV
I started down a path to try and improve the abilities of the CNN to learn by first preprocessing the image with OpenCV.  OpenCV is a fantastic set of libraries that let you manipulate the image.  In my case, I just tried some false colors and edge detection.  It was somewhat helpful but I think I will come back to this side adventure. I think the real problem is that I am just training it wrong.

# What is next?
I think the autopilot is terrible. This is probably the biggest issue.  I typically gather about 5 minutes of training time and then run the model.  It doesn't work very well and for behavior cloning I feel like I am just missing the fundamentals.  So I'm going to go and work on just the learning part using a Unity simulator.  
