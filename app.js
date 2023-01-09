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

const buttonEl = document.querySelectorAll('div');
buttonEl.forEach((element) =>{
  element.addEventListener('click', ()=>{
    const audio = document.querySelectorAll(`audio`);
    audio.forEach((items) => {
      if(items.dataset.key == element.dataset.key){
        items.play();
      }
    })
  })
})