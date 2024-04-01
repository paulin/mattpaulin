---
layout: post
title: "Stevens Pass Drive Forecasting"
date: 2024-03-29
categories: analysis
---

![The Drive to Stevens Pass](/assets/images/drive_time_charts/drive_map.png)

I bought an Epic Pass like so many other people in Seattle. I have been renewing it for the last 3 years. Here in Washington, the only place you can use it is Steven’s Pass which is a fine resort but it has some very specific problems for getting there.
1. For one, it is 2 hours away from Seattle so it is quite the commitment to make a decision to drive there.
2. The second notable aspect is that they have limited parking in a few lots next to the resort and then in an overflow lot about 20 miles down the other side of the mountain.
3. If you don’t find parking at the upper lots you have to drive down the hill, park, then get a bus to take you back. This can add another 1-2 hours to your journey. Finally, there is a one-lane road for about half the journey. So if you go or leave at the same time as everyone else, you will run into significant traffic.

For this reason, I decided I wanted to build a very specific forecaster. I want it to tell me when I need to leave my house so that I can get parking at Stevens Pass given the day and time of day.

## How I collected the dataset

To start with, I needed to know how much time it would take to drive from Seattle to Stevens pass. As it turns out you can get a URL from Google with the start and end destinations built in.

The URL looks like this: [https://www.google.com/maps/dir/Seattle,+WA/Stevens+Pass,+Washington+98826/@47.7161422,-123.0288051,8z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x5490102c93e83355:0x102565466944d59a!2m2!1d-122.3328481!2d47.6061389!1m5!1m1!1s0x549af0c5541e0005:0xc22c0e63a6ffba92!2m2!1d-121.0859328!2d47.7462223!3e0?entry=ttu](https://www.google.com/maps/dir/Seattle,+WA/Stevens+Pass,+Washington+98826/@47.7161422,-123.0288051,8z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x5490102c93e83355:0x102565466944d59a!2m2!1d-122.3328481!2d47.6061389!1m5!1m1!1s0x549af0c5541e0005:0xc22c0e63a6ffba92!2m2!1d-121.0859328!2d47.7462223!3e0?entry=ttu)

If you put it into a script like this: [GitHub - Ministry of Product Forecaster](https://github.com/Ministry-of-Product/forecaster/blob/main/gcs-docker-forecaster/main.py)

You can run the script against Google Maps and get a distance back with a little parsing.

I then put this all into a Docker instance and posted it to CloudRun. With some configuration, I was able to get it to append the results into a csv file in Google Cloud Storage.

I pulled the file down and posted it [here](https://github.com/Ministry-of-Product/forecaster/blob/main/gcs-docker-forecaster/steventime.csv) in case you want to give it a try.

Here is my full repo: [GitHub - Forecaster Repo](https://github.com/Ministry-of-Product/forecaster)

## How much did the dataset cost?

![Costs of collecting data](/assets/images/drive_time_charts/costs.png)

This is my first experience using GCP and I wasn’t quite sure what I signed up for. As it turns out, it was pretty cheap to build this dataset. However, it is clear that it will grow over time. This is a good lesson for future projects where I am putting together a time series dataset. I need to make sure that I am not growing it too quickly.

As it turns out, storage was the most expensive part. Generally costing, maybe $0.25 a month to store the resulting file which is still under 1 meg.

## How did I do the forecast?
I used a Random Forest Regressor since the data involves both cyclic time-related features (like time of day and day of week) and potentially non-linear relationships between these features and the drive time. Generally, Random Forest can handle these complexities without needing the data to be linear and can also manage overfitting through its ensemble approach.

Another advantage of using Random Forest for this case is its interpretability in terms of feature importance, which can offer insights into how different times of day or days of the week affect drive times.

# Predicted Drive Times from Seattle to Stevens Ski Resort

Here are the predicted drive times for each day of the week:

![Predicted Drive Time on Monday](/assets/images/drive_time_charts/drive_time_monday.png)
![Predicted Drive Time on Tuesday](/assets/images/drive_time_charts/drive_time_tuesday.png)
![Predicted Drive Time on Wednesday](/assets/images/drive_time_charts/drive_time_wednesday.png)
![Predicted Drive Time on Thursday](/assets/images/drive_time_charts/drive_time_thursday.png)
![Predicted Drive Time on Friday](/assets/images/drive_time_charts/drive_time_friday.png)
![Predicted Drive Time on Saturday](/assets/images/drive_time_charts/drive_time_saturday.png)
![Predicted Drive Time on Sunday](/assets/images/drive_time_charts/drive_time_sunday.png)

# What would I do next time?
I had a lot of fun doing this analysis but I think I would do it differently in the future. 


### 1. Track the return times from Stevens
I think it would be very interesting to predict the best times to leave, in particular because you run right into the same problems where traffic increases at the same time. The return drive is netorious for being hard to predict.

### 2. Adding other types of data to the dataset
In particular I would really like to add a column to represent the weather in the region. My guess is that ice and snow increases the drive time due to safety. It could also be that the number of drivers increases with good snow conditions thus increasing drive times. My guess is that we would actually see the morning drive time increase in that time.

### 3. Collect the drive times to the overflow parking
This could be the most interesting dataset. If we added a trace to the amount of time from one Stevens parking lot to the other I bet we would start to see when the overflow lot starts to be used. This would be an excellent source to recognize when the resort was being used heavily.

### 4. Image analysis of the lines at Stevens
Stevens publishes webcam images of the lines. I have considered having a vision recognition system watch the lines and determine when the greatest usage is, then track that as another column to enrich the datase.

### 5. Use a SARIMAX model
When the dataset gets larger and more complex, capturing intricate time series patterns or seasonal trends over a long period might be lost on the Random Forest Regressor. I might consider models more specifically tailored to time series forecasting that can incorporate external regressors, such as SARIMAX (Seasonal AutoRegressive Integrated Moving Average with eXogenous regressors) or even LSTM (Long Short-Term Memory networks) for deep learning approaches.


# Conclusion
Overall I think this project was a lot of fun for just creating a dataset and seeing what I could do with it. It is clearly not rich enough to be useful beyond my on intution. Basically leave around 6:30 am on a weekend if you want to make sure you have a parking spot.
