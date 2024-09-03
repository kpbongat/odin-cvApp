import General from "./General";

export default function Form(props) {
  return (
    <section className="flex flex-col form">
      <header>
        <h1>CV Generator App</h1>
      </header>
      <General {...props} />
    </section>
  );
}
