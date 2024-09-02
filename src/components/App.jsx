import { useState } from "react";
import "../styles/index.css";
import Resume from "./Resume";

function App() {
  return (
    <main className="flex">
      <h1>CV Generator App</h1>
      <Resume />
    </main>
  );
}

export default App;
