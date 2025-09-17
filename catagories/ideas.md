---
layout: page
title: Ideas
permalink: /categories/ideas/
---

# Ideas

A collection of creative ideas, inventions, and fun concepts I've been exploring.

## Posts

{% for post in site.posts %}
  {% if post.categories contains 'ideas' %}
**{{ post.title }}** - {{ post.date | date: "%B %d, %Y" }}

{% if post.excerpt %}{{ post.excerpt | strip_html | truncatewords: 30 }}{% endif %}

[Read more →]({{ post.url }})

---

  {% endif %}
{% endfor %}
