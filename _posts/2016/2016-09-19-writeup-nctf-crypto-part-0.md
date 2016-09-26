---
layout: post
title: NCTF 密码学 5 题题解（Part 0）
tags: NCTF Write-up Crypto
---

* 目录：
{:toc}

### 50 easy! 
* 题目:  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/hD58R0mDJiyF4yACAFYXFymoREshDla9fAoSNAglfe8!/r/dHABAAAAAAAA){: width="80%"}  
密文：bmN0Znt0aGlzX2lzX2Jhc2U2NF9lbmNvZGV9
这题做不出来就剁手吧！

* 题解:
很明显是 base64 编码...

```python
import base64

a="bmN0Znt0aGlzX2lzX2Jhc2U2NF9lbmNvZGV9"
print base64.b64decode(a)

```

![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/SdrWS.AZsyc2UpGXUd1PkwKTBp7Y3I8rOTeQNPMWyD8!/r/dOEAAAAAAAAA){: width="100%"}

* flag：nctf{this_is_base64_encode}
<hr>

### 100 KeyBoard

<hr>

### 150 base64全家桶

<hr>

### 200 n次base64

<hr>

### 250 骚年来一发吗