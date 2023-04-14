import React, { useState, SyntheticEvent } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { login } from "../../store/slices/userSlice";

import "./Login.css";


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
        <form onSubmit={submit}>
          <div className="container">
            <label htmlFor="email">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <button type="submit">Login</button>
          </div>
        </form>
      )}
      
    
     
    </>
  );
}
