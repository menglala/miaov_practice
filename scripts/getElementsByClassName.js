//要求getElementsByClassName函数可以选取含有多个class其中任意一个的元素，多个class用逗号、空格分开
function getElementsByClassName(parent, tagName, className) {
  var arrClassName = className.split(", "),
      arr = [],
      allElems = parent.getElementsByTagName(tagName);

  for (var i = 0; i < arrClassName.length; i++) {
    for (var j = 0; j < allElems.length; j++) {
      var aClassName = allElems[j].className.split(" ");

      for (var k = 0; k < aClassName.length; k++) {
        if (aClassName[k] == arrClassName[i]) {
          arr.push(allElems[j]);
          break;
        }
      }
    }
  }

  return arr;
}
