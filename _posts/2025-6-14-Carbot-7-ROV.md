---
layout: post
title: "Carbot 7: ROV"
date: 2025-06-14
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

### I started using Cursor
This took a little while to get setup and understand.  For the Node Signaling server it was fairly easy since everything is pretty standardized.  For the Android project it was a little harder.  I first had to get the Android project running through Android Studio, then I just setup Cursor in the same folder.  I have to switch between these IDEs as I develop since Cursor isn't really built to push the build to the phone.  It does work though and I have been able to give the AI prompts to speed up the development.   I think this "Vibe" coding has been one of the biggest changes for Carbot.  I can make a lot more progress faster and not get stuck so quickly.  

### Chat GPT is still my coding buddy
I feel like I still go to chat.openai.com more than any other AI.  I have found that I do a lot of planning with it and understanding.  Although it had me go down a path with a Janus server for several weeks until I talked to the other AIs and the told me about Signaling. The Janus server was way too heavy and I got stuck doing builds with make and customizing the server.  It was a bit of a waste of time although it uses the same ([ICE protocol](https://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment)) that was later used in the signaling server.  


## What is next?
I'm pretty happy with the simplicity of the ROV setup.  I essentially log into GCP, start my signaling server, use a web browser to pull up the html console, then I connect the phone.  I'm able to see a live stream from the phone and use a mouse or "wasd" keys to control the car.  The obvious next step is to print a new car body so that I can put the phone on the car and let the car drive around independently.  I think my son will enjoy this part.  He can essentially drive it around remotely.

I'm also thinking that I want to try to use OpenCV to enhance the images for the CNN.  In previous versions I feel like the learning shows that it has gone well but when we turn on the autopilot it just doesn't seem to react very quickly.  Maybe if I show it where the edge of the sidewalk is then it might handle that better?  I'm not sure.

I think overlaying extra information on top of the stream will be helpful as well.  For instance, now that it has an onboard phone I have GPS and many other capabilities.  So I could overlay the compass information.  I'm not sure of the CNN will pick up on that and learn to turn at the right location but maybe it will.

In general I think I'm pretty close to having a solid development platform for more experimentation of what it takes to build an autonomous vehicle.  In the least the ROV style will be more fun for my son to use.  
