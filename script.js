function showTime() {
 let date = new Date();
 let hour = date.getHours();
 let mins = date.getMinutes();
 let sec = date.getSeconds();
 let session = "AM";
 if (hour == 0) {
     hour = 12;
 }
 if (hour > 12) {
    hour = hour-12;
    session = "PM"
 }
 if (hour < 10) {
    hour = "0" + hour;
 }
 if (mins < 10) {
    mins = "0" + mins;
 }
 if (sec < 10) {
    sec = "0" + sec;
 }
document.querySelector("#digitalclock").innerHTML = hour + ":" + mins + ":" + sec + " " + session;
setTimeout(showTime,1000)
}
showTime();