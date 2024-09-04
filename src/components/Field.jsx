export default function Field({
  type,
  id,
  bullet = false,
  placeholder,
  formData,
  setFormData,
}) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={(e) => {
        if (bullet) {
          setFormData((formData) => ({
            ...formData,
            [bullet]: { ...formData[bullet], [id]: e.target.value },
          }));
        } else {
          setFormData({ ...formData, [id]: e.target.value });
        }
      }}
    />
  );
}
