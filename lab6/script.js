var notes = [];

function setup() {
  notes.push(document.getElementById("c"));
  notes.push(document.getElementById("csharp"));
  notes.push(document.getElementById("d"));
  notes.push(document.getElementById("dsharp"));
  notes.push(document.getElementById("e"));
  notes.push(document.getElementById("f"));
  notes.push(document.getElementById("fsharp"));
  notes.push(document.getElementById("g"));
  notes.push(document.getElementById("gsharp"));
  notes.push(document.getElementById("a"));
  notes.push(document.getElementById("asharp"));
  notes.push(document.getElementById("b"));
  notes.push(document.getElementById("cc"));
}

function playNote(index) {
  if (notes[index].paused) {
        notes[index].play();
    }
    else {
      notes[index].currentTime = 0;
    }
}

document.addEventListener('DOMContentLoaded', setup);
