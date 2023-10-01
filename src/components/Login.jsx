// src/components/RightPart.js
import React from "react";

function RightPart() {
  return (
    <div className="right-part">
      {/* Password details form */}
      <form>
        <label>Name:</label>
        <input type="text" />
        {/* Add other input fields for password details */}
        <button>Copy Name</button>
        <button>Copy Password</button>
        <button>Copy Link</button>
        <button>Edit</button>
      </form>
      {/* Display comment and password color */}
      <div className="comment">Comment goes here</div>
      <div className="password-color">Password Color</div>
    </div>
  );
}

export default RightPart;
