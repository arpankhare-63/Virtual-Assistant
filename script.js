    let btn = document.querySelector("#btn");
    let content = document.querySelector("#content");
    let listen = document.querySelector("#listening");
    function speak(text) {
        let text_speak = new SpeechSynthesisUtterance(text); // created object of SpeechSynthesisUtterance
        text_speak.lang = 'hn-IN'; // set language
        text_speak.rate = 1;
        text_speak.pitch = 1;
        text_speak.volume = 1;
        window.speechSynthesis.speak(text_speak); // use speech synthesis API to speak the text
    }

    function wishMe() {
        let today = new Date();
        let hour = today.getHours();
        console.log(hour);
        if (hour >= 0 && hour < 12) {
            speak('Good Morning Sir');
        } else if (hour >= 12 && hour < 16) {
            speak('Good Afternoon Sir');
        } else if (hour >= 16 && hour < 20) {
            speak('Good Evening Sir');
        } else {
            speak('Good Night Sir');
        }
    }

    window.addEventListener('load', () => {
        wishMe(); // Call wishMe on page load
    });

    // Now using Speech Recognition
    let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = new speechRecognition();
    recognition.onresult = (event) => {
        let currentIndex = event.resultIndex;
        let transcript = event.results[currentIndex][0].transcript;
        content.innerText = transcript;
        takeCommand(transcript.toLowerCase()); // Call takeCommand with lowercase transcript
    };

    // Add click event to start recognition
    btn.addEventListener("click", () => {
        recognition.start()
        btn.style.display="none"
        listen.style.display="block"
    });


    const websiteMap = {
        "youtube": "https://www.youtube.com/",
        "instagram": "https://www.instagram.com/",
        "insta": "https://www.instagram.com/",
        "facebook": "https://www.facebook.com/",
        "twitter": "https://www.twitter.com/",
        "cricbuzz": "https://www.cricbuzz.com/",
        "google": "https://www.google.com/",
        "linkedin": "https://www.linkedin.com/",
        "reddit": "https://www.reddit.com/",
        "whatsapp": "whatsapp://",
        "whatsappweb": "https://web.whatsapp.com/",
        "gmail": "https://mail.google.com/",
        "amazon": "https://www.amazon.com/",
        "netflix": "https://www.netflix.com/",
        "spotify": "https://www.spotify.com/",
        "github": "https://www.github.com/",
        "pinterest": "https://www.pinterest.com/",
        "flipkart": "https://www.flipkart.com/",
        "yahoo": "https://www.yahoo.com/",
        "quora": "https://www.quora.com/",
        "bing": "https://www.bing.com/",
        "medium": "https://www.medium.com/",
        "snapchat": "https://www.snapchat.com/",
        "tiktok": "https://www.tiktok.com/",
        "stackoverflow": "https://stackoverflow.com/",
        "wikipedia": "https://www.wikipedia.org/",
        "hotstar": "https://www.hotstar.com/",
        "zomato": "https://www.zomato.com/",
        "swiggy": "https://www.swiggy.com/",
        "hackernews": "https://news.ycombinator.com/",
        "paytm": "https://paytm.com/",
        "github": "https://github.com/",
        "dropbox": "https://www.dropbox.com/",
        "canva": "https://www.canva.com/",
        "adobe": "https://www.adobe.com/",
        "chatgpt": "https://www.chatgpt.com/",
        "chat GPT": "https://www.chatgpt.com/",
        "weather": "https://openweathermap.org/",
        "newsapi": "https://newsapi.org/",
        "translate": "https://translate.google.com/",
        "calculator": "calculator://",
        // "what is time": "https://www.timeanddate.com/",
        "reminder": "reminder://",
        "note": "notes://",
        "email": "mailto:",
        // "search": "https://www.google.com/search?q=",
        "translate": "translate://",

    };


    // Create takeCommand function for Assistant Intelligence
    function takeCommand(message) {
        btn.style.display="flex" // this will show when you end speaking
        listen.style.display="none" // this will disappear now
        if (message.includes("hello") || message.includes("hey")) {
            speak("Hello Sir, How can I help you?");
        } else if (message.includes("who are you") || message.includes("are you")|| message.includes("hu r u")) {
            speak("I am a virtual Assistant, designed to assist you in various tasks. I can provide you with weather updates, news, and more.");
        } else if (message.includes("how are you")) {
            speak("I'm doing well, thank you for asking. How can I assist you today?");
        } else if (message.includes("who created you") || message.includes("created you") || message.includes("who made you")) {
            speak("I am created by Arpan Sir");}
            else if (message.includes("what is time")|| message.includes("What is time now") || message.includes("tell me what time is now")) {
                let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"});
                speak(`The current time is ${time}`);   


            }
            else if (message.includes("tell me today Date")|| message.includes("Which day is today") || message.includes("tell me what is Date today")) {
                let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"});
                speak(`Today is ${date}`);   


            }


        else if (message.includes("open")) {
            let websiteFound = false;

            // Loop through websiteMap keys to find a match
            for (let keyword in websiteMap) {
                if (message.includes(keyword)) {
                    speak(`Opening ${keyword}`);
                    window.open(websiteMap[keyword]);
                    websiteFound = true;
                    break;
                }
            }
        } 
        else{
        let finaltext= "This is what i found on internet regarding"+message.replace("Jarves","")||message.replace("Jarvis","")||message.replace("hello jarvis","")
            speak(finaltext)
            window.open(`https://www.google.com/search?q=${message}`)
        }
        // else {
        //     speak("Sorry, I didn't understand that. Can you repeat?");
        // }
    }

    // Optional: Add error handling for recognition
    recognition.onerror = (event) => {
        speak("Sorry, I couldn't recognize your speech. Please try again.");
    };
