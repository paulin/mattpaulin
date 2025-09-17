---
layout: page
title: Product Playbook
permalink: /categories/product_management/
---

# Product Playbook

My thoughts and experiences on product management, OKRs, and building successful products.

## Posts

{% for post in site.posts %}
  {% if post.categories contains 'product-management' %}
**{{ post.title }}** - {{ post.date | date: "%B %d, %Y" }}

{% if post.excerpt %}{{ post.excerpt | strip_html | truncatewords: 30 }}{% endif %}

[Read more →]({{ post.url }})

---

  {% endif %}
{% endfor %}
