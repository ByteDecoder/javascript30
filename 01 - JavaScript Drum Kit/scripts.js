const KEYBOARD_KEYS = {
  a: 65,
  s: 83,
  d: 68,
  f: 70,
  g: 71,
  h: 72,
  j: 74,
  k: 75,
  l: 76
}

function playSound(event) {
  const keyPressed = event.key;
  const activatedLetters = Object.keys(KEYBOARD_KEYS);
  const dataKeyNumbers = Object.values(KEYBOARD_KEYS);

  // event.keyCode is the way to get the number associated with the key automatically
  // instead of running through the object, but maybe not as reliable. Being deprecated.
  // Decided to keep the more complex solution for reference

  for (let i = 0; i < activatedLetters.length; i++) {
    if (keyPressed === activatedLetters[i]) {
      const sharedNumber = dataKeyNumbers[i];
      const targetKey = document.querySelector(`.key[data-key="${sharedNumber}"]`);
      const targetAudio = document.querySelector(`audio[data-key="${sharedNumber}"]`);

      targetKey.classList.add("playing");
      targetAudio.currentTime = 0;
      targetAudio.play();
    }
  }
};

const ALL_KEYS = document.querySelectorAll(".key");

ALL_KEYS.forEach(key => key.addEventListener("transitionend", 
  function() {
    key.classList.remove("playing");
  })
); 

document.addEventListener("keydown", playSound);
