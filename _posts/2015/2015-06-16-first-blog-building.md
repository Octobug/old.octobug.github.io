---
layout: post
title: 用Jekyll在Github Pages搭建博客
path: /images/post/
tags: Github
---

博客基本改造完毕.

N久前看到<a href="http://lastavenger.github.io" target="_blank"> 谷月轩 </a>同学在Github Pages搭了一个博客, 羡慕不已, 当时看到页脚Powered by Jekyll, 还以为Jekyll是门语言, 就想着等html, css, javascript学得差不多了再来研究.

直到前几天尝试在本地搭了VPN服务, 其中遇到了一些剧本之外的问题, 想写点学习笔记总结下, 才发现之前在SAE一键安装的wordpress博客系统不是我想要的样子, 而我php还没学感觉改造起来有难度, 加上Github Pages不限流量, 所以决定在Github Pages上边动手.

###Github Pages:

点<a href="https://guides.github.com/features/pages/" target="_blank"> [我] </a>获取官方文档.

####注意: 
只有以名为`Github账户名.github.io`形式的repository发布才是可以直接以`http://Github账户名.github.io`访问的, 并且是以master分支发布. 其他命名形成的链接形式为`http://Github账户名.github.io/仓库名`, 以gh-pages分支发布.

###参考顺序:

<ol>
    <li>
        <a href="http://www.zhihu.com/question/20376047/answer/33222956" target="_blank">知乎: 怎样做一个漂亮的 GitHub Pages 首页？</a>
    </li>
    <li>
        <a href="http://www.pchou.info/web-build/2013/01/05/build-github-blog-page-04.html" target="_blank">一步步在GitHub上创建博客主页(4)</a>
        <br>
        注意: 如果DevKit安装出错, 请打开解压出来的文件夹中的"config.yml"
        在最后加上两行ruby的安装目录, 就像这样:<br>
        <img src="{{page.path}}devkit-config-yml.png" style="width: 500px;"><br>
        之后再继续按教程操作.
    </li>
    <li>
        <a href="http://www.pchou.info/web-build/2014/07/04/build-github-blog-page-08.html" target="_blank">一步步在GitHub上创建博客主页-最新版</a>
        <br>
        直接看"安装Bundle".
    </li>
    <li>
        <a href="http://jekyllcn.com/" target="_blank">Jekyll</a>
    </li>
</ol>

###Jekyll模板: 

<a href="http://jekyllthemes.org/" target="_blank">Jekyll Themes</a> 有很多优秀的模板, 然而我是直接fork谷月轩的. 地址: <a href="https://github.com/LastAvenger/LastAvenger.github.io" target="_blank">LastAvenger/LastAvenger.github.io</a>

这个模板我基本只做了一些个人信息和喜好的改动, 感觉只改了1%左右的样子. 由于有字库的字体有时加载很慢, 所以还是删了, 虽然确实很好看. 最后在页脚加了四个个人链接图标. 这个过程蛮艰辛. 原本以为图标是用图片链接的形式做的, 然后我看了一个例子: 

<a href="http://painterlin.com/pages/about.html" target="_blank">关于 | 林安亚的博客</a>, 项目地址: <a href="https://github.com/lay1010/lay1010.github.io" target="_blank">lay1010/lay1010.github.io</a>

死也找不到图标的图片, 由于对Jekyll页面结构和前端知识掌握得很少, 我是以删文件测试的笨办法找到图标显示方法的. 最后发现图标是用图标字体库形成的. 

代码片段:

```html
<link rel="stylesheet" href="{{ site.baseurl }}css/font-awesome.css">
<a href="{{ site.author.github }}" target="_blank">
    <i class="fa fa-github fa-lg"></i>&nbsp;
</a>
<a href="{{ site.author.weibo }}" target="_blank">
    <i class="fa fa-weibo fa-lg"></i>&nbsp;
</a>
<a href="{{ site.author.qzone }}" target="_blank">
    <i class="fa fa-star-o fa-lg"></i>&nbsp;
</a>
</a><a href="{{ site.author.weixin }}" target="_blank">
    <i class="fa fa-wechat fa-lg"></i>&nbsp;
</a>
```
其中`font-awesome.css`需要用到图标字体库. 

详情见<a href="http://fontawesome.dashgame.com/" target="_blank"> Font Awesome</a> | 一套绝佳的图标字体库和CSS框架.

嗯, 暂时就这样了. 慢慢学习, 慢慢改进.
