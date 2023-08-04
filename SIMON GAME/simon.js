var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var randomNumber;
var userClickedPattern = [];
var started = false;
var level = 0;

function flash(color) {
  $("#" + color).fadeOut(250).fadeIn(250);
  playSound(color);
}

function playSound(color) {
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

function newSequence() {
  userClickedPattern = []; // Reset the user's clicked pattern
  level++;
  $("#level-title").text("Level " + level);
  randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  flash(randomChosenColor);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("Correct!");
    if (userClickedPattern.length === gamePattern.length) {
      // User has completed the current level
      setTimeout(function () {
        newSequence();
      }, 1000);
    }
  } else {
    console.log("Wrong answer!");
    var wrong = new Audio("sounds/wrong.mp3");
    wrong.play();
    
    $('body').css('background', 'red');
setTimeout(function() {
  $('body').css('background', 'linear-gradient(90deg, rgba(4,4,59,1) 0%, rgba(78,78,125,1) 35%, rgba(12,32,63,1) 100%)');
}, 150);

    

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over ! Press Any Key to Restart.");
    started = false;
    gamePattern = [];
    level = 0;
  }
}

$(document).keypress(function (event) {
  if (!started) {
    started = true;
    newSequence();
  }
});

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  flash(userChosenColor);
  playSound(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

function showGameDescription() {
  var popup = document.getElementById('gameDescriptionPopup');
  popup.style.display = 'block';
}

function showGameRules() {
  var popup = document.getElementById('gameRulesPopup');
  popup.style.display = 'block';
}

function closeGameDescription() {
  var popup = document.getElementById('gameDescriptionPopup');
  popup.style.display = 'none';
}

function closeGameRules() {
  var popup = document.getElementById('gameRulesPopup');
  popup.style.display = 'none';
}
































