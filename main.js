document.querySelector(".clicks").addEventListener("click",(e)=>{
  button = e.target.closest("input");
  // console.log();
  let msgstring = `${button.id}`
  
  message_value(msgstring);

})

function message_value(messageinfo){

const msg = new SpeechSynthesisUtterance();
// let voices = [];
msg.text = messageinfo;
console.log(msg);


function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

toggle();
}





  
  






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



 



