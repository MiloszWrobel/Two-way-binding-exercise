import React, { useState } from "react";
import Review from "./Review";

// don't change the Component name "App"
function App() {
  const [studentComment, setComment] = useState("");
  const [studentName, setName] = useState("");
  function handleCommentChange(event) {
    setComment(event.target.value);
  }
  function handleNameChange(event) {
    setName(event.target.value);
  }
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea
            type="text"
            required
            value={studentComment}
            onChange={handleCommentChange}
          />
        </p>
        <p>
          <label>Your Name</label>
          <input
            type="text"
            required
            value={studentName}
            onChange={handleNameChange}
          />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={studentComment} student={studentName} />

        <p>
          <button>Save</button>
          {/*This is here for decorative purposes it has no functionality*/}
        </p>
      </section>
    </>
  );
}

export default App;
