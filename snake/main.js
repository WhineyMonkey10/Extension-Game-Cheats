// User Interface

// Create a button that can be dragged around and out of the extension window
// Then inject the button into the page

var button = document.createElement("button");
button.innerHTML = "Set high score";
button.style.position = "fixed";
button.style.top = "0px";
button.style.left = "0px";
button.style.zIndex = "9999";
button.style.borderRadius = "0px";
button.style.border = "none";
button.style.padding = "10px";
button.style.backgroundColor = "#ffffff";
button.style.color = "#000000";
button.style.fontFamily = "Arial";
button.style.fontSize = "20px";
button.style.cursor = "pointer";
button.style.outline = "none";
button.style.userSelect = "none";

document.body.appendChild(button);

// Check if the button is being clicked, and if it is, then alert "Hello!"

button.addEventListener("click", function () {
  var score = parseInt(prompt("Enter the high score you want to set: "));
  localStorage.setItem("_hscore", score);
});

// Check if the button is being dragged
// If it is, then set the button's position to the mouse's position

var dragging = false;

button.addEventListener("mousedown", function () {
  dragging = true;
});

document.addEventListener("mouseup", function () {
  dragging = false;
  // Cancel the button's drag if it is dragged out of the extension window
    if (parseInt(button.style.top) < 0) {
        button.style.top = "0px";
        }
    if (parseInt(button.style.left) < 0) {
        button.style.left = "0px";
        }
    if (parseInt(button.style.top) > window.innerHeight - 50) {
        button.style.top = window.innerHeight - 50 + "px";
        }
    if (parseInt(button.style.left) > window.innerWidth - 200) {
        button.style.left = window.innerWidth - 200 + "px";
        }



});


// Check if the page is refreshed, if it is, 

document.addEventListener("mousemove", function (e) {
  if (dragging == true) {
    button.style.top = e.clientY + "px";
    button.style.left = e.clientX + "px";
  }
});
