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

  assert.isTrue(noteListDouble.addNoteCount === 1);
}

testControllerAddNote();

function testCreatesNoteListViewWithNoteListModel() {

  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  noteController.addNote("Hi Cosmin");

  function ElementDouble () {
    this.innerHTML = '';
  };

  var elementDouble = new ElementDouble();
  noteController.insertHTML(elementDouble);
  assert.isTrue(elementDouble.innerHTML === "<ul><li><div>Hi Cosmin</div></li></ul>");
};

testCreatesNoteListViewWithNoteListModel();
