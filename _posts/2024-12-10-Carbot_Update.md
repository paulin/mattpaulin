---
layout: post
title: "Carbot Progress: From Idea to Prototype"
date: 2024-12-10
categories: robotics carbot ai
---

![Finished Carbot](/assets/images/carbot-2024/carbot-full.png)

In the last six months, I’ve made considerable progress on Carbot. It is now ready for testing and iteration. There were several key factors that contributed to this success, which I’ll discuss before explaining how it works.

## Key Factors Behind Carbot’s Development

### ChatGPT: My Coding Partner
Having written software for 30 years, I’ve learned that focus is critical. ChatGPT has been invaluable in helping me stay focused by acting as a conversational partner. It’s been particularly helpful when I’ve encountered roadblocks like bugs or deprecated libraries. Additionally, ChatGPT assisted with high-level planning. For example, I initially planned to move all image processing into Google Cloud Storage. ChatGPT pointed me toward Firebase as a simpler and more efficient solution. Within 30 minutes, I had a working prototype for file transfer and processing—a task that could have taken months otherwise.

### Learning from Donkey Car
I experimented with Donkey Car, an RC car project that uses Raspberry Pi for autonomous driving. While the experience was frustrating (especially getting the camera to work reliably), it provided valuable lessons. For example:
- I learned the importance of using an RC car with a built-in Electronic Speed Controller (ESC).
- I decided against using Raspberry Pi due to its complexity and opted for an Android phone, which is powerful and familiar to me.

### Android: The Brain of Carbot
Android phones are powerful computers that I already know how to program in Java/Kotlin. They’re perfect for running TensorFlow Lite to build the autopilot. With a $10/month Google Fi data plan, I can remotely access the device. Plus, I regularly upgrade my phones, so older devices can be repurposed for Carbot.

---

## How Carbot Works

### The Pipeline
Carbot operates in two modes: **Data Collection** and **Autopilot**.

1. **Data Collection**:  
   The car captures images from its forward camera and records control data (e.g., steering, throttle) in a JSON file. These files are uploaded to Firebase for processing.

2. **Processing**:  
   The uploaded data is analyzed in Vertex AI, Google’s machine learning platform. I use this to create TensorFlow Lite models, which are downloaded back to the car as “brains.”

3. **Autopilot**:  
   Once the TensorFlow Lite model is installed, the car can run in autopilot mode. The goal is for the car to autonomously navigate my neighborhood.

### Workflow Summary:
1. Drive the car and collect data.
2. Upload the data to Firebase for processing.
3. Train the model in Vertex AI and download it as a “brain.”
4. Test the autopilot mode and iterate.

---
![Pinout of Cable](/assets/images/carbot-2024/pinout.png)
![Complete Cable](/assets/images/carbot-2024/cable.png)
## Electronics: Simple and Effective
I’m particularly proud of the simplicity of Carbot’s electronics. The setup uses:
- An **Arduino UNO** as the controller to manage the servo and motor.
- A specialized wiring harness connecting the components.
- The car’s power supply to power the Arduino BLE, eliminating the need for a separate power source.

![Arduino up close](/assets/images/carbot-2024/arduino-close1.png)
![Arduino up close](/assets/images/carbot-2024/arduino-close2.png)
### Arduino Code
The Arduino code listens for Bluetooth commands to control the car's steering and throttle. By isolating expensive components (like the phone) from high-power batteries, the system remains safe and cost-effective. The Arduino also enforces a governed speed to prevent the car from exceeding safe limits.

### RC Car
I’m using the WLtoys 144010 RC Car, which can reach speeds of 40 MPH. While the car has this capability, I’ve configured the Arduino to limit the top speed until the system is more reliable.

---
![Arduino up close](/assets/images/carbot-2024/android-screenshot.png)
## The Android App
The Android phone serves as the brain of Carbot. It’s placed in a protective shell with the camera exposed, possibly using a periscope or prism for better visibility.

### App Features:
- **Camera View**: Shows what the car sees.
- **Controls**: Bluetooth connection, driving controls, and functional keys:
  - **Stop**: Emergency stop.
  - **Record**: Start recording images and control data.
  - **Upload**: Send data to Firebase.
  - **Brain**: Download the TensorFlow Lite model.
  - **Pilot On/Off**: Toggle autopilot mode.

---

## Camera Setup
Currently, the camera setup is a quick-and-dirty solution. I used cardboard to mount components from a drone headset in front of the phone’s camera. This setup ensures the phone captures what the car sees, though it’s a temporary solution.
![Viewer Looking Down](/assets/images/carbot-2024/viewer1.png)
![Viewer from the front](/assets/images/carbot-2024/viewer2.png)
![Viewer with phone](/assets/images/carbot-2024/viewer3.png)

---

## Parts List
To replicate Carbot, you’ll need:
1. **WLtoys 144010 RC Car**  
   [Buy on Amazon](https://www.amazon.com/GoolRC-WLtoys-144010-Car-Brushless/dp/B09XMM4PT5)
2. **Arduino UNO with Bluetooth**  
   [Buy from Arduino Store](https://store-usa.arduino.cc/collections/boards/products/arduino-uno-wifi-rev2)
3. **Donkey Car Partial Kit**  
   Used for the frame, though I plan to design my own.

You’ll also need Firebase and Vertex AI accounts for data processing and model training.

---

## What’s Next?
The fun part begins: testing!  
- **Step 1**: Drive the car in a controlled environment to gather data.  
- **Step 2**: Train the autopilot model.  
- **Step 3**: Test progressively harder tasks until the car can navigate autonomously.  

Ultimately, I aim to create a fully autonomous vehicle using an onboard Android phone for GPS, maps, and more. Stay tuned!
