import "./styles.css";

import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface IFormInput {
  email: String;
  password: String;
}

export default function CardLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="card">
      <h1>Lets login into your account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          {...register("email", {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid e-mail",
            },
          })}
        />
        {errors.email?.message && <span role="alert">Invalid e-mail</span>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          {...register("password", {
            required: true,
          })}
        />
    
          {(errors.password && isDirty) && <span role="alert">Password is required</span>}
        

        <button type="submit">Login</button>
        <span>Forgot password?</span>
      </form>
      <div className="card-footer">
        <small>Dont have account?</small>
        <Link to="/create-account">Register now!</Link>
      </div>
    </div>
  );
}
