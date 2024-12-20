import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import api from "../services/api";

import logo from "../assets/logo.svg";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";

import "./Main.css";

export default function Main() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/devs", {
        headers: { user: id }
      });
      setUsers(response.data);
    }
    loadUsers();
  }, [id]);

  async function handleLike(userId) {
    await api.post(`/devs/${userId}/likes`, null, {
      headers: { user: id }
    });

    setUsers(users.filter(user => user._id !== userId));
  }

  async function handleDislike(userId) {
    await api.post(`/devs/${userId}/dislikes`, null, {
      headers: { user: id }
    });

    setUsers(users.filter(user => user._id !== userId));
  }

  return (
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="Tindev Logo" />
      </Link>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user._id}>
              <img src={user.avatar} alt={user.name} />
              <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
              </footer>
              <div className="buttons">
                <button type="button" onClick={() => handleDislike(user._id)}>
                  <img src={dislike} alt="Dislike" />
                </button>
                <button type="button" onClick={() => handleLike(user._id)}>
                  <img src={like} alt="Like" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty">Acabou :(</div>
      )}
    </div>
  );
}
