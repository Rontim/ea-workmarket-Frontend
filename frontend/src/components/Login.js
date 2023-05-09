import React, { useState } from "react";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = () => {};

  const closePopup = () => {};

  return (
    <div className="popup container">
      <div className="popup-content">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleLogin();
          }}
          className="form my-5"
        >
          <div className=" form-group-lg mb-3">
            <label htmlFor="email" className="form-label">
              email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="form-control"
            />
          </div>
          <div className=" form-group-lg mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Login
          </button>
        </form>
        {/* <button onClick={closePopup} className="btn btn-warning">
          Close
        </button> */}
      </div>
    </div>
  );
};

export default Login;
