---
layout: page
title: Data Science
permalink: /categories/data/
---

My Data Science experiments.

## Posts

{% for post in site.posts %}
  {% if post.categories contains 'data' %}
<div class="post-preview">
  <div class="post-content">
    {% if post.title == 'Stevens Pass Drive Forecasting' %}
    <div class="post-image">
      <img src="/assets/images/drive_time_charts/drive_map.png" alt="{{ post.title }}" class="post-thumbnail">
    </div>
    {% elsif post.title == 'Eventually Complete Digital Twin' %}
    <div class="post-image">
      <img src="/assets/images/digital_twin/digital_twin.png" alt="{{ post.title }}" class="post-thumbnail">
    </div>
    {% endif %}
    <div class="post-text">
      <h3>{{ post.title }}</h3>
      {% if post.excerpt %}
      <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
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
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fafafa;
}

.post-content {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.post-image {
  flex-shrink: 0;
}

.post-thumbnail {
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.post-text {
  flex: 1;
}

.post-text h3 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #2c3e50;
}

.post-text p {
  margin-bottom: 15px;
  color: #666;
  line-height: 1.5;
}

.read-more {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease;
}

.read-more:hover {
  border-bottom-color: #2c3e50;
}

@media (max-width: 768px) {
  .post-content {
    flex-direction: column;
  }
  
  .post-thumbnail {
    width: 100%;
    height: 200px;
  }
}
</style>
