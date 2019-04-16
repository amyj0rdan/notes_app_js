function instantiateNoteControllerTest() {
  var noteController = new NoteController();

  assert.isTrue(noteController instanceof NoteController);
}

instantiateNoteControllerTest();
