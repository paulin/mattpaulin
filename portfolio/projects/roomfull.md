---
layout: page

carousels:
  - images:
    - image: /assets/images/portfolio/roomfull/Roomfull1.png
    - image: /assets/images/portfolio/roomfull/Roomfull2.png
    - image: /assets/images/portfolio/roomfull/Roomfull3.png
    - image: /assets/images/portfolio/roomfull/Roomfull4.png
    - image: /assets/images/portfolio/roomfull/Roomfull5.png
---
{% comment %}
This comment prevents the first line from showing up in the navbar.
{% endcomment %}
[![RoomfullMain](/assets/images/portfolio/roomfull/RoomFullMain2.png "Video Walkthrough of Roomfull")](https://www.youtube.com/watch?v=jJtQKIXVGNU)
[View it on YouTube](https://www.youtube.com/watch?v=jJtQKIXVGNU)


# Roomfull is an app for musicians
Roomfull connects entertainers and clients to create amazing events at their houses. The musical artist Tim Bluhm had been using facebook and instagram to perform shows at client’s houses as a way to fill in the gaps on tours. This allowed him to make the most of tours and to connect with his audience in a more personal setting.

In the process of creating this unique experience, he found that it could be profitable but it required a lot of time to communicate and manage the billing aspects for clients. Tim wanted to create Roomfull as a way to turn his business process into a scalable model that all artists could use.

{% include carousel.html height="80" unit="%" duration="7" number="1" %}


# Action: Turning an idea into a real product
I worked closely with Tim to capture the process and turn it into a scalable platform for any artist to repeat the process that Tim had discovered. The process started with walking through the user stories and listening to what the problems were. Then my team built a simple prototype to show the initial screens in action. For this situation we wrote the prototype in typescript using the [Ionic platform](https://ionicframework.com/) so that we could generate both an iOS and Android application.

Tim was able to run the application on his phone and get a sense of what would work and wouldn’t work to fit his problem. This is when Tim realized that the biggest problem for him was collecting money from the clients. It was very difficult for his clients to collect money from all of the people coming to the shows and typically Tim was left underpaid and in the awkward position of asking people at the shows for money.

I worked closely with Tim to design a more scalable business process that would focus on allowing the clients to sell tickets for the shows. A more complete version of the software was written to illustrate the business process and it was tested with several other artist to ensure that it would work for their use cases as well.

Finally the server was written in Node.js and connected to Stripe to process credit card payments. The server was finally ready to launch so that Tim could start collecting payments for his shows


# Results: Roomfull was launched!
Roomfull was a collaborative journey between a development team and a musical artist. I facilitated this journey by first forming the team and then using product development techniques, like user stories and rapid iterations, to keep the ideas flowing between Tim and the development team. Along the way I did the product design, user testing, budgeting, testing, and even wrote some of the software.

The resulting system allows Tim to attract new customers and to organize the billing in a much clearer way. It would scale to allow other artists to use the system as well. Tim was now empowered to scale his business by focusing on his art and removing the tedium of billing.
