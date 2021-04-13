$(document).ready(function () {
  // ---------------
  // INITIALIZATIONS
  // ---------------
  let canvas = $("#myCanvas")[0];
  let ctx = canvas.getContext("2d");
  let width = $("#myCanvas").width();
  let height = $("#myCanvas").height();
  let cw = 15;
  let food;
  let snake;
  let direction = "RIGHT";
  let ingame = false
  let name;
  
  // button to get input from user
  var button = document.getElementById("b1");
    button.addEventListener("click", function(){
        name = document.getElementById("input").value;
        document.getElementById("input").value = "";
        ingame = true;
        $("#type").hide();
        $("#hi").text(name + "'s");
    })
    
    //Re-play game button
    var button2 = document.getElementById("ha");
    button2.addEventListener("click", function(){
        ingame = false;
        placeFood();
        placeSnake();
        $("#gameover").hide();
        $("#type").show();
        $("#current").text(0);
    })
    
    
  // --------------
  // MAIN FUNCTIONS
  // --------------

  // update every .1 second to keep the game playing, or
  // update the position of the player and see if need to
  // re-generate the canvas/food/snake
  let gameloop = setInterval(update, 100);

  // initialization of the snake and the food using functions
  // defined below
  placeFood();
  paint_cell(food.x, food.y, "#abdbe3");
  placeSnake();
  paint_cell(snake.x, snake.y, "green");

  // function that updates the current status of player
  // if the player hit the border
  // if the player got the food
  // re-generate the canvas and the player and the food

  // the main function that keeps the game going

  function update() {
      if (ingame){
        if (direction == "RIGHT") snake.x = snake.x + 1;
        else if (direction == "LEFT") snake.x = snake.x - 1;
        else if (direction == "UP") snake.y = snake.y - 1;
        else if (direction == "DOWN") snake.y = snake.y + 1;

        check_borders();
        check_food();
        blank();
        paint_cell(food.x, food.y, "abdbe3");
        paint_cell(snake.x, snake.y, "green");
      }
  }

  // ----------------
  // HELPER FUNCTIONS
  // ----------------

  // when the player hits the wall, clearInterval here
  function showGameOver() {
    ingame = false;
    let current = $("#current").text();
    $("#myfinal").text(current);
    $("#gameover").fadeIn();
  }


  // randomly generate a food on the canvas
  function placeFood() {
    food = {
      x: Math.round((Math.random() * (width - cw)) / cw),
      y: Math.round((Math.random() * (height - cw)) / cw),
    };
  }

  // place the snake at the start of the game randomly
  function placeSnake() {
    snake = {
      x: Math.round((Math.random() * (width - cw)) / cw),
      y: Math.round((Math.random() * (height - cw)) / cw),
    };
  }

  // paint the canvas
  function blank() {
    ctx.fillStyle = "#Dbf5df";
    ctx.fillRect(0, 0, width, height);
  }

  // check if the player hits the border
  function check_borders() {
    if (
      snake.x < 0 ||
      snake.x > (width - cw) / cw ||
      snake.y < 0 ||
      snake.y > (height - cw) / cw
    ) {
//      clearInterval(gameloop) and append item to list; 
        var item = document.createElement("li");
        let current = $("#current").text();

        item.append(name + ": " + current);
        document.getElementById("list").append(item);
      showGameOver();
    }
  }

  // generic function to paint the cell on the canvas to be either
  // the food or the snake depending on the input
  function paint_cell(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * cw, y * cw, cw, cw);
    ctx.strokeStyle = "white";
    ctx.strokeRect(x * cw, y * cw, cw, cw);
  }

  // check if the player hits the food, if so, update current score
  function check_food() {
    if (food.x == snake.x && food.y == snake.y) {
      let current = parseInt($("#current").text());
      current += 1;
      $("#current").text(current);
      placeFood();
    }
  }

  // read in which direction the player is going / which key
  // is being pressed
  // after detecting the key, also check if the player hits the
  // food, if so, update accordingly as did above
  $(document).keydown(function (event) {
    let key = event.which;
    if (ingame){
        
        if (key == "37") {
          snake.x -= 1;
          direction = "LEFT";
        } else if (key == "38") {
          snake.y -= 1;
          direction = "UP";
        } else if (key == "39") {
          snake.x += 1;
          direction = "RIGHT";
        } else if (key == "40") {
          snake.y += 1;
          direction = "DOWN";
        }
        check_food();
        blank();
        let color = "grey";
        paint_cell(food.x, food.y, color);
        color = "green";
        paint_cell(snake.x, snake.y, color);
    }
  });
});
