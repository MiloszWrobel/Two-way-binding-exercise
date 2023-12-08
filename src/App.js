import React, { useState } from "react";
import Review from "./Review";

// don't change the Component name "App"
function App() {
  const [studentComment, setComment] = useState("");
  function handleChange(event) {
    setComment(event.target.value);
  }
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea onChange={handleChange} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={studentComment} student="Student1" />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;
