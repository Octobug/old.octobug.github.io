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
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/4AA5qT.T.175*MSDjRHzZVQth8MBb0ABbzmuMMbdeUg!/r/dAYBAAAAAAAA){: width="100%"}  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/n1ROW56tMZs59r2zFaCAfmgjNv13*X3dYTDmlSiKLwk!/r/dMYAAAAAAAAA){: width="100%"}  

* flag：nctf{yougotit_script_now}   
<hr>

### 100 你从哪里来  
* 题目:  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/v*Uij.KE8SrMaM1tLIqjOglZk28IiVgEd.oIMsd3nn8!/r/dAsBAAAAAAAA){: width="80%"}  

	> 你是从 google 来的吗？   
	> [http://115.28.150.176/referer/index.php](http://115.28.150.176/referer/index.php)

* 题解:   
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/hTd7cZZ8kw.YdL*gWelw5gm1kdJ*X77oh2Igujh.I5U!/r/dNwAAAAAAAAA){: width="80%"}  
很明显, 改 HTTP requests 中的 `referer`, 可以用 firefox 的 tamper data 插件, 这里还是用 fiddler.    
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/uNpijEofdO0qmGhtguDly8WZGWnz91dZqLYAcHC3QjA!/r/dAoBAAAAAAAA){: width="100%"}  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/iv38eCVvlcyWeP23wuUlYRV7KIAmzB0eVfMN7SEUQvk!/r/dHwBAAAAAAAA){: width="100%"}  

* flag：nctf{http_referer}   
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