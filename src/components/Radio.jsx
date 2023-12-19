export function Radio({ handleChange, id, value, name, type, label }) {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        id={id}
        onChange={handleChange}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
}
