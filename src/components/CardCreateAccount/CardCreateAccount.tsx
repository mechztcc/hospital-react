import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import "./styles.css";

interface IFormInput {
  name: String;
  email: String;
  password: String;
}

export default function CardCreateAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="card">
      <h1>Lets create you account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          {...register("name", {
            required: true,
          })}
        />

        {(errors.name && isDirty) && <span role="alert">Name is required</span>}

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          {...register("email", {
            //onChange: () => console.log(errors),
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid e-mail",
            },
          })}
        />
        {(errors.email && isDirty) && <span role="alert">Invalid e-mail</span>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          {...register("password", {
            minLength: 8,
            maxLength: 10,
            required: true,
          })}
        />
        {(errors.password?.type === "minLength" && (
          <span role="alert">Invalid password</span>
        )) ||
          (errors.password?.type === "maxLength" && (
            <span role="alert">Invalid password</span>
          ))}

        <button type="submit">Create account</button>
        <span></span>
      </form>
      <div className="card-footer">
        <small>Already registered?</small>
        <Link to="/login">Just login now!</Link>
      </div>
    </div>
  );
}
