window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const buttonPress = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  buttonPress.classList.add('play-color');

  setTimeout(() => {
    buttonPress.classList.remove('play-color');
  }, 50);
});