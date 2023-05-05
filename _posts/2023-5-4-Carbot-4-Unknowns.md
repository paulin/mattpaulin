---
layout: post
title:  "Carbot 4: Known Unknowns"
date:   2023-05-5
categories: Carbot
---

# Goal! To get ready for Summer
The real purpose of Carbot is to give me and my son something to work on over the summer. Once he is out of school I will have less time to figure things out. So for the next couple months I need to focus on getting as many unknowns turned into knowns.

In the last couple of weeks I figured out how to get TensorFlow on my phone and more of what that will mean. The real questions of the last sprint were

* Will I be able to get a camera feed from Carbot to the phone?
* Will I be able to run Tensor Flow on the phone?

The answer is...

### Will I be able to get a camera feed from Carbot to the phone?
No, not really. I spent a fair amount of time with my ChatGPT coding buddy asking about how to do this while exploring what other people have done. It looks like I would have to take the RCA output from the headset and then turn it into a digital signal, then import that into the phone. Frankly, it sounds terrible and fraught with issues.

So... in the spirit of "What is the simplest thing you can do that could possibly work?" I am instead going to buy a second headset, take it apart and build a box to position the screen in front of the phone. This seems so hacky that I really love this solution. For one thing, my son can really understand this part of the project. We can build it with cardboard and then after we know the shape and size we will build a 3d print of it.

What this also allows for is that we can write an app that doesn't need to be changed when the phone is put on the car. In that case, all I will need is a prism to redirect what is coming in from the front of the car to the phone. That means the plan for now is that I can have my son put the phone in the special box, and use that to drive the car through a custom app. The images we collect will then feed the ML model and be used to build the classifier. Once it proves itself to be able to classify correctly we can allow the app to drive while still keeping the phone from being on the car.

Once this is proven then we can finally mount the phone on the car and give it more control as it proves itself. Anyway, this is "done enough" for now.

### Will I be able to run Tensor Flow on the phone?
Yes! It's not that hard.
* Lots of [example apps](https://www.tensorflow.org/lite/examples/image_classification/overview)
* Here is a [catalog of models](https://tfhub.dev/s?deployment-format=lite)
* There is even a [free course](https://learn.udacity.com/courses/ud187)
* I pulled down this [Github Repo](https://github.com/tensorflow/examples/tree/master/courses/udacity_deep_learning)

It only took a little time to find some of these projects, get them to run in the Android IDE and then test them on my phone.


# Updated Status & The Plan
- [X] Build a simple version that we can control
- [X] Use 3D printing to make a shell
- [X] Figure out how to connect the phone to the motors and servo
- [X] Figure out how to run Tensor Flow on an old Android phone
- [ ] Train the phone to classify the directions to turn
- [ ] Build the camera box with the headset attached
- [ ] Run the car while getting advice from the phone
- [ ] Build in an automatic kill switch that we can run remotely
- [ ] Test Carbot by having it drive to a cone
- [ ] Test Carbot to stop before hitting something
- [ ] Test that Carbot can stay on a sidewalks
- [ ] Test that Carbot knows where to turn at the end of the blocks
- [ ] Final testing and driving all the way around

# Whats next?
Time to write a program to let us train the phone. Originally I thought I would want it to look for the edge of sidewalks. But I think that isn't the right way to think about this. What I want is an image classifier that will tell me if the image means I should turn left, right, or go straight. Thus the next step is to modify a classifier app to do just that. In the process we will need to build a training set of sidewalks and the right direction to turn in these cases.
