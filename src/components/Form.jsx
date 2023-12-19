import { useState } from "react";
import "./Form.css";
import { Error } from "./Error";
import { Input } from "./Input";
import { Radio } from "./Radio";
import { Checkbox } from "./Checkbox";
import { Select } from "./Select";
export function Form() {
  const [field, setField] = useState({
    userName: "",
    email: "",
    gender: "",
    skills: [],
    country: "",
  });
  const [errors, setErrors] = useState({
    userName: false,
    email: false,
    gender: false,
    skills: false,
    country: false,
  });

  // Expected output: true
  function handleSubmit(e) {
    e.preventDefault();
    if (errors.email === true) return;
    if (isValidFormSubmit());
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    // store skills values
    if (type === "checkbox") {
      if (checked) {
        setField((prev) => ({
          ...prev,
          skills: [...prev.skills, value],
        }));
        // if click again skills value, remove it the value
      } else {
        setField((prev) => ({
          ...prev,
          skills: prev.skills.filter((skill) => skill !== value),
        }));
      }
      // store state
    } else {
      setField((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    handleBlur(e);
  }

  function isValidFormSubmit() {
    const errors = {
      userName: false,
      email: false,
      gender: false,
      skills: false,
      country: false,
    };

    if (field.userName === "") {
      errors.userName = true;
    }
    if (field.email === "") {
      errors.email = true;
    }
    if (field.gender === "") {
      errors.gender = true;
    }

    if (field.skills.length === 0) {
      errors.skills = true;
    }
    if (field.country === "") {
      errors.country = true;
    }
    setErrors(errors);

    if (Object.values(errors).some((err) => err === true)) {
      return false;
    }
    return true;
  }

  function handleBlur(e) {
    const { name, value, checked } = e.target;

    let error = false;

    if (name === "userName" && value === "") {
      error = true;
    } else if (
      name === "email" &&
      (value === "" ||
        !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
          value
        ))
    )
      error = true;
    else if (name === "gender" && value === "") {
      error = true;
    } else if (name === "skills" && field.skills.length === 0) {
      if (!checked) {
        error = true;
      }
    } else if (name === "country" && value === "") {
      error = true;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  }

  console.log(field);
  return (
    <div className="form_bg round">
      <form
        className="form_container"
        onSubmit={handleSubmit}
        autoComplete="off"
        noValidate
      >
        <div className="form">Form</div>
        <div className="input_container">
          <div className="label_name">
            <Input
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={field.userName}
              type="text"
              id="userName"
              placeholder="Username"
              name="userName"
              errors={errors}
              label="Username"
            />
          </div>
          <div className="label_name">
            <Input
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={field.email}
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              errors={errors}
              label="Email"
            />
          </div>
          <div className="gender">
            <label>Gender:</label>
            <Radio
              label="Male"
              type="radio"
              name="gender"
              value="male"
              id="male"
              handleChange={handleChange}
            />
            <Radio
              label="Female"
              type="radio"
              name="gender"
              value="female"
              id="female"
              handleChange={handleChange}
            />
          </div>
          {errors?.gender && <Error>Gender is required</Error>}
          <div className="checkbox_skill">
            <label>Skills:</label>
            <Checkbox
              label="javascript"
              name="skills"
              value="javascript"
              id="javascript"
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <Checkbox
              label="html"
              name="skills"
              value="html"
              id="html"
              handleChange={handleChange}
              handleBlur={handleBlur}
            />{" "}
            <Checkbox
              label="css"
              name="skills"
              value="css"
              id="css"
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <Checkbox
              label="react"
              name="skills"
              value="react"
              id="react"
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </div>
          {errors.skills && <Error>Skills is required</Error>}
          <Select
            name="country"
            id="country"
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          {errors?.country && <Error>Cuntry is required</Error>}

          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
