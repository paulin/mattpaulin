---
layout: page
title: Product Experiments
permalink: /categories/ideas/
---

Product experiments and exploratory prototypes.

This section contains short, self-directed experiments where I test product hypotheses, explore technical feasibility, and extract learnings. These are not production case studies — they are deliberate probes used to sharpen judgment around what to build, what to ignore, and why.

---

## Posts

{% for post in site.posts %}
  {% if post.categories contains 'ideas' %}
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
