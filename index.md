---
title: ホーム | 田中 敦喜のブログ
layout: base.njk
---

<!-- ヒーローセクション -->
<div class="hero-container">
  <div class="hero">
    <div class="hero-content">
      <h1 class="hero-title">クリエイティブな<br>開発の世界へようこそ</h1>
      <p class="hero-subtitle">技術、デザイン、そして日々の発見について書いています</p>
      <div class="hero-buttons">
        <a href="/blog/" class="btn btn-light">記事を読む</a>
        <a href="/about/" class="btn btn-outline">About</a>
      </div>
    </div>
    <div class="hero-image">
      <div class="hero-image-container">
        <img src="/images/hero-illustration.svg" alt="クリエイティブ開発イラスト" class="floating">
      </div>
    </div>
  </div>
  <div class="wave-divider">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
    </svg>
  </div>
</div>

<!-- フィーチャードセクション -->
<div class="featured-section">
  <div class="section-header">
    <h2 class="section-title">最新の記事</h2>
    <div class="section-line"></div>
  </div>
  
  <div class="featured-grid">
    {% for post in collections.post | reverse | limit(3) %}
    <div class="featured-card">
      <div class="card-image">
        {% if post.data.image %}
        <img src="{{ post.data.image }}" alt="{{ post.data.title }}">
        {% else %}
        <div class="card-image-placeholder">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
        </div>
        {% endif %}
      </div>
      <div class="card-body">
        <div class="card-date">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <time>{{ post.date }}</time>
        </div>
        
        <h3 class="card-title">
          <a href="{{ post.url }}">{{ post.data.title }}</a>
        </h3>
        
        <p class="card-text">{{ post.data.description or "この記事の説明はありません。" }}</p>
        
        <div class="card-tags">
          {% if post.data.tags %}
            {% for tag in post.data.tags %}
              {% if tag != "post" %}
              <span class="tag">{{ tag }}</span>
              {% endif %}
            {% endfor %}
          {% endif %}
        </div>
        
        <a href="{{ post.url }}" class="read-more">続きを読む &rarr;</a>
      </div>
    </div>
    {% endfor %}
  </div>
  
  <div class="center-button">
    <a href="/blog/" class="btn">すべての記事を見る</a>
  </div>
</div>

<!-- カテゴリーセクション -->
<div class="categories-section">
  <div class="wave-divider top-wave">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#f0f9ff"></path>
    </svg>
  </div>
  
  <div class="categories-content">
    <div class="section-header">
      <h2 class="section-title">カテゴリー</h2>
      <div class="section-line"></div>
    </div>
    
    <div class="categories-grid">
      <div class="category-card">
        <div class="category-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
        <h3 class="category-title">Web開発</h3>
        <p class="category-text">HTML、CSS、JavaScriptなどのWeb開発技術に関する記事</p>
        <a href="/tags/web開発/" class="category-link">記事を見る &rarr;</a>
      </div>
      
      <div class="category-card">
        <div class="category-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
            <path d="M2 2l7.586 7.586"></path>
            <circle cx="11" cy="11" r="2"></circle>
          </svg>
        </div>
        <h3 class="category-title">デザイン</h3>
        <p class="category-text">UIデザイン、グラフィックデザイン、デザイン思考について</p>
        <a href="/tags/デザイン/" class="category-link">記事を見る &rarr;</a>
      </div>
      
      <div class="category-card">
        <div class="category-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
        <h3 class="category-title">お役立ち情報</h3>
        <p class="category-text">開発者とデザイナーのためのヒントやツールの紹介</p>
        <a href="/tags/お役立ち/" class="category-link">記事を見る &rarr;</a>
      </div>
    </div>
  </div>
  
  <div class="wave-divider bottom-wave">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
    </svg>
  </div>
</div>

<!-- 自己紹介セクション -->
<div class="about-section">
  <div class="about-container">
    <div class="about-image">
      <img src="{{ author.avatar }}" alt="{{ author.name }}">
    </div>
    <div class="about-content">
      <h2>こんにちは、{{ author.name }}です</h2>
      <p>{{ author.bio }}</p>
      <div class="about-social">
        <a href="mailto:{{ author.email }}" class="social-icon" title="メール">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
        <a href="https://twitter.com/{{ author.twitter | replace('@', '') }}" class="social-icon" title="Twitter" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </a>
        <a href="https://{{ author.github }}" class="social-icon" title="GitHub" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </div>
      <a href="/about/" class="btn">もっと詳しく</a>
    </div>
  </div>
</div>

<script>
  // スクロールアニメーション
  document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.featured-card, .category-card, .about-container').forEach(el => {
      el.classList.add('animate-on-scroll');
      observer.observe(el);
    });
  });
</script>