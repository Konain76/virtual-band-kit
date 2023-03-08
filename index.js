// document.querySelectorAll("button").addEventListener("click", function(){
//   alert("Welcome to Virtual Band");
// });

for(var i=0;i<7;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    // this.style.color="white";

    var btnvalue = this.innerHTML;
    dothis(btnvalue);
// detecting button press
    addAnimation(btnvalue);
  });
}
document.addEventListener("keydown", function(event){
  // detecting key press
  dothis(event.key);
  addAnimation(event.key);

})

function dothis(key){
  switch (key) {
    case "w":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
      break;
     case "a":
     var tom3 = new Audio("sounds/tom-3.mp3");
     tom3.play();
       break;
      case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
        break;
        case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
          break;
          case "j":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
            break;
            case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
              break;
              case "l":
              var snare = new Audio("sounds/snare.mp3");
              snare.play();
                break;

    default:


  }

}
function addAnimation(currentkey){
  var activebutton = document.querySelector("."+currentkey);
  activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed");
  },100);

}
