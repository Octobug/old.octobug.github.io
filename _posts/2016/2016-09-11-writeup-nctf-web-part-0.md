---
layout: post
title: NCTF Web 5 题题解（Part 0）
tags: NCTF Write-up Web
---

推荐这个 CTF 训练营先: [南京邮电大学网络攻防训练平台](http://ctf.nuptzj.cn/)
大部分题目不算难, 不过作为 CTF 题型来讲还是蛮典型的.

这几题很简单, 但是写 Write-up 不写所有题目, 浑身难受.

* 目录：
{:toc}

### 50 签到题
* 题目:  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/YZKk.MnhsHV20m2faJoUnCwavg7I24ae3SFgKV5jj*0!/r/dAkBAAAAAAAA){: width="80%"}  

	> 这一定是最简单的  
	> 传送门：[题目地址](http://chinalover.sinaapp.com/web1/)   

* 题解:
浏览器直接 F12, 看网页源码:
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/M*eMT5pfE2PSGyfMhVTsK4a8MZ4yb3Lgi1Fq.kpD9iw!/r/dAQBAAAAAAAA){: width="100%"}

* flag：nctf{flag_admiaanaaaaaaaaaaa}
<hr>

### 50 md5 collision 
* 题目:  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/kzrQvlKVMT2YmULi6OdkgLYsaSzNuJwg5cXSNWiZS3s!/r/dAkBAAAAAAAA){: width="80%"}

> 源码:   

```php
<?php
$md51 = md5('QNKCDZO');
$a = @$_GET['a'];
$md52 = @md5($a);
if(isset($a))
{
	if ($a != 'QNKCDZO' && $md51 == $md52) 
	{
    	echo "nctf{*****************}";
	} 
	else 
	{
    	echo "false!!!";
	}
}
else
{
	echo "please input a";
}
?>
```
> 题目链接 [http://115.28.150.176/md5/index.php](http://115.28.150.176/md5/index.php) 

* 题解: 
从代码上看, 就是要`参数 $a` md5 加密后与 'QNKCDZO' md5 加密后相等, 且 $a 不能等于 $md51, 'QNKCDZO' 必有其特殊性, 搜索该字符串: [Stack Overflow 相关问题](http://stackoverflow.com/questions/22140204/why-md5240610708-is-equal-to-md5qnkcdzo) 
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/tYp05KNrJCDiApfRZurLEQ79jQl4w4l7zVsOS3aE.TA!/r/dAMBAAAAAAAA){: width="100%"}  
题目中的解答已经说得很清楚, '240610708' 与 'QNKCDZO' md5 之后的值都是 `0e` 开头, 后面都是数字, 这种格式是浮点数( 科学计数法 ), 而 0 的 10^N 次方是 0 , 所有最后两串 md5 的 == 运算是相等的. 如果要比较的是字符串, 应当使用 === 运算. 
访问 [http://115.28.150.176/md5/index.php?a=240610708 ](http://115.28.150.176/md5/index.php?a=240610708) 可得到 flag.

* flag：nctf{md5_collision_is_easy}
<hr>

### 50 签到2
* 题目:  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/KolXVNeNqcO3QaTLYumRlsLW1HIQ2ScY4R5tjcE9jlg!/r/dAoBAAAAAAAA){: width="80%"}

	> 地址：[来源：网络攻防大赛](http://teamxlc.sinaapp.com/web1/02298884f0724c04293b4d8c0178615e/index.php)   

* 题解:
浏览器直接 F12, 看网页源码:
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/aBoxjkmkGkk0eEDDAPJrbjwzAJ7hiUCtCdh67nI*WLo!/r/dAQBAAAAAAAA){: width="100%"}  
很明显, 'zhimakaimen'的长度是 11 ,而输入框是: 

```html
<input type="password" value="" name="text1" maxlength="10">
``` 
maxlength 属性是 10, 直接输入的话'zhimakaimen'最后一个字符是输入不进去的, 自然也就开不了门.

所以直接把 maxlength 属性改成大于等于 11 即可.

如图:
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/gGtEvOfU0FaZowBVEn.EbyhQLgbdZMNcm2XGS39U*RY!/r/dAgBAAAAAAAA){: width="100%"}

![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/2R1gzdsSa9d5PSmsupxNzHTsku47l39tUVPQOhrXL2U!/r/dMYAAAAAAAAA){: width="100%"}

* flag：nctf{follow_me_to_exploit}
<hr>

### 100 这题不是WEB
* 题目:  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/dxY57IUS319An4hxEN90cJCIwPhlxnKAh4MwuC6b84I!/r/dHcBAAAAAAAA){: width="80%"}

	> 真的，你要相信我！这题不是WEB   
	> 传送门：[题目地址](http://chinalover.sinaapp.com/web2/index.html).   

* 题解:
这题是真坑, 好在不难. 打开地址, 页面是这样的: 
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/0KgLCYk5yfqeJGbA166CLmlW6tr4Ruee69U*gpLgy0s!/r/dPgAAAAAAAAA){: width="100%"}  
网页源码, cookie, http header 均没有特殊的东西, 用 fiddler 拦截也没有发现跳转, 那只能试试那张 gif 有没有东西了...  
下载下来, 改成 rar 后缀, winrar 识别不了, 所以试试直接看文件内容, 用记事本打开, 结果...  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/nqyymPfUP2Mo9Fov5Ps6tM1VJYiNsQZo8iF6UcLdRmA!/r/dOQAAAAAAAAA){: width="100%"}  

* flag：nctf{photo_can_also_hid3_msg}
<hr>

### 100 层层递进
