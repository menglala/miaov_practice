function drag(obj) {
  var ev = ev || event;

  if (obj.setCapture) {
    obj.setCapture();
  }

  obj.onmousedown = function(ev) {
    var disX = ev.clientX - obj.offsetLeft,
      disY = ev.clientY - obj.offsetTop;

    //将鼠标移动动作处理函数添加给document,为了防止鼠标移动过快脱离div
    document.onmousemove = function(ev) {
      var l = ev.clientX - disX,
        t = ev.clientY - disY;

      if (l < 0) {
        l = 0;
      } else if (l > document.documentElement.clientWidth - obj.offsetWidth) {
        l = document.documentElement.clientWidth - obj.offsetWidth;
      }
      if (t < 0) {
        t = 0;
      } else if (t > document.documentElement.clientHeight - obj.offsetHeight) {
        t = document.documentElement.clientHeight - obj.offsetHeight;
      }

      obj.style.left = l + "px";
      obj.style.top = t + "px";
      //解决文字选中被拖拽的浏览器默认行为和图片无法拖拽的默认行为
      //IE8以下用setCapture()全局捕获解决
      return false;
    };
    document.onmouseup = function(ev) {
      document.onmousemove = document.onmouseup = null;
      if (obj.releaseCapture) {
        obj.releaseCapture();
      }
    };
  };
}

function crash(obj, obj2) {
  var ev = ev || event;
  obj.onmousedown = function(ev) {
    var disX = ev.clientX - obj.offsetLeft,
       disY = ev.clientY - obj.offsetTop;

    //将鼠标移动动作处理函数添加给document,为了防止鼠标移动过快脱离div
    document.onmousemove = function(ev) {
      var l = ev.clientX - disX,
        t = ev.clientY - disY,
        l1 = obj.offsetLeft,
        t1 = obj.offsetTop,
        r1 = obj.offsetLeft + obj.offsetWidth,
        b1 = obj.offsetTop + obj.offsetHeight,
        l2 = obj2.offsetLeft,
        t2 = obj2.offsetTop,
        r2 = obj2.offsetLeft + obj2.offsetWidth,
        b2 = obj2.offsetTop + obj2.offsetHeight;

      if (l < 0) {
        l = 0;
      } else if (l > document.documentElement.clientWidth - obj.offsetWidth) {
        l = document.documentElement.clientWidth - obj.offsetWidth;
      }
      if (t < 0) {
        t = 0;
      } else if (t > document.documentElement.clientHeight - obj.offsetHeight) {
        t = document.documentElement.clientHeight - obj.offsetHeight;
      }

      if (r1 < l2 || b1 < t2 || l1 > r2 || t1 > b2) {
        oImg.src = "imgs/tv2.jpg";
      } else {
        oImg.src = "imgs/tv1.jpg";
      }

      obj.style.left = l + "px";
      oDiv.style.top = t + "px";
      //解决文字选中被拖拽的浏览器默认行为和图片无法拖拽的默认行为
      //IE8以下用setCapture()全局捕获解决
      return false;
    };
    document.onmouseup = function(ev) {
      document.onmousemove = null;
    };
  };
}
