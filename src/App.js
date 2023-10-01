import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Login />
    </div>
  );
}

export default App;
