var animFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame    || window.oRequestAnimationFrame      || window.msRequestAnimationFrame     || null ;

window.addEventListener('mousedown', saveMouse, false);

//Creating instances of canvas and the canvas' 2d drawing
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

function mainLoop() {
  drawBackground();
}

function drawBackground() {
  ctx.fillStyle="#000";
  ctx.fillRect(50, 50, 100, 100);
}

//This loops the animation frames for animation!!!!
var recursiveAnim = function() {
          mainLoop();
          animFrame(recursiveAnim);
    };
animFrame(recursiveAnim);

// Functions for saving a mouse click #############################################
function saveMouse(e) {
  var pos = getMousePos(e);
  mouseData[0] = pos.x;
  mouseData[1] = pos.y;
}

function getMousePos(evt) {
  var rect = c.getBoundingClientRect();
  //Return mouse location related to canvas with JSON format
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};
//End mouse click stuff #############################################
