import React from "react";
import "./Sidebar.css";

function Sidebar({ togglePopup1, togglePopup2 }) {
  return (
    <div className="sidebar">
      <button onClick={togglePopup1}>Open Popup 1</button>
      <button onClick={togglePopup2}>Open Popup 2</button>
      {/* Add other sidebar content here */}
    </div>
  );
}

export default Sidebar;
