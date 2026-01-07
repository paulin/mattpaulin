---
layout: page
title: AI Product Experiments
permalink: /ai-product-experiments/
redirect_from:
  - /ai-driven-products/
  - /categories/ideas/
---

Hands-on experiments exploring how AI, data, and autonomy translate into real product capability. These projects are exploratory by design—used to test assumptions, understand limits, and sharpen product judgment.

---

## Carbot — Autonomous RC Car

Data collection, training pipelines, and control-system experimentation for an autonomous RC car.

[View all Carbot posts →](/categories/carbot/)

### Recent Posts

{% assign carbot_count = 0 %}
{% for post in site.posts %}
  {% if post.categories contains 'carbot' %}
    {% assign carbot_count = carbot_count | plus: 1 %}
    {% if carbot_count <= 3 %}
      {% assign post_excerpt = post.excerpt | strip_html | strip %}
      {% if post_excerpt == '' or post_excerpt == nil %}
        {% assign post_content = post.content | strip_html | strip %}
        {% assign post_excerpt = post_content | truncatewords: 40 %}
      {% else %}
        {% assign post_excerpt = post_excerpt | truncatewords: 40 %}
      {% endif %}
      {% assign post_image = post.image | default: post.thumbnail %}
      {% if post.title == 'Carbot 7: ROV' and post_image == nil %}
        {% assign post_image = '/assets/images/Carbot7/bambulabs-ps1.png' %}
      {% endif %}
<div class="post-preview">
  <div class="post-content">
    {% if post_image %}
    <div class="post-image">
      <img src="{{ post_image }}" alt="{{ post.title }}" class="post-thumbnail">
    </div>
    {% endif %}
    <div class="post-text">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      {% if post.date %}
      <div class="post-meta">
        <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: "%B %-d, %Y" }}</time>
      </div>
      {% endif %}
      {% if post_excerpt %}
      <p class="post-excerpt">{{ post_excerpt }}</p>
      {% endif %}
      <a href="{{ post.url }}" class="read-more">Read more →</a>
    </div>
  </div>
</div>
    {% endif %}
  {% endif %}
{% endfor %}

---

## Data Science Learnings

Small analyses and modeling experiments focused on data quality, inference, and practical decision support.

[View all Data Science posts →](/categories/data/)

### Recent Posts

{% assign data_count = 0 %}
{% for post in site.posts %}
  {% if post.categories contains 'data' %}
    {% assign data_count = data_count | plus: 1 %}
    {% if data_count <= 3 %}
      {% assign post_excerpt = post.excerpt | strip_html | strip %}
      {% if post_excerpt == '' or post_excerpt == nil %}
        {% assign post_content = post.content | strip_html | strip %}
        {% assign post_excerpt = post_content | truncatewords: 40 %}
      {% else %}
        {% assign post_excerpt = post_excerpt | truncatewords: 40 %}
      {% endif %}
      {% assign post_image = post.image | default: post.thumbnail %}
      {% if post.title == 'Stevens Pass Drive Forecasting' and post_image == nil %}
        {% assign post_image = '/assets/images/drive_time_charts/drive_map.png' %}
      {% elsif post.title == 'Eventually Complete Digital Twin' and post_image == nil %}
        {% assign post_image = '/assets/images/digital_twin/digital_twin.png' %}
      {% endif %}
<div class="post-preview">
  <div class="post-content">
    {% if post_image %}
    <div class="post-image">
      <img src="{{ post_image }}" alt="{{ post.title }}" class="post-thumbnail">
    </div>
    {% endif %}
    <div class="post-text">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      {% if post.date %}
      <div class="post-meta">
        <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: "%B %-d, %Y" }}</time>
      </div>
      {% endif %}
      {% if post_excerpt %}
      <p class="post-excerpt">{{ post_excerpt }}</p>
      {% endif %}
      <a href="{{ post.url }}" class="read-more">Read more →</a>
    </div>
  </div>
</div>
    {% endif %}
  {% endif %}
{% endfor %}

---

## Vibe Coding Experiments

Rapid product experiments using AI-assisted development to test hypotheses and explore technical feasibility.

[View all Vibe Coding posts →](/categories/ideas/)

### Recent Posts

{% assign ideas_count = 0 %}
{% for post in site.posts %}
  {% if post.categories contains 'ideas' %}
    {% assign ideas_count = ideas_count | plus: 1 %}
    {% if ideas_count <= 3 %}
      {% assign post_excerpt = post.excerpt | strip_html | strip %}
      {% if post_excerpt == '' or post_excerpt == nil %}
        {% assign post_content = post.content | strip_html | strip %}
        {% assign post_excerpt = post_content | truncatewords: 40 %}
      {% else %}
        {% assign post_excerpt = post_excerpt | truncatewords: 40 %}
      {% endif %}
      {% assign post_image = post.image | default: post.thumbnail %}
      {% if post.title == 'Leading with Ideas' and post_image == nil %}
        {% assign post_image = '/assets/images/ideation/lightbulbs_around_a_table.png' %}
      {% endif %}
<div class="post-preview">
  <div class="post-content">
    {% if post_image %}
    <div class="post-image">
      <img src="{{ post_image }}" alt="{{ post.title }}" class="post-thumbnail">
    </div>
    {% endif %}
    <div class="post-text">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      {% if post.date %}
      <div class="post-meta">
        <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: "%B %-d, %Y" }}</time>
      </div>
      {% endif %}
      {% if post_excerpt %}
      <p class="post-excerpt">{{ post_excerpt }}</p>
      {% endif %}
      <a href="{{ post.url }}" class="read-more">Read more →</a>
    </div>
  </div>
</div>
    {% endif %}
  {% endif %}
{% endfor %}

<style>
.post-preview {
  margin-bottom: 30px;
  padding: 24px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.post-preview:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transform: translateY(-2px);
  border-color: #d0d0d0;
}

.post-content {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.post-image {
  flex-shrink: 0;
}

.post-thumbnail {
  width: 180px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.post-preview:hover .post-thumbnail {
  transform: scale(1.02);
}

.post-text {
  flex: 1;
  min-width: 0;
}

.post-text h3 {
  margin-top: 0;
  margin-bottom: 8px;
  color: #2c3e50;
  font-size: 1.4em;
  line-height: 1.3;
}

.post-text h3 a {
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.2s ease;
}

.post-text h3 a:hover {
  color: #1a252f;
}

.post-meta {
  margin-bottom: 12px;
  font-size: 0.9em;
  color: #7f8c8d;
}

.post-meta time {
  font-style: normal;
}

.post-excerpt {
  margin-bottom: 16px;
  color: #555;
  line-height: 1.6;
  font-size: 0.95em;
}

.read-more {
  display: inline-block;
  color: #2c3e50;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95em;
  padding: 8px 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
}

.read-more:hover {
  color: #1a252f;
  border-bottom-color: #2c3e50;
  padding-left: 4px;
}

@media (max-width: 768px) {
  .post-preview {
    padding: 20px;
  }
  
  .post-content {
    flex-direction: column;
    gap: 16px;
  }
  
  .post-thumbnail {
    width: 100%;
    height: 200px;
  }
  
  .post-text h3 {
    font-size: 1.2em;
  }
}
</style>
