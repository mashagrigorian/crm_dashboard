import React from "react";
import "./App.css"; // You may have other CSS imports
import Dashboard from "./components/Dashboard"; // Import your Dashboard component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* You can include a header or other components here */}
      </header>
      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
