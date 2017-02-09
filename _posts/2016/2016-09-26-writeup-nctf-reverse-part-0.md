---
layout: post
title: NCTF 逆向 2 题题解
tags: NCTF Write-up Reverse
---

* 目录: 
{:toc}

### 80 Hello,RE! 
* 题目:  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/6CHnnS2dNAzvHuf8a96kk2J9QBQfzdbMUUXzIp6BzJU!/r/dOUAAAAAAAAA){: width="80%"}

	> 或许你需要去学习下IDA的使用，但是只需要学一点点就能做这题了  
	> PS:IDA里面按R可以把奇怪的数字变成字符串  
	> 
	> 格式为flag{*****}包含flag{}提交  
	> 
	> 参考资料:   
	> 《IDA Pro 权威指南》  
	> 各种CTF比赛的逆向部分的writeup   

	> [1.exe](http://ctf.nuptzj.cn/static/uploads/0b562710385edcf655dfa0ae65c69592/1.exe)  

* 题解: 
1. 下载 1.exe
2. 用 IDA Pro 打开
3. 老实讲我也是第一次用 IDA, 直接 F5 吧.( 这需要你的 IDA 安装了 Pseudocode 插件, 菜单路径是 View -> Open subviews -> Pseudocode )  
得到的伪代码: 
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/hSdFnCnHePH7KEIhGmhd20GdN84a55BrVdSLs7nP8Tg!/r/dG8BAAAAAAAA){: width="100%"}
从伪代码的逻辑来看, 输入的内容 v4 是跟变量 v5 为开始地址的内容比较, 根据题目提示, 选中 v5 后的数字串并用 R 键显示为字符, 结果如下: 
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/YxiPhDHhLr9rT3zS.*636Ke8nXcFHHN52Cv1Ios5p3s!/r/dI8AAAAAAAAA){: width="100%"} 
很明显, flag 就是 v5 - v11 组成的逆序字符串, v12 的`'\0'`是 C 语言中字符串的结束符号. 

* flag: flag{Welcome_To_RE_World!}
<hr>

### 150 ReadAsm2