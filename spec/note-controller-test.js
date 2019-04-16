function instantiateNoteControllerTest() {
  var noteController = new NoteController();

  assert.isTrue(noteController instanceof NoteController);
}

instantiateNoteControllerTest();

function noteControllerTakesANotelist() {
  var noteList = () => {};
  var noteController = new NoteController(noteList);

  assert.isTrue(noteController.noteList === noteList);
}

noteControllerTakesANotelist();
