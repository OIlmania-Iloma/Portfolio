function showTools () {
  let click = document.getElementById("tools-cont");
  if (click.style.display === "none"){
    click.style.display = "block"
  }else{
    click.style.display = "none"
  }
  
}
function showContact() {
  let click = document.getElementById("contact");
  if (click.style.display === "none"){
    click.style.display = "block"
  }else{
    click.style.display = "none"
  }
  
}

console.log('me')
function showTime(){
  let  date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  let session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  let time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();