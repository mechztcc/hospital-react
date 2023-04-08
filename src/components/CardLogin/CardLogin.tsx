import { useMutation, gql } from "@apollo/client";
import "./styles.css";

import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface IFormInput {
  email: String;
  password: String;
}

const AUTH = gql`
  mutation Auth($email: String!, $password: String!) {
    auth(email: $email, password: $password) {
      token
    }
  }
`;

export default function CardLogin() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isDirty },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) =>
    auth({
      variables: {
        email: getValues("email"),
        password: getValues("password"),
      },
    });

  const [auth, { data, loading }] = useMutation(AUTH);

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

        {errors.password && isDirty && (
          <span role="alert">Password is required</span>
        )}

        <button type="submit">
          {(!loading && "Create account") || (loading && "Loading")}
        </button>
        <span>Forgot password?</span>
      </form>
      <div className="card-footer">
        <small>Dont have account?</small>
        <Link to="/create-account">Register now!</Link>
      </div>
    </div>
  );
}
