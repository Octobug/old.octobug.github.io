---
layout: post
title: 更新博客模板 ( 来自 LA )，加上一点改动
tags: Github
---

博客又一次改造完毕.

说来惭愧...第二篇文章还是关于博客本身的...

一年多前，在汇编考试前三天开始整这个博客，差点没时间复习，当时是抱着挂的心情的，结果考了90...然后博客搭完也没怎么写文章，主要是没什么好写的，真的惭愧，接下来应该会写写 writeup 和其他一些学习总结吧。

这次更新主要是用上新模板 [silk-jekyll-theme](https://github.com/lastavenger/silk-jekyll-theme)，并加了个 JS 弹窗。

* 目录：
{:toc}

### 域名绑定
1. CANME
在仓库根目录创建名为`CANME`（大小写敏感）的文件，内容为你的域名如`octobug.tk`。
2. IP
用 ping 获取已发布`Github pages`的 IP。
3. DNS Service
在域名解析服务商如 DNSPod 注册个账号，添加域名，设置两个A记录。分别是 @ 和 www，ip 地址填上个步骤获取的IP地址。
4. Custom Nameservers
在购买域名的网站设置 Custom Nameservers，添加两条记录 f1g1ns1.dnspod.net 和 f1g1ns2.dnspod.net
5. 等待解析生效，一般不会太久...

### JavaScript 实现浮动窗口 

效果如下：
![](http://r.photo.store.qq.com/psb?/V11aPCg508qwno/rfY57P*54hZz3xS05*WWuV49VhiKhfWptJtN6SWEyZU!/r/dNoAAAAAAAAA){: width="100%"}

右上角的叉是抄微博的...比较简单，直接贴代码吧。

html.html: 

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh">
<head>
  <meta charset="utf-8">
  <link type="text/css" rel="stylesheet" href="css.css">
  <script src="js.js"></script>
</head>
<body>
  <div class="footer">
    <a href="javascript:void(0);" onclick="showWin();return false;">
      <i class="fa fa-wechat fa-lg"></i>
    </a>
  </div>
  <div id="bgDiv"></div>
  <div id="msgDiv" align="center"></div>
</body>
</html>
```
js.js:

```javascript
function showWin()
{
    var cHeight,sHeight;
    cHeight = document.documentElement.clientHeight;
    sHeight = document.body.scrollHeight;

//背景覆盖
    var bgObj = document.getElementById('bgDiv');
    bgObj.style.height = sHeight + "px";
    document.getElementById("bgDiv").style.display="block";

//弹窗
    var topY = document.body.scrollTop;
    var msgObj=document.getElementById('msgDiv');
    msgObj.innerHTML = "<img src=\"/images/weixin_qrcode.png\">\
    <a href=\"javascript:void(0);\" onclick='closeWin();return false;'>\
    <img class=\"close\" src=\"/images/close_ico.png\"></a>";
    msgObj.style.top=(topY + (cHeight / 2 - 256))+"px";
    document.getElementById("msgDiv").style.display="block";

}
function closeWin()
{
    document.getElementById("bgDiv").style.display="none";
    document.getElementById("msgDiv").style.display="none";
}
```
css.css:

```css
/*微信图标弹窗*/
#bgDiv {
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0px;
    z-index: 10000;
    background: #000;
    opacity: 0.5;
    display: none;
}

#msgDiv {
    position: absolute;
    left: 50%;
    margin-left:-300px;
    z-index: 10001;
    background: #ECF0F0;
    border-radius: 5px;
}

.close{
    position: absolute;
    width: 36px;
    height: 36px;
    font-size: 0;
    z-index: 1;
    top: -16px;
    right: -16px;
}
```