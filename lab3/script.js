var title;
var notes;

function setup(){
  title = document.getElementById("title");
  notes = document.getElementById("notes");

  title.value = window.localStorage.getItem('title');
  notes.value = window.localStorage.getItem('notes');

}

function updateText(){
  title = document.getElementById("title");
  notes = document.getElementById("notes");
  window.localStorage.setItem('title', title.value);
  window.localStorage.setItem('notes', notes.value);
}

function clearText() {
  //title = document.getElementById("title");
  //notes = document.getElementById("notes");

//  title.value = "";
//  notes.value = "";

  document.getElementById("title").value = "";
  document.getElementById("notes").value = "";

  window.localStorage.setItem('title', "");
  window.localStorage.setItem('notes', "");

  alert("Data cleared.");

}

document.addEventListener('DOMContentLoaded', setup);
