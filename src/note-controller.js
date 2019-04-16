(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
  }

  NoteController.prototype.addNote = function(text) {
    this.noteList.addNote(text);
  };

  exports.NoteController = NoteController;
})(this);
