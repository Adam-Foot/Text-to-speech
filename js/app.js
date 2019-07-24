const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


const greetings = [
    "I'm okay thankyou",
    "Don't talk to me, I wish to be left alone",
    "I'm good, are you okay?"
];

const steven = [
    "Piss off Steven"
];


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log("Voice is activated.");
};

recognition.onresult = function(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;

    console.log(transcript);
    content.textContent = transcript;
    readOutLoud(transcript);
};

btn.addEventListener('click', () => {
    recognition.start();
});


function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    if(message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if(message.includes('my name is Steven')) {
        const steveText = steven[Math.floor(Math.random() * steven.length)];
        speech.text = steveText;
    }

    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1; 

    window.speechSynthesis.speak(speech);
};