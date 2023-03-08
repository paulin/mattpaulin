---
layout: post
title:  "Project Sunscreen"
date:   2023-02-09
categories: Climate Change
---
![1](/assets/images/projectsunscreen/space_umbrella.png){:width="80%" :style="display:block; margin-left:auto; margin-right:auto"}

# Project Suncreen: Another potential bad idea to solve Climate Change
So I have been thinking about what it would take to cool the Earth. Most of the ideas on this subject involved reducing Carbon. I totally agree with this and I think we have to be responsible for what we put in the atmosphere.  But I think we are going to have a really hard time changing the temperature this way. Essentially, we have to get all 7 billion of us to agree. That seems like the real problem. While we are working on reducing carbon emmissions with [Speed and Scale](https://speedandscale.com/), or [Project Drawdown](https://www.drawdown.org/), how about a plan B?

#### Plan B: What if we put a sun shield between the earth and the sun to reduce the amount of energy getting to the earth?

**BONUS**: If we can control dimming the light then we can turn it up if it gets too cold.

I will admit I don't think this will work because we simply do not know how to do this. We don't have the technology to move an astroid, build in space, create self replicating robots, or even build engines that can run in space providing this sort of thrust. It is a bit of a pie in the sky idea, almost literally, however I still want to explore what this would take.


# Starting point, how much energy do we need to change?
Lets start with how much energy the Earth is even absorbing.  Since it is essentially a circular shape being illuminated we can make a gross approximation by just taking it's surface area and multiplying by the solar constant.

* Radius of Earth = 6,378 km
* Visible Earth area = 6378 ^ 2 X pi = 127796483130631 square meters
* Solar Constant: 1.361 kilowatts per square meter (kW/m2) [Energy numbers from NASA](https://earthobservatory.nasa.gov/features/EnergyBalance/page2.php)

**Visible Earth Area X 1.361 = 1.739310135407893e+17 kW**

### How much energy should we block?

* [Earth has changed 1 degree Celcius from where it should be](https://climate.nasa.gov/vital-signs/global-temperature/) So I would assume it is the same amount to reduce to go down one degree Celcius.
* It takes [533,000,000 kJ](https://www.quora.com/Has-anyone-calculated-how-much-energy-is-required-to-raise-the-temperature-of-Earth-our-planet-by-one-degree) to warm the Earth 1 degree Celcius.

Essentially we need to know how many square meters we need to block to reduce 533 Million kilojoules.

Let's start by figuring out how many watts that needs to be for one day.

`46051200000000 = 533000000 * 24 * 60 * 60`

* [Earth absorbs](https://earthobservatory.nasa.gov/features/EnergyBalance) absorbs an average of about 240 watts of solar power per square meter (one watt is one joule of energy every second).

If we make a proportion of how much the earth absorbs from the solar constant we find out that the earth only absorbs


`earthEnergy = totalEnergy * absorbEarth/solarConstant`

 `blockArea = earthVisibleArea * wattChange/earthEnergy`


**The answer I get is 1,918,800,000,000 square meters or about 1,918,800 square km which is roughly the size of the [state of Washington](https://en.wikipedia.org/wiki/List_of_U.S._states_and_territories_by_area).**

![1](/assets/images/projectsunscreen/space_umbrella_2.png){:width="80%" :style="display:block; margin-left:auto; margin-right:auto"}

### Sanity check: Does this make sense?
Let's check if this makes any sense by just looking at what the temperature of the Earth is currently, and what it would be if the sun wasn't there.

* Temperature of Space = [-270.42 Celsius](https://www.scienceabc.com/nature/universe/what-is-the-temperature-of-space.html)
* Average temp on Earth = [13.9 degrees Celsius](https://www.space.com/17816-earth-temperature.html)

This means that it is 284.32 degrees of difference. If we assume that it takes 533,000,000 kJ to go up a degree then we end up back at 1.3093277184e+16 which isn't that far from the total energy that we calculated for Earth at the beginning 3.0671155951351532e+16.  So for this crude calculation, I think it is within the right range.

**Conclusion** We need to create a shadow about the size of Washington State for every degree Celcius we want to lower the temperature. This sort of makes sense if you look at a globe and see how big Washington is in comparison to the Earth. You can probably use 284 of them to block out all the light if you really wanted.

# How would you do this?
There are a bunch of ideas for reflecting light back into space from the atmosphere. From changing the chemistry of the upper atmosphere, to just orbiting enough stuff that this could block the light. And under the philosophy of *"What's the simplest thing that could possibly work?"* the simplest answer might just be to put enough stuff between us and the Sun to constantly have 200,000 square kilometers blocked at all times. That might be the easiest since we know how to put stuff into orbit and are constantly coming up with new ideas. [Like these guys who are building a giant cannon](https://greenlaunch.space/).

I like things cleaner and possible to undo if we cause too much of a mess. I mean it is entirely conceivable that we could want to turn the heat back up later. So we will need some way to open up the shades again later.

## Idea 1: I propose that we build 200,000 1 km X 1 km Umbrella ships that we can rotate at [Lagrange point 1](https://en.wikipedia.org/wiki/Lagrange_point)


> The L1 point lies on the line defined between the two large masses M1 and M2. It is the point where the gravitational attraction of M2 and that of M1 combine to produce an equilibrium. An object that orbits the Sun more closely than Earth would normally have a shorter orbital period than Earth, but that ignores the effect of Earth's own gravitational pull. If the object is directly between Earth and the Sun, then Earth's gravity counteracts some of the Sun's pull on the object, and therefore increases the orbital period of the object. The closer to Earth the object is, the greater this effect is. At the L1 point, the orbital period of the object becomes exactly equal to Earth's orbital period. L1 is about 1.5 million kilometers from Earth, or 0.01 au.

Just for context, this is about 1 square kilometer mapped over Times Square in New York City.

![1](/assets/images/projectsunscreen/UmbrellaShipSize.png){:width="80%"}

*Thanks Google Maps!*



# So how could this even work?

As it turns out astroids are constantly coming near us. In fact on 2029-04-13	[Apophis](https://en.wikipedia.org/wiki/99942_Apophis) should be about 38.0170 thousand km) give or take	±3.4 km. What if we could capture it and use it's material to build some sort of sunscreen. Just to emphasize how close it will come, the moon is [363,300 km](https://www.space.com/18145-how-far-is-the-moon.html) away so this is pretty close if we ever just to try and capture it.  It is 370 meters across and is composed of sand, iron, and nickel. Here is an excerpt from [Nasa](https://solarsystem.nasa.gov/asteroids-comets-and-meteors/asteroids/apophis/in-depth/).

![1](/assets/images/projectsunscreen/apophis.png){:width="80%"}

*Thanks [Nasa!](https://www.jpl.nasa.gov/asteroid-watch/eyes-on-asteroids)*

>"Apophis is classified as an S-type, or stony-type asteroid made up of silicate (or rocky) materials and a mixture of metallic nickel and iron. Radar images suggest it is elongated and possibly has two lobes, making it look something like a peanut. Much more will be learned about this asteroid's structure following its close flyby of Earth in 2029."

If you think of it as a sphere, `volume = (4/3) · π · r^3`, and figure out it's volume it is 212174790 cubic meters. If we somehow just spread this out over the entire 200,000 square kilometer area I see that we end up with a layer about 1.1 mm think.

### Problem 1: How do you capture an astroid?
Since it comes back every 7 years maybe we could put some engines on it and change it's orbit at the apoapsis? I don't really know but I am asking around.


### Problem 2: [Radiation Pressure](https://en.wikipedia.org/wiki/Radiation_pressure)
>Radiation pressure in μPa (μN/m2) : estimate for about 9 at L1

It should also be mentioned that the pressure of the light on this enormous structure would be about 9 newtons. So imagine a 9 kg weight. This isn't a lot for such a large structure but it will push it out of L1 and somehow we would need to keep it from moving around.


### Problem 3: What can you do with Nickel, Iron, and Silicon?
I'm not sure but this is where I will leave this thought experiment for now. The general idea is that we block sunlight from getting to the Earth, maybe by building big umbrella ships, maybe by [grinding up an astroid and spraying it all over L1](https://journals.plos.org/climate/article?id=10.1371/journal.pclm.0000133).


# What happens next?
I need your help. Most likely you are a scientist, physicist or engineer. Where am I wrong? What could we do that is smarter? I'm happy to be the steward of Project Sunscreen and update this idea with other ideas as we use crowdsourcing to fill this idea out into a plan.

You can email me, find me on LinkedIn, or Twitter (I don't look there very often)
