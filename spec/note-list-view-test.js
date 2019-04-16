function testReturnsStringOfHTML() {
  var noteList = new NoteList();

  noteList.addNote("Here is note one")
  noteList.addNote("Here is another note")

  var noteListView = new NoteListView(noteList);

  assert.isTrue(noteListView.returnHTML() === "<ul><li><div>Here is note one</div></li><li><div>Here is another note</div></li></ul>")

}

testReturnsStringOfHTML();
