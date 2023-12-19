import { Error } from "./Error";

export function Input({
  handleChange,
  handleBlur,
  value,
  type,
  id,
  placeholder,
  name,
  label,
  errors,
}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {errors?.[name] && <Error> {label} is required</Error>}
    </>
  );
}
