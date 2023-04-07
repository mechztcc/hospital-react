import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { gql, useMutation, useQuery } from "@apollo/client";

import "./styles.css";
import { useState, useEffect } from "react";

interface IFormInput {
  name: string;
  secondName: string;
  email: string;
  password: string;
  vip: boolean;
  roleId: number;
  payment: string;
  birth: string;
}

const CREATE_ACCOUNT = gql`
  mutation Create(
    $email: String!
    $password: String!
    $name: String!
    $second_name: String!
    $payment: String!
    $birth: String!
    $role: Int!
  ) {
    create(
      email: $email
      password: $password
      name: $name
      second_name: $second_name
      payment: $payment
      birth: $birth
      role: $role
    ) {
      id
      name
      email
    }
  }
`;

const FIND_ROLES = gql`
  query Roles {
    roles {
      id
      name
    }
  }
`;

export default function CardCreateAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await createUser();
  };

  const [createUser] = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: "email2@email.com",
      password: "1234567",
      name: "name",
      second_name: "name",
      payment: "200",
      birth: "22/10/2023",
      role: 1,
      vip: true,
    },
    onError: console.log,
  });

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

        {errors.name && isDirty && <span role="alert">Name is required</span>}

        <label htmlFor="name">Second name</label>
        <input
          type="text"
          {...register("secondName", {
            required: true,
          })}
        />

        {errors.secondName && isDirty && (
          <span role="alert">Second name is required</span>
        )}

        <label htmlFor="name">Payment date</label>
        <input
          type="text"
          {...register("payment", {
            required: true,
          })}
        />

        {errors.payment && isDirty && (
          <span role="alert">Payment date is required</span>
        )}

        <label htmlFor="name">Birth date</label>
        <input
          type="text"
          {...register("payment", {
            required: true,
          })}
        />

        {errors.birth && isDirty && (
          <span role="alert">Birth date is required</span>
        )}

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
        {errors.email && isDirty && <span role="alert">Invalid e-mail</span>}

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
