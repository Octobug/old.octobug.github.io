---
layout: post
title: NCTF Web 前 5 题题解
tags: NCTF Write-up Web
---

这几题很简单, 但是写 Write-up 不写所有题目, 浑身难受.

* 目录：
{:toc}

### 50 签到题
* 题目: 
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/YZKk.MnhsHV20m2faJoUnCwavg7I24ae3SFgKV5jj*0!/r/dAkBAAAAAAAA){: width="80%"}

* 链接: [题目地址](http://chinalover.sinaapp.com/web1/)

* 题解:
浏览器直接 F12, 看网页源码:
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/M*eMT5pfE2PSGyfMhVTsK4a8MZ4yb3Lgi1Fq.kpD9iw!/r/dAQBAAAAAAAA){: width="100%"}

* flag：nctf{flag_admiaanaaaaaaaaaaa}

### 50 md5 collision 
* 题目: 
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/kzrQvlKVMT2YmULi6OdkgLYsaSzNuJwg5cXSNWiZS3s!/r/dAkBAAAAAAAA){: width="80%"}

`源码`:

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

* 链接: [题目地址](http://115.28.150.176/md5/index.php)

* 题解:
从代码上看, 就是要`参数 $a` md5 加密后与 'QNKCDZO' md5 加密后相等, 且 $a 不能等于 $md51, 'QNKCDZO' 必有其特殊性, 搜索该字符串: [Stack Overflow 相关问题](http://stackoverflow.com/questions/22140204/why-md5240610708-is-equal-to-md5qnkcdzo)

![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/tYp05KNrJCDiApfRZurLEQ79jQl4w4l7zVsOS3aE.TA!/r/dAMBAAAAAAAA){: width="100%"}

题目中的解答已经说得很清楚, '240610708' 与 'QNKCDZO' md5 之后的值都是 `0e` 开头, 后面都是数字, 这种格式是浮点数( 科学计数法 ), 而 0 的 10^N 次方是 0 , 所有最后两串 md5 的 == 运算是相等的. 如果要比较的是字符串, 应当使用 === 运算.

访问 [http://115.28.150.176/md5/index.php?a=240610708 ](http://115.28.150.176/md5/index.php?a=240610708) 可得到 flag.

* flag：nctf{md5_collision_is_easy}




### 50 签到2

### 100 这题不是WEB

### 100 层层递进