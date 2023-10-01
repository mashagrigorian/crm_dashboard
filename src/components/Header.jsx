import React from "react";

function CenterPart() {
  return (
    <div className="center-part">
      {/* Table header */}
      <div className="table-header">
        <div>Title</div>
        {/* Add more headers as needed */}
      </div>
      {/* Table content */}
      <div className="table-content">
        {/* Render CRM data here */}
        {/* Example row */}
        <div>Text Token</div>
        <div>Password Name</div>
        <div>Link</div>
        {/* Add more rows as needed */}
      </div>
      {/* Add buttons to create new group/password entries */}
      <button>Create Group</button>
      <button>Create Password</button>
    </div>
  );
}

export default CenterPart;
