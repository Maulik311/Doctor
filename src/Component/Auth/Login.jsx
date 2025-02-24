import React, { useRef, useState } from "react";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let newErrors = { email: "", password: "" };

    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setError(newErrors);

    if (!formData.email) {
      emailRef.current.focus();
    } else if (!formData.password) {
      passwordRef.current.focus();
    } else {
      alert("Login successful!");
      console.log("Login Data:", formData);
      setFormData({ email: "", password: "" });
      setError({ email: "", password: "" });
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            ref={emailRef}
          />
          <br />
          <span style={{ color: "red" }}>{error.email}</span>
        </div>
        <br />
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            ref={passwordRef}
          />
          <br />
          <span style={{ color: "red" }}>{error.password}</span>
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
