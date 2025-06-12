---
layout: post
title:  "Carbot 1: Getting the body together"
date:   2023-02-23
categories: robotics carbot ai
---

### Backstory

I am very interested in machine vision. I always have been and when I ran across Adam the CEO of [Aim.Vision](https://aim.vision/) I was very inspired how he had been turning excavators into construction robots using tensor flow and other machine learning techniques.

Additionally, I'm a dad who likes to do things with his kids. My son has shown some proficiency in programming and engineering so it was time he and I did a hardware project together.


Thus [Carbot](https://github.com/cakeday-io/carbot) was born. The idea is to modify an RC Car to become a robot that can drive all the way around my block. The secondary goal was to get my son up to speed on several engineering skills in the process.

## Philosophy
I want anyone to build and repeat what we are doing here. So I will be publishing a github with all the 3D prints and a parts list if you want to buy the same stuff and try this at home. Think of it as an open source robot project.

# Status & The Plan
- [X] Build a simple version that we can control
- [X] Use 3D printing to make a shell
- [ ] Figure out how to run Tensor Flow on an old Android phone
- [ ] Train the phone to see the edge of sidewalks
- [ ] Run the car while getting advice from the phone
- [ ] Figure out how to connect the phone to the motors and servo
- [ ] Build in an automatic kill switch that we can run remotely
- [ ] Test Carbot by having it drive to a cone
- [ ] Test Carbot to stop before hitting something
- [ ] Test that Carbot can stay on a sidewalks
- [ ] Test that Carbot knows where to turn at the end of the blocks
- [ ] Final testing and driving all the way around


## Parts List
- [ ] [HyperGo Car](https://www.amazon.com/HYPER-GO-H16GT-Speedometer-Rechargeable/dp/B0BD1Z43MV)
- [ ] [GOQOTOMO GD02 200mW 5.8GHz 37CH FPV Video Transmitter with Dipole Brass Antenna](https://www.amazon.com/dp/B06Y47BXZN/)
- [ ] [5.8Ghz FPV Goggles, ARRIS VR-009 Video Headset](https://www.amazon.com/5-8Ghz-Goggles-Arris-VR-009-Headset/dp/B07DGB252B/)


# We printed a new body to put it all together
![](/assets/images/carbot/Carbot_freecad-2023-0.png){:height="80%" :width="60%"}

We started by measuring out all the parts using cardboard to prototype the different pieces.


![Then using a Prusa Printer we were able to produce the individual pieces.](/assets/images/carbot/PrusaPrinting.jpg ){:width="60%"}

Then using a Prusa Printer we were able to produce the individual pieces.

![The final vehicle looks like this. Note that that camera on the front is hooked to the drone racing headset.](/assets/images/carbot/CarBot_v1.jpg){:width="60%"}

The final vehicle looks like this. Note that that camera on the front is hooked to the drone racing headset.


## Lessons Learned So far
# FreeCad is awesome when used with a Prusa Printer
[https://www.freecad.org/](https://www.freecad.org/) is a fantastic 3D cad program which is extremely sophisticated. I think that there are probably better programs that are more intuitive. However, I have a drafting background and I really enjoyed the idea of building an engineering specific model. If I couple that with the [https://www.prusa3d.com/](Prusa Printer) and we have a pretty good system for creating custom parts.

This [video](https://www.youtube.com/watch?v=Odr5viqPwkc0) is what I used to figure out how to use FreeCad.
This [3D printing manual](/assets/images/carbot/basics-of-3d-printing.pdf) is what I used to get the printer setup.

# Our camera is taking too much power to be connected to the batteries on the car
My original plan was to use the circuit for the lights on the car to power to camera. We ended up building a custom cable but found that when we connected it, the power usage was still too high and the voltage would drop to 4.5 V which seemed to keep the camera from transmitting well. To solve this, we use a rubber band to strap a USB battery backup charger to the frame.

![](/assets/images/carbot/powersupply.jpg){:width="60%"}

## Conclusion
We have a car with a camera that can transmit. It seems to have about 1 block working distance as long as nothing is obstructing the view. The next step will be to figure out how to collect images from a drive around the block so we can use it to train up a Tensor Flow CNN.
