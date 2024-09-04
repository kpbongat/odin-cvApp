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
        console.log(bullet);
        if (!bullet) {
          setFormData({ ...formData, [id]: e.target.value });
        } else if (bullet === "ed-bullets") {
          setFormData((formData) => ({
            ...formData,
            [bullet]: { ...formData[bullet], [id]: e.target.value },
          }));
        } else {
          setFormData((formData) => ({
            ...formData,
            ["work-bullets"]: {
              ...formData["work-bullets"],
              [bullet]: {
                ...formData["work-bullets"][bullet],
                [id]: e.target.value,
              },
            },
          }));
        }
      }}
    />
  );
}
