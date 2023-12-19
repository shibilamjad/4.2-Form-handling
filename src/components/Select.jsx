const options = [
  {
    title: "Select a country",
    value: "",
  },
  {
    title: "India",
    value: "india",
  },
  {
    title: "Uae",
    value: "uae",
  },
  {
    title: "Usa",
    value: "usa",
  },
];

export function Select({ handleBlur, handleChange, name, id }) {
  return (
    <select name={name} id={id} onChange={handleChange} onBlur={handleBlur}>
      {options.map((option) => (
        <option key={option.title} value={option.value} name="country">
          {option.title}
        </option>
      ))}
    </select>
  );
}
