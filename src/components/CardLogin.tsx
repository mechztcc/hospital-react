import React from "react";
import "./styles.css";

interface CardLoginProps {}

interface CardLoginState {}

class CardLogin extends React.Component<CardLoginProps, CardLoginState> {
  render() {
    return (
      <div className="card">
        <h1>Lets login into yout account</h1>
        <form>
          <label htmlFor="email">E-mail</label>
          <input type="text" />

          <label htmlFor="password">Password</label>
          <input type="password" />

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
}

export default CardLogin;
