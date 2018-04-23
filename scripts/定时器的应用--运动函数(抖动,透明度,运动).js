function doMove(obj, attr, speed, target, enFnd) {
  speed = parseInt(getStyle(obj, attr)) > target ? -speed : speed;
  clearInterval(obj.timer);
  obj.timer = setInterval(function() {
    var pos = parseInt(getStyle(obj, attr)) + speed;
    if ((pos > target && speed > 0) || (pos < target && speed < 0)) {
      pos = target;
    }
    obj.style[attr] = pos + "px";
    if (pos == target) {
      clearInterval(obj.timer);
      enFnd && enFnd();
    }
  }, 30);
}

function changeOpacity(obj, speed, target, enFnd) {
  speed = parseFloat(getStyle(obj, "opacity")) > target ? -speed : speed;
  clearInterval(obj.opacity);
  obj.opacity = setInterval(function() {
    var opa = parseFloat(getStyle(obj, "opacity")) + speed;
    if ((opa > target && speed > 0) || (opa < target && speed < 0)) {
      opa = target;
    }
    obj.style.opacity = opa;
    obj.style.filter = "alpha(opacity=" + opa * 100 + ")";
    if (opa == target) {
      clearInterval(obj.opacity);
      enFnd && enFnd();
    }
  }, 30);
}

function shake(obj, attr, enFnd) {
  if (obj.flag == true) return;

  var att = [],
    num = 0;
  obj.flag = true;

  for (let i = 20; i > 0; i -= 2) {
    att.push(i, -i);
  }
  att.push(0);
  clearInterval(obj.timer2);

  obj.timer2 = setInterval(function() {
    pos = parseInt(getStyle(obj, attr)) + att[num];
    obj.style[attr] = pos + "px";
    if (att[num] == 0) {
      clearInterval(obj.timer2);
      obj.flag = false;
      enFnd && enFnd();
    } else {
      num++;
    }
  }, 30);
}

function getStyle(obj, attr) {
  return obj.currentStyle
    ? obj.currentStyle[attr]
    : getComputedStyle(obj)[attr];
}
