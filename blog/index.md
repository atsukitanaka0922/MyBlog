---
title: ブログ記事一覧 | マイブログ
layout: base.njk
---

<div class="content">
  <h1 style="margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color);">ブログ記事一覧</h1>
  
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    {% for post in collections.post | reverse %}
    <article class="card">
      <div class="card-body">
        <div class="card-date">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <time>{{ post.date }}</time>
        </div>
        
        <h2 class="card-title">
          <a href="{{ post.url }}">{{ post.data.title }}</a>
        </h2>
        
        <p class="card-text">{{ post.data.description or "この記事の説明はありません。" }}</p>
        
        <div class="card-footer">
          <a href="{{ post.url }}">続きを読む &rarr;</a>
          
          {% if post.data.tags %}
          <div class="tags">
            {% for tag in post.data.tags %}
            {% if tag != "post" %}
            <span class="tag">{{ tag }}</span>
            {% endif %}
            {% endfor %}
          </div>
          {% endif %}
        </div>
      </div>
    </article>
    {% endfor %}
  </div>
</div>