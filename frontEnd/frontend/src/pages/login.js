import React from "react";
import "./Login.css";

import logo from "../assets/logo.svg";

export default function Login() {
  return (
    <div className="login-container">
      <form>
        <img src={logo} alt="Tindev Logo" />
        <input placeholder="Digite seu usuario do Github" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
