window.addEventListener('keydown', e =>{
    const audio = document.querySelector(`audio[data-keys="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-keys="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('play');
    
})

const keys = document.querySelectorAll('.key');
console.log(keys);
keys.forEach(key => {
    key.addEventListener('transitionend', stopF);
})

function stopF(e){
    if(e.propertyName !== 'transform') return;
    console.log(this);
    this.classList.remove('play');

}