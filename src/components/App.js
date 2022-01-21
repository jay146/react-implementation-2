import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import notes from "../notes";
import Notes from "./Note";
console.log(notes);

function createNotes(noteitem) {
  return (
    <Notes
      key={noteitem.key}
      title={noteitem.title}
      content={noteitem.content}
    />
  );
}
function App() {
  return (
    <div>
      <Header />
      {/* <Note title="hi jay" content="my content" /> */}
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
