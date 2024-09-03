import Field from "./Field";

export default function Education({ formState }) {
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
      <label htmlFor="text">Other</label>
      <Field
        type="text"
        id="other"
        placeholder="Dean's Lister"
        formData={formState[0]}
        setFormData={formState[1]}
      ></Field>
    </section>
  );
}
