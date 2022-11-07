let keys = document.querySelectorAll('.key');


for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function () {
      let audio = new Audio('sounds/boom.wav');
      audio.play();
  });
}




// buttons.addEventListener('click', handleClick);