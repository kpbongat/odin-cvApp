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
        <span className="grad-year">{formData.grad}</span>
        {Object.entries(formData["ed-bullets"]).map((i) => (
          <li className={i[0]}>{i[1]}</li>
        ))}
      </div>
      <div className="flex flex-col work">
        <span className="work header">EXPERIENCE</span>
        <span className="job sub-header">{formData.job}</span>
        <div className="flex sub2">
          <span className="company">{formData.company}</span>
          <div className="flex">
            <span className="work-date">{formData["work-date"]}</span>
            <span className="comp-add">{formData["comp-add"]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
