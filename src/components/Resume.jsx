export default function Resume({ formData }) {
  return (
    <div className="flex flex-col resume">
      <div className="flex flex-col general">
        <span className="name">{formData.name}</span>
        <div className="flex sub">
          <span>{formData.address}</span>
          <span>{formData.email}</span>
          <span>{formData.tel}</span>
        </div>
      </div>
      <div className="flex flex-col education">
        <span className="education header">EDUCATION</span>
        <span className="college-degree sub-header">{`${formData.college}, ${formData["college-add"]} — ${formData.degree}`}</span>
        <span className="year">{formData.grad}</span>
        <li className="other">{formData.other}</li>
      </div>
    </div>
  );
}
