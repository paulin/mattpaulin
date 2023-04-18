---
layout: post
title:  "Carbot 3: Android Arduino"
date:   2023-04-03
categories: Carbot
---

### Hardware is fun
Years ago I built robots for Kansas State University. The switches and electronics are essentially the same. The motors have improved since then as well as the battery tech. However what I realized is just how nice the programmable electronics have become.

Originally I used a [PIC processor](https://www.microchip.com/en-us/products/microcontrollers-and-microprocessors/8-bit-mcus/pic-mcus) and some [Motorola HC11 chips](https://en.wikipedia.org/wiki/Motorola_68HC11) to create a robot. They worked well enough. You had to keep moving the chips back and forth between  


{% include youtube.html youtube_id="I9dff_85_28" %}

### Regarding Radu
He is incredible at typing while teaching at the same time. Many times I had to pause the video to catch up or debug my code. So don't get intimidated, it feels like he could have written this in his sleep.


### The Code
If you just want my code, you can grab it from [my github repo](https://github.com/paulin/coding-with-radu). Its pretty easy to run, just download the code then open index.html in a browser and it should start right up.


### Observations
What Radu is doing isn't exactly the way I want to build Carbot. Carbot will have more than 5 distance sensors, in fact I want it to be able to do everything from a simple vision sensor. I also don't expect the car to learn how to get around the block on it's own. My real plan is to build an android app that will display what the onboard camera is seeing, then to control the car from the app. I will then have my son drive the car while recording the inputs and video. We will use this information as the training set into a TensorFlow model.  The resulting network will be a sort of autopilot that we can turn on from the app and the car should just drive itself...  Should....
