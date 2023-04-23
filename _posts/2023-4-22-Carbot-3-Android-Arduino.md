---
layout: post
title:  "Carbot 3: Android Arduino"
date:   2023-04-22
categories: Carbot
---

# Success! I have created an Android app that controls the car
That was the whole goal of this step. Can I create an Android app so my phone can run the car? The answer is yes and it was really interesting. Here is what I came up with.

![1](/assets/images/carbot/Carbot_Controller.png){:width="80%" :style="display:block; margin-left:auto; margin-right:auto"}

I am using an [Arduino Rev 2](https://store.arduino.cc/products/arduino-uno-wifi-rev2) to control the servo onboard the Carbot car. I am then connecting to the Arduino via Bluetooth LE from my Android phone. The idea is to have the phone be the brains and the Arduino handle all the hardware. At first it will just be the steering but then we will use a motor driver to control forwards and backwards. The phone will also be powerful enough to run the vision model and to learn to recognize when to turn and how to drive.

In case you are curious this is what it looks like all together. The Arduino is really just connected via 3 wires. Most of this work was in software.
![1](/assets/images/carbot/CarbotWtihArduino.jpg){:width="80%" :style="display:block; margin-left:auto; margin-right:auto"}

# Lessons Learned
### Hardware is fun
Years ago I built robots for Kansas State University. The switches and electronics are essentially the same. The motors have improved since then as well as the battery tech. However what I realized is just how nice the programmable electronics have become.

Originally I used a [PIC processor](https://www.microchip.com/en-us/products/microcontrollers-and-microprocessors/8-bit-mcus/pic-mcus) and some [Motorola HC11 chips](https://en.wikipedia.org/wiki/Motorola_68HC11) to create a robot. They worked well enough. You had to keep moving the chips back and forth between a UV bed that would used to erase the program on the chip. It was really old school and you had to have a few chips to switch between.

These more modern processors are fantastic and were so easy to get started with. In fact we just got the basic kit and started working through the lessons.


### Arduino is easier than I thought
I had assumed that the Arduino portion would be the hard part. It turns out that it is very approachable. It has it's own [IDE](https://www.arduino.cc/en/software)! They really made it fun to put together a simple program with the controller.

### Programming Android is hard
I stopped programming Android, 5ish years ago.  I had thought that getting back into it would have been easy. It turns out that it is very different.
- New language: Kotlin [Great Tutorials](https://developer.android.com/kotlin/campaign/learn)
- [Permission](https://developer.android.com/guide/topics/connectivity/bluetooth/permissions) are more complicated

Here are the resources that helped
- Android's [documentation](https://developer.android.com/guide/topics/connectivity/bluetooth/transfer-ble-data)
- Arduino's [documentation](https://reference.arduino.cc/reference/en/libraries/arduinoble/)
- Martijn Van Welie wrote [Part 1](https://medium.com/@martijn.van.welie/making-android-ble-work-part-1-a736dcd53b02) and [Part 2](https://medium.com/@martijn.van.welie/making-android-ble-work-part-2-47a3cdaade07) explaining how BLE works.
- Alexander Lavrushko's [BLEProof Project](https://github.com/alexanderlavrushko/BLEProof-collection). I actually found this to be a really good reference project to use when setting up mine.
- PunchThrough posted [this project](https://punchthrough.com/android-ble-guide/). It is a little older and I had a bit of trouble migrating it. Lots has changed in terms of permissions and the manifest.

### Android IDE is fantastic
- Wifi Paring is really cool
- I love the copy paste function that turns Java code into kotlin
- I love how well everything is integrated; build tools, debugger, lint
- The UI/UX builder is really nice compared to how I use to have to do everything by hand

### ChatGPT is my coding buddy
At one point I decided to try out ChatGPT to help work through some of the issues. It was so helpful. I can't really tell it to write the whole program but what it could do is help me sort out a couple key problems. It was a welcome replacement to reading all the stackoverflow articles and sorting through when they were written. I simply could ask it how to do something and it seemed to know the modern way to do it. Of course you have to actually verify it but it was a very helpful coding friend.

# Whats next?

My ultimate vision is to let my son drive the car using the phone. This will then collect the images and his actions and be used for a supervised learning model so that Carbot starts to anticipate what the right movement will be. I would love to overlay its answer on top of the phone controller so that we can see what Carbot is thinking while he is driving. When it seems like they are thinking the same way, we flip a switch and let it go to autopilot.

In order to make this specialized controller I will need to build a custom Android widget. So that will be one task.

HOWEVER! What I'm really concerned about are these questions.
* Will I be able to get a camera feed from Carbot to the phone?
* Will I be able to run Tensor Flow on the phone?
