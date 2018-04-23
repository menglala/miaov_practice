function toWeek(iDay) {
  switch (iDay) {
    case 1:
      iDay = "星期一";
      break;
    case 2:
      iDay = "星期二";
      break;
    case 3:
      iDay = "星期三";
      break;
    case 4:
      iDay = "星期四";
      break;
    case 5:
      iDay = "星期五";
      break;
    case 6:
      iDay = "星期六";
      break;
    case 0:
      iDay = "星期天";
      break;
  }
  return iDay;
}

function toTwo(t) {
  return t < 10 ? "0" + t : "" + t;
}
