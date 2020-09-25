---
layout: consumer
title:  འཛད་སྤྱོད་དང་ཚོང་དོན་གྱི་རྩོད་གཞི།
---

{% include header.html %}
	<h1>{{page.title}}</h1>
<article class="article-col-2">

<div>
	<div class="archive-list">
		<img src="/assets/images/fraud.jpg">
		<div>
		<h1>དྲ་ཐོག་ནས་མགོ་གཡོགས་མགོ་སྐོར་ཐེབས་པ།</h1>
			{% for post in site.categories.fraud %}
			<li><a href="{{ post.url }}">{{ post.title }}</a></li>
			  {% endfor %}
		</div>
	</div>
	<div class="archive-list">
		<img src="/assets/images/contract-dispute.jpg">
		<div>
		<h1>འགན་རྒྱའི་རྩོད་གླེང་། </h1>
			{% for post in site.categories.contract-dispute %}
			<li><a href="{{ post.url }}">{{ post.title }}</a></li>
			  {% endfor %}
		</div>
	</div>
	<div class="archive-list">
		<img src="/assets/images/consumer-rights.jpg">
		<div>
		<h1> འཛད་སྤྱོད་པའི་ཐོབ་ཐང་། </h1>
			{% for post in site.categories.consumer-rights %}
			<li><a href="{{ post.url }}">{{ post.title }}</a></li>
			  {% endfor %}
		</div>
	</div>
	<div class="archive-list">
		<img src="/assets/images/partnership.jpg">
		<div>
		<h1>  མཉམ་ལས་ཀྱི་གན་རྒྱ། </h1>
			{% for post in site.categories.partnership-contract %}
			<li><a href="{{ post.url }}">{{ post.title }}</a></li>
			  {% endfor %}
		</div>
	</div>
	<div class="archive-list">
		<img src="/assets/images/contract-for-sale-purchase-installment.jpg">
		<div>
		<h1>དུས་བཅད་ལྟར་རིན་གོང་སྤྲོད་པའི་ཉོ་འཚོང་གི་འགན་རྒྱ་དང་གཏའ་བཞག་རླངས་འཁོར་སོགས། </h1>
			{% for post in site.categories.contract-for-sale-purchaseby-installment %}
			<li><a href="{{ post.url }}">{{ post.title }}</a></li>
			  {% endfor %}
		</div>
	</div>
	<div class="archive-list">
		<img src="/assets/images/business-licencing.jpg">
		<div>
		<h1> ཚོང་ལས་གསར་འཛུགས་དང་ཆོག་མཆན་ལེན་སྟངས།</h1>
			{% for post in site.categories.business-planning-licencing %}
			<li><a href="{{ post.url }}">{{ post.title }}</a></li>
			  {% endfor %}
		</div>
	</div>
  
</div>
</div>
<aside>
<div class="widget">
	<ul>
		<li><a href="#">བཟའ་ཚང་དང་འབྲེལ་བའི་རྩོད་གཞི། </a><span>></span></li>
		<li><a href="#">འཛད་སྤྱོད་དང་ཚོང་དོན་གྱི་རྩོད་གཞི།</a><span>></span></li>
		<li><a href="#">སྒེར་རྫས་དང་རྒྱུ་ནོར་ཐད་ཀྱི་རྩོད་གཞི། </a><span>></span></li>
		<li><a href="#"> ཉེས་ཁྲིམས་དང་འབྲེལ་བའི་རྩོད་གཞི།  </a><span>></span></li>
	</ul>
</div>
</aside>
{% include footer.html %}
