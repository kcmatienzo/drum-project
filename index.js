let keys = document.querySelectorAll('.key');


for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', function() {
    let keyText = this.textContent.toLowerCase();
    checkKey(keyText);
    pressedAnimation(keyText);
  })
}

document.addEventListener('keydown', function(e) {
  checkKey(e.key);
  pressedAnimation(e.key);
})

function checkKey(key) {

  switch (key) {
    case 'a':
      let tom = new Audio('sounds/tom.wav');
      tom.play();
      break;

    case 's':
      let tink = new Audio('sounds/tink.wav');
      tink.play();
      break;

    case 'd':
      let snare = new Audio('sounds/snare.wav');
      snare.play();
      break;

    case 'f':
      let ride = new Audio('sounds/ride.wav');
      ride.play();
      break;

    case 'g':
      let openhat = new Audio('sounds/openhat.wav');
      openhat.play();
      break;

    case 'h':
      let kick = new Audio('sounds/kick.wav');
      kick.play();
      break;

    case 'j':
      let hihat = new Audio('sounds/hihat.wav');
      hihat.play();
      break;

    case 'k':
      let clap = new Audio('sounds/clap.wav');
      clap.play();
      break;

    case 'l':
      let boom = new Audio('sounds/boom.wav');
      boom.play();
      break;

    default:
      break;
  }
}

function pressedAnimation(currentKey) {
  let activeBtn = document.querySelector('.' + currentKey);
  console.log(activeBtn);

  activeBtn.classList.add('pressed');

  setTimeout(() => {
    activeBtn.classList.remove('pressed')
  }, 100);
}
