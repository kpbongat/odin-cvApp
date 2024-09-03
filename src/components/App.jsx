import { useState } from "react";
import "../styles/index.css";
import Resume from "./Resume";
import Form from "./Form";

function App() {
  const [formData, setFormData] = useState({});
  return (
    <main className="flex">
      <Form formState={[formData, setFormData]} />
      <Resume />
    </main>
  );
}

export default App;
