---
layout: archive-post
title: Domestic issues involving spouses, children, or other family membersDomestic issues involving spouses, children,
---

{% include header.html %}
	<h1>{{page.title}}</h1>
<article class="article-col-2">

<div>
	{% for post in site.posts %}
	<div class="archive-list">
		<img src="{{post.featured-image}}">
		<div>
			<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
			<p>{{post.excerpt}}</p>
		</div>
	</div>
    {% endfor %}
</div>
</div>
<aside>
{% include aside.html %}
{% include footer.html %}
