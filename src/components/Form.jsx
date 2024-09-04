import Education from "./Education";
import General from "./General";
import Work from "./Work";
export default function Form(props) {
  return (
    <section className="flex flex-col form">
      <header>
        <h1>CV Generator App</h1>
      </header>
      <General {...props} />
      <Education {...props} />
      <Work {...props} />
    </section>
  );
}
