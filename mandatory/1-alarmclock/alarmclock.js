/*# Make an Alarm Clock

In this folder you will find the basic setup of an alarm clock.

You should only change code in the `alarmclock.js` file.

## How the clock should work

When you click the `Set Alarm` button the counter at the top of the screen should change to the number you entered in the `input` field. For example, if the `input` field says `10` then the title should say `Time Remaining: 00:10`.

Every one second the title should count down by one.

When the `Time Remaining` reaches `00:00` the alarm should play a sound. You can make the sound happen by using `playAlarm()`.

You can stop the alarm sound by pressing the `Stop Alarm` button.*/
function setAlarm() {
  //Manually added a value property to the input tag
  
  let inputValue = document.getElementById("alarmSet").value;

  let buttonClick = document.getElementById("set");
  buttonClick.addEventListener('click', function() {
    document.getElementById("timeRemaining").innerHTML = `Time Remaining: 00:${inputValue}`;}); 
    
    let inputValueToCountDown = inputValue;
    let countDown = setInterval(function() {
      inputValueToCountDown--;
     document.getElementById("timeRemaining").textContent = "Time Remaining: 00:" + " " + inputValueToCountDown;
  if(inputValueToCountDown < 0) {
    clearInterval(countDown);
    isAlarmSound = yes;
   audio.play();
   isAlarmSound = false;
   audio.pause();
   audio.currentTime = 0.0;
   
  }
    }, 1000);
  }
  

      
    
    
    

  

  
  
  



// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
