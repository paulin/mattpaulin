---
layout: page
carousels:
  - images:
    - image: /assets/images/portfolio/QuadStreaker/friends.jpg
    - image: /assets/images/portfolio/QuadStreaker/lifeboard5-2.jpg
    - image: /assets/images/portfolio/QuadStreaker/quadstreaker-lifeboard-7c.jpg
    - image: /assets/images/portfolio/QuadStreaker/your-friends.jpg
---
{% comment %}
This comment prevents the first line from showing up in the navbar.
{% endcomment %}


{% include carousel.html height="120" unit="%" duration="7" number="1" %}

# Context: QuadStreaker is a game that gets you to travel
I was approached with a project, the idea was to turn the entire planet into a series of "Quads" which were 4 meters by 4 meters in size. The idea is that as you walked around, you got more "Quads", these could then unlock to show what neighborhoods, cities, states, and countries you had been too. Prizes could be found in different "Quads" providing you bonuses.

My goal was to produce this new game so that the visionary could test it on different groups of people and to build a brand from the game.

# Action: Top Down and Bottom Up
This is a very technical game. We had to start by building a database full of Quads that would be geographically referenced as the players moved around. To do this I had the development team first agree on an initial API that the mobile devices would use to get quads as well as to check off quads. They then created scripts that could generate the quads based on parameters for how to arrange the quads. They realized quickly that they would have to figure out how to assign quads to particular neighborhood based on the latitude and longitude of the center of the quad. This was the only way to figure out which side of a border the quad would be on.

In tandem I worked with our designer to generate screens and work with the visionary to make sure we were following his brand ideas and wording. As the screens were developed we mapped out what the implications were on the API to the server.

The server team continued to figure out how to create a performant server while also building tests that could simulate what hundreds of users would do when they connected with the API.


# Iterate: Build, Measure, Learn
I worked with my team to make sure that we were able to produce a very simple version in the first 2 weeks. This helped vet that it was technically possible to accomplish these tasks. We reduced the scope until it could be built. All the first version showed was that quads were being checked off as we walked around.

The following week we started to figure out how to project the quads onto a custom map layer that could show the actual game.


# Results: The prototype was finished
In 2 months we created the initial version of the application and the client was able to use it to walk around. Because of this he was able to get more funding and our team could continue to build out the product.
