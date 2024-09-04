import Field from "./Field";

export default function Work({ id, formState }) {
  return (
    <section className="flex flex-col">
      <h2>Experience</h2>
      <label htmlFor="name">Job Title</label>
      <Field
        type="text"
        id="job"
        bullet={id}
        placeholder="Systems Engineer"
        formData={formState[0]}
        setFormData={formState[1]}
      ></Field>
      <label htmlFor="address">Company</label>
      <Field
        type="text"
        id="company"
        bullet={id}
        placeholder="Popeyes"
        formData={formState[0]}
        setFormData={formState[1]}
      ></Field>
      <label htmlFor="text">Address</label>
      <Field
        type="text"
        id="comp-add"
        bullet={id}
        placeholder="Long Beach California"
        formData={formState[0]}
        setFormData={formState[1]}
      ></Field>
      <label htmlFor="text">Date</label>
      <Field
        type="text"
        id="work-date"
        bullet={id}
        placeholder="March 2024"
        formData={formState[0]}
        setFormData={formState[1]}
      ></Field>
      <label htmlFor="text">Other</label>
      <Field
        type="text"
        id="work-other"
        bullet={id}
        placeholder="Dean's Lister"
        formData={formState[0]}
        setFormData={formState[1]}
      ></Field>
    </section>
  );
}
