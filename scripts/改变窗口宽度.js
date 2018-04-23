function changeBulk(obj) {
  //如果元素设置有边距,那会有bug,因为offsetLeft得到的是没有边距的距离,若元素有边距,则会在新位置生成边距而偏离
  obj.onmousedown = function(ev) {
    var ev = ev || event,
      dir = "",
      oldX = ev.clientX,        //先保存鼠标的位置
      oldL = obj.offsetLeft ,   //保存div最初的offsetLeft值
      oldW = obj.offsetWidth;   //保存div最初的宽度
    document.onmousemove = function(ev) {     //检测div是否位于红线内,不用考虑div外的情况,因为此时触发不了                                                                  onmousedown事件               
      if (oldL + oldW - ev.clientX < 10) {
        dir = "right";
      }
      if (ev.clientX - oldL < 10) {
        dir = "left";
      }

      switch (dir) {                // 当鼠标在右边改变窗口大小时,原来的宽度加上鼠标的偏移量就是新宽度
        case "right":
          obj.style.width = oldW + (ev.clientX - oldX) + "px";
          break;
        case "left":              //当鼠标在左边时,原来的offsetLeft加上鼠标的偏移量就是新的left值,
          obj.style.left = oldL + (ev.clientX - oldX) + "px";
          obj.style.width = oldW - (ev.clientX - oldX) + "px"; //原来的宽度减去鼠标向左的偏移量就是新的宽度
          break;
      }

      return false;
    };
    document.onmouseup = function(ev) {
      document.onmousemove = document.onmouseup = null;
      return false;
    };
  };
}
