import { useState } from "react";
import Field from "./Field";

export default function Education({ formState }) {
  const [bullets, setBullets] = useState([
    <>
      <label htmlFor="text">Bullet 1</label>
      <Field
        type="text"
        id={`ed-bullet1`}
        bullet="ed-bullets"
        formData={formState[0]}
        setFormData={formState[1]}
      ></Field>
    </>,
  ]);
  return (
    <section className="flex flex-col">
      <h2>Educational Experience</h2>
      <label htmlFor="name">College/University</label>
      <Field
        type="text"
        id="college"
        placeholder="Massachusetts"
        formData={formState[0]}
        setFormData={formState[1]}
      ></Field>
      <label htmlFor="address">Address</label>
      <Field
        type="text"
        id="college-add"
        placeholder="New York City, USA"
        formData={formState[0]}
        setFormData={formState[1]}
      ></Field>
      <label htmlFor="text">Degree</label>
      <Field
        type="text"
        id="degree"
        placeholder="B.S. in Computer Science"
        formData={formState[0]}
        setFormData={formState[1]}
      ></Field>
      <label htmlFor="text">Date of Graduation</label>
      <Field
        type="text"
        id="grad"
        placeholder="March 2024"
        formData={formState[0]}
        setFormData={formState[1]}
      ></Field>
      {bullets}
      <button
        onClick={() => {
          setBullets([
            ...bullets,
            <>
              <label htmlFor="text">Bullet {bullets.length + 1}</label>
              <Field
                type="text"
                id={`ed-bullet${bullets.length + 1}`}
                bullet="ed-bullets"
                formData={formState[0]}
                setFormData={formState[1]}
              ></Field>
            </>,
          ]);
        }}
      >
        +
      </button>
    </section>
  );
}
