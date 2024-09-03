export default function Field({
  type,
  id,
  placeholder,
  formData,
  setFormData,
}) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
    />
  );
}
