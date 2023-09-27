import React from "react";
import Home from "./pages/Home";
import "./styles/App.css";

function App() {
  return (
    <div data-testid="app" className="app background">
      <Home />
    </div>
  );
}

export default App;
