import React, { useState } from "react";
import "./App.css";
// import "../login.css";

function App() {
  return (
    <div>
      <CardWrapper>
        Hi there,
        <h2>Heyy</h2>
        <Hello />
      </CardWrapper>
    </div>
  );
}

function Hello() {
  return <h3>hello from compo</h3>;
}

function CardWrapper({ children }) {
  // children means everything that you've
  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>{children}</div>
  );
}

export default App;

function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <h2>LanceStack</h2>
        <form action="/loggedin" method="post">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" required></input>

          <label for="password">Password</label>
          <input type="password" id="password" name="password" required></input>

          <button type="submit">Login</button>
        </form>
        <div class="footer"></div>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
      <div>{setError}</div>
    </div>
  );
}
