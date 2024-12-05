import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import api from "../services/api.js";

import logo from "../assets/logo.svg";

export default function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post("/devs", {
      username
    });
    const { _id } = response.data;

    navigate(`/devs/${_id}`);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev Logo" />
        <input
          placeholder="Digite seu usuario do Github"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
