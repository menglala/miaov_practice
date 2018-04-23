function getStyle(obj, attr) {
  // if (obj.currentStyle[attr]) {
  //     return obj.currentStyle[attr];
  // }else{
  //     return getComputedStyle(obj)[attr];
  // }
  //获取元素样式,获取的是浏览器计算后的样式
  return obj.currentStyle? obj.currentStyle[attr]: getComputedStyle(obj)[attr];
}
