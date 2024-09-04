import { useState } from "react";
import Education from "./Education";
import General from "./General";
import Work from "./Work";
export default function Form(props) {
  const [bullets, setBullets] = useState([
    <Work id="work-bullet1" {...props} />,
  ]);
  return (
    <section className="flex flex-col form">
      <header>
        <h1>CV Generator App</h1>
      </header>
      <General {...props} />
      <Education {...props} />
      {bullets}
      <button
        onClick={() => {
          setBullets([
            ...bullets,
            <Work id={`work-bullet${bullets.length + 1}`} {...props} />,
          ]);
        }}
      >
        +
      </button>
    </section>
  );
}
