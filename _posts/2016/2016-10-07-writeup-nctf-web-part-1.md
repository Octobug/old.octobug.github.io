---
layout: post
title: NCTF Web 5 题题解（Part 1）
tags: NCTF Write-up Web
---

* 目录：
{:toc}

### 100 AAencode  
* 题目:  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/*bgOs61*KFAG82G7BTNqrGItjt.ktJ5DEHDJE5kTwZ0!/r/dLAAAAAAAAAA){: width="80%"}  

	> javascript aaencode  
	> [http://115.28.150.176/aaencode.txt](http://115.28.150.176/aaencode.txt)  

* 题解:
都提示是 JavaScript 了, 用浏览器的 console 跑一下试试看:  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/7emM69dnS7ZiLfZmcGMc1mk0P7QN6H3wAiN4oNL7DWc!/r/dK0AAAAAAAAA){: width="100%"}  

* flag：nctf{javascript_aaencode}
<hr>

### 100 单身二十年  
* 题目:  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/WYGRVUjGV*Seie8dVvZK0XeWSXdMghMl8ZSTwg7P1MQ!/r/dNwAAAAAAAAA){: width="80%"}  

	> 这题可以靠技术也可以靠手速！  
	> 老夫单身二十年，自然靠的是手速！  
	> 题目地址：[撸了他！](http://chinalover.sinaapp.com/web8/)  

* 题解:
点第一个页面的链接, 仔细看的话能看出有跳转, 我手速真的很快, 尝试了一次就把中间那张图给截下来了:   
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/UJ8QZWkWjyr2Hb3Hn2cJ13jGbavVW50o85ufVdzGJ.4!/r/dHwBAAAAAAAA){: width="100%"}  
有跳转当然要用拦截工具了, Fiddler F11:  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/BTSnQ2hT3VwYyTS5I16*cIowEJJbToFufBhVFkt.MKM!/r/dOQAAAAAAAAA){: width="100%"}  

* flag：nctf{yougotit_script_now}   
<hr>

### 100 你从哪里来  
<hr>

### 100 php decode  
<hr>

### 150 文件包含  
<hr>

<div style="display:inline;float:left">  
	<a href="/2016/10/02/writeup-nctf-web-part-0.html">上 • NCTF Web 5 题题解（Part 0）</a>  
</div>  
<div style="display:inline;float:right">  
	<a href="/2016/10/02/writeup-nctf-web-part-2.html">下 • NCTF Web 5 题题解（Part 2）</a>  
</div>