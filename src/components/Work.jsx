import Field from "./Field";

export default function Education({ formState }) {
  return (
    <section className="flex flex-col">
      <h2>Experience</h2>
      <label htmlFor="name">Job Title</label>
      <Field
        type="text"
        id="job"
        placeholder="Systems Engineer"
        formData={formState[0]}
        setFormData={formState[1]}
      ></Field>
      <label htmlFor="address">Company</label>
      <Field
        type="text"
        id="company"
        placeholder="Popeyes"
        formData={formState[0]}
        setFormData={formState[1]}
      ></Field>
      <label htmlFor="text">Address</label>
      <Field
        type="text"
        id="comp-add"
        placeholder="Long Beach California"
        formData={formState[0]}
        setFormData={formState[1]}
      ></Field>
      <label htmlFor="text">Date</label>
      <Field
        type="text"
        id="work-date"
        placeholder="March 2024"
        formData={formState[0]}
        setFormData={formState[1]}
      ></Field>
      <label htmlFor="text">Other</label>
      <Field
        type="text"
        id="work-other"
        placeholder="Dean's Lister"
        formData={formState[0]}
        setFormData={formState[1]}
      ></Field>
    </section>
  );
}
