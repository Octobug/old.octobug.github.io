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
    msgObj.innerHTML = "<img src=\"/images/weixin_qrcode.png\"><a href=\"javascript:void(0);\" onclick='closeWin();return false;'><img class=\"close\" src=\"/images/close_ico.png\"></a>";
    msgObj.style.top=(topY + (cHeight / 2 - 256))+"px";
    document.getElementById("msgDiv").style.display="block";

}
function closeWin()
{
    document.getElementById("bgDiv").style.display="none";
    document.getElementById("msgDiv").style.display="none";
}