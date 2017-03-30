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
* 题目:  
![](http://r.photo.store.qq.com/psb?/V11aPCg53lyBwf/mT.1zeADIzpI0LL6s1h.lkS0wq*.8FCDAP1xBRnZn4c!/r/dN8AAAAAAAAA){: width="80%"}

	> 读汇编是逆向基本功。  
	>   
	> 给出的文件是func函数的汇编  
	> main函数如下  
	> 输出的结果即为flag，格式为flag{**********}，请连flag{}一起提交
	>  
	> 编译环境为linux gcc x86-64  
	> 调用约定为System V AMD64 ABI  
	> 请不要利用汇编器，IDA等工具。。这里考的就是读汇编与推算汇编结果的能力 
	>  
	> ```c 
	> int main(int argc, char const *argv[])  
	> {  
	>     char input[] = {0x0,  0x67, 0x6e, 0x62, 0x63, 0x7e, 0x74, 0x62, 0x69, 
	>         0x6d, 0x55, 0x6a, 0x7f, 0x60, 0x51, 0x66, 0x63, 0x4e, 0x66,    
	>         0x7b, 0x71, 0x4a, 0x74, 0x76, 0x6b, 0x70, 0x79, 0x66 , 0x1c};    
	>     func(input, 28);  
	>     printf("%s\n",input+1);  
	>     return 0;  
	> }
	> ```
	>  
	> 参考资料:  
	> [https://github.com/veficos/reverse-engineering-for-beginners](https://github.com/veficos/reverse-engineering-for-beginners)  
	> 《汇编语言》王爽  
	> 《C 反汇编与逆向分析技术揭秘》  
	> [2.asm](http://ctf.nuptzj.cn/static/uploads/a480ff52cdbc70bd1443763f27f35279/2.asm)  

* 题解: 
调用 func 时第一个参数是引用 input, 第二个参数是整数28(即 str 的长度), 根据 System V AMD64 ABI 调用约定, 这两个参数会存在寄存器 rdi(input) 和 rsi(28).  
以下是 `2.asm` 的注释版: 

```asm  
00000000004004e6 <func>:
  4004e6: 55                    push   rbp
  4004e7: 48 89 e5              mov    rbp,rsp
  4004ea: 48 89 7d e8           mov    QWORD PTR [rbp-0x18],rdi   ;input
  4004ee: 89 75 e4              mov    DWORD PTR [rbp-0x1c],esi   ;常数 28
  4004f1: c7 45 fc 01 00 00 00  mov    DWORD PTR [rbp-0x4],0x1    ;循环计数器 i 初始化 1
  4004f8: eb 28                 jmp    400522 <func+0x3c>
  ;----------------------------------------------------------------<func+0x14>
  4004fa: 8b 45 fc              mov    eax,DWORD PTR [rbp-0x4]    ;计数器 i
  4004fd: 48 63 d0              movsxd rdx,eax                    ;rdx:i
  400500: 48 8b 45 e8           mov    rax,QWORD PTR [rbp-0x18]   ;rax:input
  400504: 48 01 d0              add    rax,rdx                    ;rax:input+i 指针指向第 i 个字符
  400507: 8b 55 fc              mov    edx,DWORD PTR [rbp-0x4]    ;edx:i
  40050a: 48 63 ca              movsxd rcx,edx                    ;rcx:i
  40050d: 48 8b 55 e8           mov    rdx,QWORD PTR [rbp-0x18]   ;rdx:input
  400511: 48 01 ca              add    rdx,rcx                    ;rdx:input+i 指针指向第 i 个字符
  400514: 0f b6 0a              movzx  ecx,BYTE PTR [rdx]         ;ecx:取 rdx 低 8 位, 前面补零
  400517: 8b 55 fc              mov    edx,DWORD PTR [rbp-0x4]    ;edx:i 
  40051a: 31 ca                 xor    edx,ecx                    ;异或 edx,ecx
  40051c: 88 10                 mov    BYTE PTR [rax],dl          ;取异或结果低 8 位存到 input[i]
  40051e: 83 45 fc 01           add    DWORD PTR [rbp-0x4],0x1    ;计数器 i++
  ;----------------------------------------------------------------<func+0x3c>
  400522: 8b 45 fc              mov    eax,DWORD PTR [rbp-0x4]    ;计数器
  400525: 3b 45 e4              cmp    eax,DWORD PTR [rbp-0x1c]   ;常数 28
  400528: 7e d0                 jle    4004fa <func+0x14>         ;如果计数器小于 28, 就继续循环
  40052a: 90                    nop
  40052b: 5d                    pop    rbp
  40052c: c3                    ret
```
将以上代码转为 python 代码:

```python
# coding=utf-8
__author__ = 'bITeMe'
input = [0x67, 0x6e, 0x62, 0x63, 0x7e, 0x74, 0x62, 0x69, 0x6d,
         0x55, 0x6a, 0x7f, 0x60, 0x51, 0x66, 0x63, 0x4e, 0x66,
         0x7b, 0x71, 0x4a, 0x74, 0x76, 0x6b, 0x70, 0x79, 0x66, 0x1c]
i = 1;
result = ''
for ch in input:
    result += chr(ch ^ i)
    i += 1
print(result)
```
执行结果就是 flag.
* flag: flag{read_asm_is_the_basic} 