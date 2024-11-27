"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import form_logo from '../../public/form-logo-signup.png'

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !name) {
      setError("All fields are required.");
      return;
    }

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name }),
    });

    if (response.ok) {
      router.push("/login");
    } else {
      const data = await response.json().catch(() => null);
      setError(data?.error || "Something went wrong.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 my-form">
      <div className="card  flex justify-content-center  shadow-sm p-5 m-2 rounded-4 shadow-lg" style={{ maxWidth: "600px",height:"600px", width: "100%",backgroundColor:"#fafafa"}}>
        <div className="text-center mb-4">
        <Image
            src={form_logo}
            alt="Logo"
           
           
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" style={{backgroundColor:"#0F3028",color:"white"}}>Sign Up</button>
        </form>
        <div className="mt-3 text-center">
          <p>
            Already have an account?{" "}
            <a href="/login"style={{color:"#347064"}}>Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
}
