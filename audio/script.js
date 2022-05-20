var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var grammar = '#JSGF V1.0; grammar things; public <thing> = dog | cat | fox | frog | lizard | help | about;';
var things = ["dog", "cat", "fox", "frog", "lizard"];

var images;

var synth;
var msg;

var button;
var canvas;
var ctx;
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var toggled = false;

function toggleSpeak() {
  if (toggled) { //stop
    speechStop();
  } else { //activate
    speechStart();
  }
}

function speechStart() {
  synth.cancel();
  toggled = true;
  button.innerText = "Stop";
  recognition.start();
}

function speechStop() {
  toggled = false;
  button.innerText = "Speak";
  recognition.stop();
}

function setup() {

  synth = window.speechSynthesis;

  images = {
    "dog" : document.getElementById("dog"),
    "cat" : document.getElementById("cat"),
    "fox" : document.getElementById("fox"),
    "frog" : document.getElementById("frog"),
    "lizard" : document.getElementById("lizard")
  }

  button = document.getElementById("button");
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");

  resetCanvas();
}

function resetCanvas(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.textAlign = "left";
  ctx.font="20px arial";
  ctx.fillText("words: dog, cat, fox, frog, lizard", 20, 20);
}

function speak(text){
  msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}

recognition.onresult = function(event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at the last position.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  var output = event.results[0][0].transcript;

  console.log('Result received: ' + output + '.');
  console.log('Confidence: ' + event.results[0][0].confidence);

  switch (output) {
    case "help":
    speak("Say a name of the object on the screen. Say 'About', to hear about the program.");
    break;
    case "about":
    speak("Adrian Kloskowski. Copyright 2022.");
    break;
    default:
    resetCanvas();
    if (things.includes(output)) {
      var imgResult = images[output];
      ctx.drawImage(imgResult, 100, 100);
      speak("Wow! What a cute " + output + "!");
    } else {
      ctx.textAlign = "center";
      ctx.fillText("Word Unknown", 400, 200);
      ctx.fillText("Output: " + output, 400, 250);
      speak("Sorry. I didn't get that.");
    }
  }

  speechStop();
}

document.addEventListener('DOMContentLoaded', setup);
