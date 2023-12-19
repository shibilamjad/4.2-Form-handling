export function Checkbox({ name, id, value, handleBlur, handleChange, label }) {
  return (
    <div>
      <input
        type="checkbox"
        name={name}
        value={value}
        id={id}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
