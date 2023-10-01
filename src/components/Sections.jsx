import React from "react";
import "./Sections.css";

function Sections({ sections, onSectionClick }) {
  return (
    <div className="sections">
      <ul>
        {sections.map((section) => (
          <li key={section.id} onClick={() => onSectionClick(section)}>
            {section.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sections;
