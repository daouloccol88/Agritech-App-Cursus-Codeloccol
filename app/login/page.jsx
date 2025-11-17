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
    <div className="bg-yellow-nh vh-100">
      <div className="d-flex justify-content-center pb-4">
        <div className="d-flex">
          <img src={"/favicon.ico"} width={100} height={100} />
          <h1 className="pt-4">Agritech App</h1>
        </div>
      </div>

      <div className="container login-div bg-green-nh text-white px-4 pt-4 pb-2 rounded-3 shadow">
        <h2 className="pb-4 text-center">
          {isRegister ? "Register" : "Login"}
        </h2>
        {error && <div className="alert alert-danger">{error}</div>}

        {isRegister && (
          <input
            type="text"
            className="form-control pb-2"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <p className="fw-bold">
          {" "}
          Veuillez saisir votre Email <span className="text-danger">*</span>
        </p>
        <input
          type="email"
          className="form-control pb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="fw-bold mt-4">
          {" "}
          Veuillez saisir votre Mot de Passe
          <span className="text-danger">*</span>
        </p>
        <input
          type="password"
          className="form-control pb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="form-check pt-3">
          <input
            className="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault1"
          />
          <label className="form-check-label" for="radioDefault1">
            Se souvenir de moi
          </label>
        </div>

        <div className="d-flex justify-content-end">
          <button
            className="btn btn-success p-3 px-4 rounded-pill"
            onClick={handleSubmit}
          >
            {isRegister ? "Register" : "Login"}{" "}
            <i className="bi bi-arrow-up-right"></i>
          </button>
        </div>
        <p className="mt-3">
          Veuillez contactez un administrateur si vous avez oublié votre mot de
          passe
        </p>
      </div>
    </div>
  );
}
