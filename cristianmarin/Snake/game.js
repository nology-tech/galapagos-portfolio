const snake = document.querySelector(".snake");
let food = document.querySelector(".food")
let moveBy = 25;
let direction = "right";




snake.style.position = "absolute";
snake.style.left = 0;
snake.style.top = 0;

// Food 

food.style.position = "absolute";
food.style.left = "50px";
food.style.top = "100px";

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      direction = "left";
      break;
    case "ArrowRight":
      direction = "right";
      break;
    case "ArrowUp":
      direction = "up";
      break;
    case "ArrowDown":
      direction = "down";
      break;
  }
});

// Snake Speed
setInterval(() => {
  switch (direction) {
    case "left":
      snake.style.left = parseInt(snake.style.left) - moveBy + "px";
      break;
    case "right":
      snake.style.left = parseInt(snake.style.left) + moveBy + "px";
      break;
    case "up":
      snake.style.top = parseInt(snake.style.top) - moveBy + "px";
      break;
    case "down":
      snake.style.top = parseInt(snake.style.top) + moveBy + "px";
      break;
  }
  // snake.style.top = parseInt(snake.style.top) + moveBy + "px";
  if (snake.style.left === food.style.left && snake.style.top === food.style.top) {
    onClick = document.querySelector(".food").style.display = "none"
  };

  console.log(direction)
}, 300);
