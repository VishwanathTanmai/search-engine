const turn_on = document.querySelector(".turn_on");
const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 2;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning sir");
    }

    else if(hr >= 12 && hr <= 17) {
        speak("Good Afternoon sir");
    }

    else {
        speak("Good Evening sir");
    }
}


window.addEventListener('load', ()=>{
    speak("Activating AI ASSISTANT");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello sir";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine sir tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('what is your name')) {
        const finalText = "My name is AI ASSISTANT";
        speech.text = finalText;
    }

    else if(message.includes('who invented you') || message.includes("who made you")){
        const finalText = "I was invented by vishwanath tanmai";
        speech.text = finalText;
    }


    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open whatsapp')) {
        window.open("https://web.whatsapp.com/", "_blank");
        const finalText = "Opening whatsapp";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }
    
    else if(message.includes('open amazon')) {
        window.open("https://amazon.com", "_blank");
        const finalText = "Opening amazon";
        speech.text = finalText;
    }

    else if(message.includes('open myntra')) {
        window.open("https://myntra.com", "_blank");
        const finalText = "Opening myntra";
        speech.text = finalText;
    }

    else if(message.includes('open vtop')) {
        window.open("https://vtop.vit.ac.in/vtop/open/page", "_blank");
        const finalText = "Opening vtop";
        speech.text = finalText;
    }
    
    else if(message.includes('open hotstar')) {
        window.open("https://hotstar.com", "_blank");
        const finalText = "Opening vtop";
        speech.text = finalText;
    }
    
    else if(message.includes('open netflix')) {
        window.open("https://netflix.com", "_blank");
        const finalText = "Opening vtop";
        speech.text = finalText;
    }
    
    else if(message.includes('open prime')) {
        window.open("https://primevideo.com", "_blank");
        const finalText = "Opening vtop";
        speech.text = finalText;
    }

    else if(message.includes('open bookmyshow')) {
        window.open("https://in.bookmyshow.com/", "_blank");
        const finalText = "Opening bookmyshow";
        speech.text = finalText;
    }

    else if(message.includes('open northstar')) {
        window.open("https://northstarmovies.netlify.app", "_blank");
        const finalText = "Opening amazon";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are') || message.includes('How to')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google sir";
        speech.text = finalText;
    }

    else if(message.includes('play')) {
        window.open(`https://www.youtube.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on youtube regarding " + message + "on youtube sir";
        speech.text = finalText;
    }


    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('what is today date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }


    speech.volume = 1;
    speech.pitch = 2;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}

