//button.hover
function clickme() {
  let morning = document.querySelector("#morning");
  let afternoon = document.querySelector("#afternoon");
  let evening = document.querySelector("#evening");
  let night = document.querySelector("#night");
  let wake = morning.options[document.getElementById("morning").selectedIndex];
  let lunch = afternoon.options[document.getElementById("afternoon").selectedIndex];
  let even = evening.options[document.getElementById("evening").selectedIndex];
  let one = night.options[document.getElementById("night").selectedIndex];
  console.log(wake.text);
  console.log(lunch.text);
  console.log(even.text);
  console.log(one.text);
  //  set alarm  time inside of the  small box
  let stortime = document.getElementsByClassName("timealaram");
  stortime[0].innerText = wake.text;
  stortime[1].innerText = lunch.text;
  stortime[2].innerText = even.text;
  stortime[3].innerText = one.text;
  // change text depanding at dropdown box
  let test = document.getElementById("content");
  let img = document.querySelector("#image");
  let time = new Date();
  let hours = time.getHours();
  if (hours === parseInt(morning.value)) {
    console.log("Good Moring..!");
    test.innerText = "Good Moring..!";
    img.src = './Component 30 – 1.svg'
  }
  else if (hours === parseInt(afternoon.value)) {
    console.log("Good Afternoon");
    test.innerText = "Good Afternoon";
    img.src = './Component 31 – 1.svg'
  }
  else if (hours === parseInt(evening.value)) {
    console.log("Good Evening");
    test.innerText = "Good Evening";
    img.src = './lunch_image.png'
  }
  else if (hours === parseInt(night.value)) {
    console.log("Good night");
    test.innerText = "Good night";
    img.src = './Component 32 – 1.svg'
  }
  else {
    console.log("default value");
  }
}
//clock
setInterval(myFunction, 1000);
function myFunction() {
  let date = new Date();
  let hours = date.getHours();
  console.log("hours");
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let AMPM = "am";
  if (hours >= 12) {
    hours = hours - 12;
    AMPM = "pm";
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("ampm").innerHTML = AMPM;
}
let live = document.getElementById("change_content");
let hours = new Date().getHours();

if (hours >= 06 && hours < 11) {
  live.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
}
else if (hours >= 11 && hours < 15) {
  live.innerText = "LET'S HAVE SOME LUNCH !!";
}
else if (hours >= 15 && hours < 21) {
  live.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
}
else if (hours >= 21 || hours < 06) {
  live.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
}
else {
  live.innerText = "CLOSE YOUR EYES AND GO TO SLEEP..!!";
}

// //change the content according time
// let live = document.getElementById("change_content");
// if (hours >= 6 && hours < 11) {
//   live.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
// }
// if (hours >= 11 && hours < 15) {
//   live.innerText = "LET'S HAVE SOME LUNCH !!";
// }
// if (hours >= 15 && hours < 21) {
//   live.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
// }
// if (hours >= 21 && hours < 24) {
//   live.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
// }
// if (hours >= 1 && hours < 6) {
//   live.innerText = "CLOSE YOUR EYES AND GO TO SLEEP..!!";
// }
// else {
//   live.innerText = "CLOSE YOUR EYES AND GO TO SLEEP..!!";
// }

//select the button element using its id
const button = document.getElementById("my_button");
//register a function that will be called the button is "party time!"
button.addEventListener("click", function(){
//change the text of the button to "party time!"
  button.innerText = "Party time!";

  //use the settimeout function to change the text of the button back tp " set alaram"
  // after 1 second (1000 milliseconds)
  setTimeout(function() {
    button.innerText = "SET ALARAM";
  },1000);
});
