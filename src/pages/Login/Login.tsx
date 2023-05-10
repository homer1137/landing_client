import React, { useState, SyntheticEvent } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { login } from "../../store/slices/userSlice";

import styles from "./Login.module.scss";
import { SuccessButton } from "../../components/UI/Buttons/SuccessButton/SuccessButton";
import { Link } from "react-router-dom";

interface Props {}

export function Login({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.users.isAuth);
  const pending = useAppSelector((state) => state.users.loading);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <>
      {pending === "pending" && <div>Loading</div>}
      {!isAuth && pending !== "pending" && (
        <div className={styles.Login}>
          <h2 className={styles.title2}>
            Don't have an account? <Link to='/registration'><span className={styles.registrationLink}>Create your account</span></Link>, it takes less
            than a minute.
          </h2>
          <h1 className={styles.title}>Login</h1>

          <form onSubmit={submit} className={styles.form}>
              <label htmlFor="email" className={styles.label}>
                Username
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={styles.input}
              />

              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className={styles.input}
              />

              <SuccessButton title="Login" />
          </form>
        </div>
      )}
    </>
  );
}
