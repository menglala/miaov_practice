function getPos(obj) {
    var pos={
        'left':0,
        'top':0,
    }
    while (obj) {
        pos.left+=obj.offsetLeft;
        pos.top+=obj.offsetTop;
        obj=obj.offsetParent;
    }
    return pos;
}
//访问时,需要将var oDiv=getPos(oDiv);  ==>将函数内的pos赋予obj在访问
//alert(oDiv.left);