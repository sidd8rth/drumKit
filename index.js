// detecting button pressed on screen
for(let i = 0; i < document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    let buttonInnerHtml = this.textContent;
    playSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

// detecting keypress on keyboard
// here we use whole document to get to know the pressed key
document.addEventListener('keypress', function(event){
    playSound(event.key);
    buttonAnimation(event.key);
})


function playSound(x){
  switch (x) {
    case 'w':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case 'a':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case 's':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case 'd':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

    case 'j':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

    case 'k':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    case 'l':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

    default:
      console.log(buttonInnerHtml);
  }
}
function buttonAnimation(key){
  let activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove('pressed');
  }, 100);
}
