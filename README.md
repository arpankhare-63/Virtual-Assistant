# Virtual-Assistant
This is a basic of virtual assistant based on html,css and Js. 
# Voice Assistant using Speech Synthesis and Speech Recognition

This project is a basic voice assistant built using JavaScript, which leverages the **Speech Synthesis** and **Speech Recognition** APIs to allow interaction via voice commands. The assistant can respond to greetings, provide the current time, date, and open various websites based on your command.

## Features
- Greets the user based on the time of day.
- Recognizes user voice commands using the Web Speech API.
- Speaks responses back to the user using the SpeechSynthesis API.
- Opens websites such as YouTube, Facebook, Google, etc., on command.
- Handles basic questions like "What time is it?" or "What is today's date?"
- Option to search the internet when a command is not recognized.

## How It Works
1. **Speech Synthesis:** The `speak` function utilizes the `SpeechSynthesisUtterance` object to convert text to speech, with adjustable parameters for language, pitch, rate, and volume.
2. **Speech Recognition:** The project uses `SpeechRecognition` (or `webkitSpeechRecognition` for browsers that support it) to convert voice input to text. Based on the recognized text, it either answers the user or performs a specific action (e.g., opening a website).
3. **Command Handling:** The assistant can understand and respond to:
   - General greetings and questions.
   - Commands to open specific websites (e.g., "Open YouTube", "Open GitHub").
   - Time and date inquiries (e.g., "What is the time now?", "Tell me today's date").

## Supported Websites
The assistant can open the following websites based on voice commands:
- YouTube
- Instagram
- Facebook
- Twitter
- LinkedIn
- Reddit
- WhatsApp Web
- Gmail
- Amazon
- Netflix
- Spotify
- GitHub
- Flipkart
- And more...

## Usage
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/voice-assistant.git
   cd voice-assistant
2. Open the index.html file in a browser that supports the Web Speech API (such as Google Chrome).

3. Click the "Start" button to start interacting with the assistant.
