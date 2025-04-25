const screens = [
  () => "Surf Watch OS<br><br>Weather: Sunny<br>Temp: 68°F<br>Tide: High (falling)<br>Wave Interval: 6 min",
  () => "Training Mode<br><br>Drill 1: Paddle Sprint<br>Drill 2: Pop-up Reps<br>Drill 3: Wave Ducking",
  () => "Hydration Reminder<br><br>Drink water now to stay energised!",
  () => "Next Sunset: 7:48 PM<br>Time Left: 1h 32m",
  () => "Stretch Mode<br><br>Hold each stretch 30 seconds",
  () => "Quote:<br><br>“I'm going to have to science the shit out of this.”",
];

let index = 0;
const screenDiv = document.getElementById("screen");

function rotateScreens() {
  screenDiv.innerHTML = screens[index % screens.length]();
  index++;
}
rotateScreens();
setInterval(rotateScreens, 7000);
