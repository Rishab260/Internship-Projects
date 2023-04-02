var notesContainer = document.getElementById("notes-container");
var newNoteButton = document.getElementById("new-note");
newNoteButton.addEventListener("click", function(event) {
  event.preventDefault();
  createNote();
});

function createNote() {
    var note = document.createElement("div");
    note.className = "note";
  
    var titleBar = document.createElement("div");
    titleBar.className = "note-title-bar";
  
    var title = document.createElement("h5");
    title.innerHTML = Date();
    titleBar.appendChild(title);
  
    var options = document.createElement("div");
    options.className = "note-options";
  
    var editLink = document.createElement("a");
    editLink.href = "#";
    editLink.innerHTML = "Edit";
    editLink.addEventListener("click", function(event) {
      event.preventDefault();
      makeNoteEditable(textarea);
    });
    options.appendChild(editLink);
  
    var deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.innerHTML = "Delete";
    deleteLink.addEventListener("click", function(event) {
      event.preventDefault();
      deleteNote(noteWrapper);
    });
    options.appendChild(deleteLink);
  
    var downloadLink = document.createElement("a");
    downloadLink.href = "#";
    downloadLink.innerHTML = "Download";
    downloadLink.addEventListener("click", function(event) {
      event.preventDefault();
      downloadNoteText(textarea);
    });
    options.appendChild(downloadLink);
  
    titleBar.appendChild(options);
    note.appendChild(titleBar);
  
    var noteWrapper = document.createElement("div");
    noteWrapper.className = "note-wrapper";
    noteWrapper.appendChild(note);
  
    var textarea = document.createElement("textarea");
    textarea.setAttribute("readonly", true);
    noteWrapper.appendChild(textarea);
  
    notesContainer.appendChild(noteWrapper);
  }
  
  
function makeNoteEditable(textarea) {
    textarea.removeAttribute("readonly");
    textarea.focus();
    /*var currentText = textarea.value;
    textarea.value = "";
    textarea.value = currentText;*/
  
    textarea.addEventListener("blur", function() {
      textarea.setAttribute("readonly", true);
    });
  }
  

function deleteNote(note) {
  var confirmDelete = confirm("Are you sure you want to delete this note?");
  if (confirmDelete) {
    notesContainer.removeChild(note);
  }
}

function downloadNoteText(textarea) {
  var noteText = textarea.value;

  var downloadLink = document.createElement("a");
  downloadLink.href = "data:text/plain;charset=utf-8," + encodeURIComponent(noteText);
  downloadLink.download = "note.txt";
  downloadLink.click();
}
