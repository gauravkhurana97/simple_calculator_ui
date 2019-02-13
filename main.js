
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) 
{
    return;

}   

    ;
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);



    
    

    document.querySelector(".clicks").addEventListener("click",(e)=>{
      button = e.target.closest("input");
      const audio = document.querySelector("#audi");
      button.classList.add("playing");
      audio.currentTime = 0;
      audio.play();
 })





document.querySelector("#speak").addEventListener("click",()=>{


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

let p = document.querySelector(".add_voice_text");
console.log(p);

recognition.addEventListener('result', e => {
const transcript = Array.from(e.results)
.map(result => result[0])
.map(result => result.transcript)
.join('');

var poopScript = transcript.replace(/into/gi, '*').replace(/by/gi, '/').replace(/multiply/gi, '/').replace(/divide/gi, '/').replace(/plus/gi, '+').replace(/mod/gi, '%').replace(/minus/gi, '-').replace(/by/gi, '/').replace(/one/gi, '1').replace(/two/gi, '2').replace(/three/gi, '3').replace(/four/gi, '4').replace(/five/gi, '5').replace(/six/gi, '6').replace(/seven/gi, '7').replace(/eight/gi, '8').replace(/nine/gi, '9');
console.log(poopScript);

p.value = poopScript;

setTimeout(()=>{
  p.value=eval(p.value);
},2000)

});

// recognition.addEventListener('end', recognition.start);

recognition.start();

})


