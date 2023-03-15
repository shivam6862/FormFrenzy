module.exports = checkTimeFunction = async (check, timeoftest) => {
  const date = new Date();
  const time =
    date.getDate() +
    ":" +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();
  var a = time.split(":");
  var seconds = +a[0] * 60 * 60 * 24 + +a[1] * 60 * 60 + +a[2] * 60 + +a[3];

  if (check.length > 0) {
    var b = check[0].time.split(":");
    var seconds1 =
      +b[0].substring(0, 2) * 60 * 60 * 24 +
      +b[1] * 60 * 60 +
      +b[2] * 60 +
      +b[3];
  }
  if (seconds1 + +timeoftest * 60 >= seconds) return 1;
  return 0;
};
