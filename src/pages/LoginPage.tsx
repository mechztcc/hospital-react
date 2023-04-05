import React from "react";
import CardLogin from "../components/CardLogin";

interface LoginProps {}

interface LoginState {}

class Login extends React.Component<LoginProps, LoginState> {
  render() {
    return <CardLogin />;
  }
}

export default Login;
