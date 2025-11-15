"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (isRegister) {
      if (users.find((u) => u.email === email))
        return setError("User already exists");
      const newUser = { id: Date.now(), name, email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registration successful. You can now log in.");
      setIsRegister(false);
      setError("");
      return;
    }

    const user = users.find((u) => u.email === email);
    if (!user) return setError("User not found");
    if (user.password !== password) return setError("Wrong password");

    localStorage.setItem(
      "currentUser",
      JSON.stringify({ id: user.id, name: user.name, email: user.email })
    );
    router.push("/blogs");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-3 text-center">{isRegister ? "Register" : "Login"}</h2>
      {error && <div className="alert alert-danger">{error}</div>}

      {isRegister && (
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}
      <input
        type="email"
        className="form-control mb-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn btn-primary w-100" onClick={handleSubmit}>
        {isRegister ? "Register" : "Login"}
      </button>

      <p
        className="text-center mt-3 text-primary"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setIsRegister(!isRegister);
          setError("");
        }}
      >
        {isRegister ? "Already have an account? Log in" : "New user? Register"}
      </p>
    </div>
  );
}
