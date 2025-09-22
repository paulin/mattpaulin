---
layout: page
title: Carbot
permalink: /categories/carbot/
---

My robotics and AI projects, including the development of Carbot - an autonomous RC car project.

## Posts

{% for post in site.posts %}
  {% if post.categories contains 'carbot' %}
**{{ post.title }}**

{% if post.excerpt %}{{ post.excerpt | strip_html | truncatewords: 30 }}{% endif %}

[Read more →]({{ post.url }})

---

  {% endif %}
{% endfor %}
