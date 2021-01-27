const btn = document.querySelector('.talk');
const btnStop = document.querySelector('.talkStop');
const content = document.querySelector('.speechContent');
const status = document.querySelector('#speechStatus');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-UK';
recognition.continuous = true;

recognition.onstart = function() {
    document.getElementById("speechStatus").classList.add('text-success');
    document.getElementById("speechStatus").innerHTML = "listening"
    document.getElementById("speechStatus").classList.remove('text-danger');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;

    
    content.textContent = (content.innerHTML + transcript);
};

recognition.onend = function() {
    document.getElementById("speechStatus").classList.add('text-danger');
    document.getElementById("speechStatus").innerHTML = "not listening"
    document.getElementById("speechStatus").classList.remove('text-success');
}

btn.addEventListener('click', () => {
    recognition.start();
});

btnStop.addEventListener('click', () => {
    recognition.stop();
    document.getElementById("speechStatus").classList.add('text-danger');
    document.getElementById("speechStatus").innerHTML = "not listening"
    document.getElementById("speechStatus").classList.remove('text-success');
});