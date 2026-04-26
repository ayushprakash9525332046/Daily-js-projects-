let display = document.getElementById("Clock");

function upDateTime() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let time=hours+":"+minutes+":"+seconds;
  display.innerText=time;
}
setInterval(upDateTime, 1000);

