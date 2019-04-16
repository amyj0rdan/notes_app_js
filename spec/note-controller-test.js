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

function testControllerAddNote() {
  function NoteListDouble() {
    this.addNoteCount = 0;
  }

  NoteListDouble.prototype = {
    addNote: function() {
      this.addNoteCount += 1;
    }
  };

  var noteListDouble = new NoteListDouble();
  var noteController = new NoteController(noteListDouble);

  noteController.addNote("something");

  assert.isTrue(NoteListDouble.addNoteCount !== 1);
}

testControllerAddNote();
