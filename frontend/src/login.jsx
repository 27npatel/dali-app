import React from "react";
import { useState } from "react";
import './login.css'

export function Login() {
  const [login, setLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="background">
      <form action="">
        <h1>DALI Trading Card Game</h1>
        <h2>{login ? "Log In" : "Sign Up"}</h2>
        <input type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        {!login && <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>}
        <div className="buttons">
          <button type="submit">{login ? "Log In" : "Sign Up"}</button>
          <button type="button" onClick={() => setLogin(!login)}>{login ? "Create an Account" : "Have an Account"}</button>
        </div>
      </form>
    </div>
  )
}