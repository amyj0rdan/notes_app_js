(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
  }

  NoteController.prototype.addNote = function (text) {
    return this.noteList.addNote(text);
  };

  NoteController.prototype.insertHTML = function () {
    let noteListView = new NoteListView(this.noteList);
    document.getElementById("app").innerHTML = noteListView.returnHTML();
  };

  exports.NoteController = NoteController;
})(this);
