---
layout: page
title: Ideas
permalink: /categories/ideas/
---

A collection of creative ideas, inventions, and fun concepts I've been exploring.

## Posts

{% for post in site.posts %}
  {% if post.categories contains 'ideas' %}
**{{ post.title }}**

{% if post.excerpt %}{{ post.excerpt | strip_html | truncatewords: 30 }}{% endif %}

[Read more →]({{ post.url }})

---

  {% endif %}
{% endfor %}
