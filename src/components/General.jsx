import Field from "./Field";

export default function General({ formState }) {
  return (
    <section className="flex flex-col">
      <h2>General Information</h2>
      <label htmlFor="name">Name</label>
      <Field
        type="text"
        id="name"
        placeholder="John Joshua"
        formData={formState[0]}
        setFormData={formState[1]}
      ></Field>
      <label htmlFor="address">Address</label>
      <Field
        type="text"
        id="address"
        placeholder="New York City, USA"
        formData={formState[0]}
        setFormData={formState[1]}
      ></Field>
      <label htmlFor="email">Email</label>
      <Field
        type="email"
        id="email"
        placeholder="johnjoshua@gmail.com"
        formData={formState[0]}
        setFormData={formState[1]}
      ></Field>
      <label htmlFor="tel">Phone</label>
      <Field
        type="tel"
        id="tel"
        placeholder="123456789"
        formData={formState[0]}
        setFormData={formState[1]}
      ></Field>
    </section>
  );
}
