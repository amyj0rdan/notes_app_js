(function(exports) {

  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.returnHTML = function() {
    var list = this.noteList.getNotes();

    var html = "<ul>"

    for (element of list) {
      html += "<li><div>" + element.getText() + "</div></li>"
    }

    return html + "</ul>"
  }

  exports.NoteListView = NoteListView

})(this);
