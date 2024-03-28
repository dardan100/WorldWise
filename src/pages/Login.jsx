import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import Button from "../components/Button";
import { useAuth } from "../context/FakeAuthContext";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("dardan@example.com");
  const [password, setPassword] = useState("qwerty");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="email">Email Adress</label>

        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />
        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
