---
layout: post
title: "Carbot 7: ROV"
date: 2025-05-14
author: "Matt Paulin"
categories: robotics carbot
---

For the last several months I have started down a different path with Carbot. I'm working out what it will take to make it into an Remotely Operated Vehicle (ROV). The reason for this is pretty straight forward, In my older version of Carbot I had to follow the car while holding the phone.  I did this to collect images paired with the controls being sent to the phone.  In this new model I can do the same thing remotely to build up a trace that I can then process into a TensorFlow Lite file to run back on the phone.  Essentially I'm working on piloting the car remotely and then adding autopilot features on top of the remote piloting.

## What has changed?

### Bambu Labs PS1
![Bambu Labs PS1](/assets/images/Carbot7/bambulabs-ps1.png)  
Since the last time. Several new tools have been added.  For one I now have a Bambu Labs PS1 which is a fantastic printer.  I then used ([Shap3D](https://www.shapr3d.com/)) to produce a new viewer for the tethered mode.  Previously I had made the viewer out of cardboard and it looked rather silly.


![New Viewer](/assets/images/Carbot7/newviewer.jpg)  
The new one looks a little better. It is really just a box that positions the screen from the drone camera in front of the Android phone camera so I could collect images. Totally silly way to solve a problem but it did work.

### WebRTS Signal server for sending messages to the car
It took a while to sort this out but what I have ended up with is a Node Signaling Server on this ([repository](https://github.com/Carbot-Dev/carbot2-signalling-server)).

I am running it on Google Cloud Platform.  In it is an html file that you can open in your browser to use as a control panel.

### New Carbot 2 Project for Android
I started this ([repository](https://github.com/Carbot-Dev/carbot-android-2)) as the next Carbot Android codebase.  I wanted to just leave the old one in a state of working condition if I needed it as a reference.  Yeah, I know, Git can do this for me but for some reason this just felt like such a big change in direction I wanted to leave what I had working alone.  


## What is next?
