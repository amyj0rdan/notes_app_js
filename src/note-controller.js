(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.addNote = function(text) {
    this.noteList.addNote(text);
  };

  NoteController.prototype.insertHTML = function (element = document.getElementById('app')) {
    element.innerHTML = this.noteListView.returnHTML();
  };

  exports.NoteController = NoteController;
})(this);
