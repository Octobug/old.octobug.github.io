---
layout: post
title: NCTF 密码学 5 题题解（Part 0）
tags: NCTF Write-up Crypto
---

* 目录: 
{:toc}

### 50 easy! 
* 题目:  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/hD58R0mDJiyF4yACAFYXFymoREshDla9fAoSNAglfe8!/r/dHABAAAAAAAA){: width="80%"}  

	> 密文: bmN0Znt0aGlzX2lzX2Jhc2U2NF9lbmNvZGV9  
	> 这题做不出来就剁手吧！  

* 题解:  
很明显是 base64 编码...   

	> ```python  
	> import base64
	> 
	> a="bmN0Znt0aGlzX2lzX2Jhc2U2NF9lbmNvZGV9"
	> print base64.b64decode(a)
	> 
	> ```  

	![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/SdrWS.AZsyc2UpGXUd1PkwKTBp7Y3I8rOTeQNPMWyD8!/r/dOEAAAAAAAAA){: width="100%"}  

* flag: nctf{this_is_base64_encode}
<hr>

### 100 KeyBoard
* 题目:  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/Avd*sqJYWmLOvLDdp68YyWV5AfLoqsaghwKqxpBjttI!/r/dHEBAAAAAAAA){: width="80%"}  

	>  看键盘看键盘看键盘！  
	>  答案非标准格式，提交前加上nctf{}  
	>  ytfvbhn tgbgy hjuygbn yhnmki tgvhn uygbnjm uygbn yhnijm

* 题解:  
没错, flag 就是这些字母在键盘上连起来的形状对应的字母.

* flag: nctf{areuhack}
<hr>

### 150 base64全家桶
* 题目:  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/YKHZDadzUlGwHDCROnD.e4yHrSjIvuHZXW2uSYjyJ7A!/r/dCIAAAAAAAAA){: width="80%"}  

	> 全家桶全家桶全家桶！  
	> 我怎么饿了。。。。。。  
	> 密文(解密前删除回车)：R1pDVE1NWlhHUTNETU4yQ0dZWkRNTUpYR00zREtNWldHTTJES  
	> 1JSV0dJM0RDTlpUR1kyVEdNWlRHSTJVTU5SUkdaQ1RNTkJWSVk  
	> zREVOUlJHNFpUTU5KVEdFWlRNTjJF  

* 题解:  
	先 base64 decode 试试:  

	> ```python
	> >>> from base64 import *
	> >>> a = "R1pDVE1NWlhHUTNETU4yQ0dZWkRNTUpYR00zREtNWldHTTJES1JSV0dJM0RDTlpUR1\
	> kyVEdNWlRHSTJVTU5SUkdaQ1RNTkJWSVkzREVOUlJHNFpUTU5KVEdFWlRNTjJF"
	> >>> b = b64decode(a)
	> >>> print b
	> GZCTMMZXGQ3DMN2CGYZDMMJXGM3DKMZWGM2DKRRWGI3DCNZTGY2TGMZTGI2UMNRRGZCTMNBVIY3\
	> DENRRG4ZTMNJTGEZTMN2E
	> ```  

	观察字符集, 只有数字和大写英文字母, 显然是 base32 了:  

	> ```python  
	> >>> c = b32decode(b)
	> >>> print c
	> 6E6374667B6261736536345F6261736533325F616E645F6261736531367D
	> ```  

	剩下的字符集更小了, base16:  

	> ```python
	> >>> d = b16decode(c)
	> >>> print d
	> nctf{base64_base32_and_base16}
	> ```

* flag: nctf{base64_base32_and_base16}  
<hr>

### 200 n次base64

<hr>

### 250 骚年来一发吗