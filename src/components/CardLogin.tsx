import "./styles.css";

import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  email: String;
  password: String;
}

export default function CardLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="card">
      <h1>Lets login into yout account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          {...register("email", {
            onChange: () => console.log(errors),
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid e-mail",
            },
          })}
        />
        <p>{errors.email?.message}</p>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          {...register("password", {
            minLength: 8,
            maxLength: 10,
            required: true,
          })}
        />
        <p>
          {(errors.password?.type === "minLength" && "Password is short") ||
            (errors.password?.type === "maxLength" && "Password is too big")}
        </p>

        <button type="submit">Login</button>
        <span>Forgot password?</span>
      </form>
      <div className="card-footer">
        <small>Dont have account?</small>
        <span>Register now!</span>
      </div>
    </div>
  );
}
