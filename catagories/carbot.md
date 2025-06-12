---
layout: category
category: carbot
title: Carbot
permalink: /categories/carbot/
---
<h1>{{ page.title }}</h1>
<p>Total posts in site: {{ site.posts | size }}</p>


<ul>
  {% for post in site.posts %}
    {% if post.categories contains page.category %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%Y-%m-%d" }}
      </li>
    {% endif %}
  {% endfor %}
</ul>
