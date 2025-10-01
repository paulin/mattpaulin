---
layout: page
title: Data Science
permalink: /categories/data/
---

My Data Science experiments.

## Posts

{% for post in site.posts %}
  {% if post.categories contains 'data' %}
**{{ post.title }}**

{% if post.excerpt %}{{ post.excerpt | strip_html | truncatewords: 30 }}{% endif %}

[Read more →]({{ post.url }})

---

  {% endif %}
{% endfor %}
