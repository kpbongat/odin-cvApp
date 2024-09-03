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
    </div>
  );
}
