var element = document.getElementById("text");

if (element) {
  console.log(element.innerHTML); 
} else {
  console.log("Element with ID 'text' not found.");
}

var elements = document.getElementsByTagName("h1");

if (elements.length > 0) {
  var firstH1 = elements[0];
  console.log(firstH1.innerHTML);
} else {
  console.log("No <h1> elements found.");
}

var ele = document.getElementsByClassName("box");

if (ele.length > 0) {
  var firstBox = ele[0];
  console.log(firstBox.innerHTML); 
} else {
  console.log("No elements with the class 'box' found.");
}

function toggleHeading() {
  var heading = document.getElementById('myHeading');
  heading.textContent = heading.textContent === 'Hello' ? 'Hello World' : 'Hello';
}

document.addEventListener("DOMContentLoaded", function() {
  var replaceButton = document.getElementById("replaceButton");
  var contentElement = document.getElementById("content");

  replaceButton.addEventListener("click", function() {
    contentElement.textContent = "Welcome to Elevation academy";
  });
});

var h1element = document.getElementById("heading");
  h1element.style.color = "red";

  function toggleDirection() {
    var boxContainer = document.querySelector('.box-container');
    var boxes = document.querySelectorAll('.cards');
    if (boxContainer.style.display === 'block') {
      boxContainer.style.display = 'flex';
      boxes.forEach(function (box) {
        box.style.display = 'flex';
      });
    } else {
      boxContainer.style.display = 'block';
      boxes.forEach(function (box) {
        box.style.display = 'block';
      });
    }
  }


  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }

  // Function to update the clock
  function updateClock() {
    var clockElement = document.getElementById("clock");
    var currentTime = new Date();
    var hours = formatTime(currentTime.getHours());
    var minutes = formatTime(currentTime.getMinutes());
    var seconds = formatTime(currentTime.getSeconds());
    var timeString = hours + ":" + minutes + ":" + seconds;
    clockElement.textContent = timeString;
  }

  // Update the clock every second
  setInterval(updateClock, 1000);
  





