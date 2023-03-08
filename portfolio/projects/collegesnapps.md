---
layout: page
---
{% comment %}
This comment prevents the first line from showing up in the navbar.
{% endcomment %}

![Main Screen](/assets/images/portfolio/collegesnapps/CollegeSnapps Dashboard 1.png){:width="100%"}

# Context: CollegeSnapps was designed to help students "Get to and through college."
Don Frazer and Matt Drake were both educators who had a dream to help underprivileged students get into college. They had noticed a huge problem which could be easily solved. As students work their way through high school, but they were not aware of deadlines that could critically affect their chance of getting a higher education.  For example, if they forget to sign up for the ACT by a certain date then this could cascade into missing college submission deadlines, which could then have them missing the first year of college. For some of these students, they would be the first in their family to ever go to college. If they missed that first deadline then it was very unlikely that they would ever go at all.


CollegeSnapps was a mobile app that could communicate in a way that the students relate to. It looked like a chat app but it connected the students to an automated script of tasks they needed to be successful. If the student ran into a problem, a real counselor would be able to step in and help get the student back on track.

# Action: Going from 0 to 1
I started by capturing the need for this solution and to produce it into a mobile application. When Don Fraser and Matt Drake first approached me, they had the problem well understood. But they did not know how to work with the technology to form the idea. I started by listening to them and turning their needs into a 2 page sheet of user stories that we then prioritized together. This helped them work through conversations of priority and to decide on what features needed to be created first.


I then worked with my team to think through how to architect the front and backend of the application. Our designer used the user stories to build out some wireframes which helped illustrate how a student would use the application. Next we did user research with students and many itereated over the design to find the best way to communicate with the students. The results from the exercises was an application that was a progress tracker that had scripted sets of tasks for communicating with a counselor.

![Screen2](/assets/images/portfolio/collegesnapps/CollegeSnapps2.png){:width="40%"}
![Screen1](/assets/images/portfolio/collegesnapps/CollegeSnapps1.png){:width="40%"}


![Screen3](/assets/images/portfolio/collegesnapps/CollegeSnapps3.png){:width="40%"}
![Screen4](/assets/images/portfolio/collegesnapps/CollegeSnapps4.png){:width="40%"}


Our next step was to look at the problem from the counselor's perspective. The counselors had to manage hundreds of students. CollegeSnapps could solve this by making it easier to track and automate many of the flows for the different students. The counselors would log in through a website and build scripts that all of the students could follow.


After iterating many times with the counselors and students we were ready to turn this vision into a real application. I build a backlog of the tasks and started to design the sprints.  We wanted to keep the budget low so we had to focus on only the most essential components first. For that we started with the Android application building out the screens that were designed and tested with the students earlier. After the Android application was running on a phone we were able to stub out the network calls that it would need to retrieve data and submit information. This set of calls became the API that the Android application would call to interact with a server.  Next we used Python and Django to create the API and connected the Android app. This required us to create our database fields and to setup the Postgres database. The final step was to use the counselor dashboard designs to create the screens that the Counselor could create. The resulting application looked simple but had many features all designed to keep students on track for college. For example, there was a way to reach out to the counselor if the student was lost in the process and needed to schedule a time to talk about it.


# Iterate: Build, Measure, Learn
Once the initial application was completed we could test it with students. We created the first decision tree of messages and started working with students. We quickly that notification were key. Students were likely to forget that something important was requiring their attention. For this we added a notification system that could essentially "nag" the students so they didn't miss key deadlines. All of this was done by adding new tasks to the sprint and estimating it with the development team.


# Results: CollegeSnapps goes to [SXSW edu](https://www.sxswedu.com/)
With the application completed, the CollegeSnapps team had the privilege of presenting the application to educators at SXSWEdu. We were a unique blend of technology and educators and made it into the finalist round next to much better funded startups.


What made our application stand out was that the product was designed for simplicity and to meet students in a way that they naturally communicate. Coupling this with the passion and real world problems that Don Fraser and Matt Drake brought we were able to attract attention from many education groups and philanthropists in the audience.
