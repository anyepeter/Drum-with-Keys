document.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const keys = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  keys.classList.add('play-color');
  audio.play();
  setTimeout(() => {
    keys.classList.remove('play-color');
  }, 50);
});
