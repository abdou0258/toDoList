"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import form_logo from '../../public/form-logo.png'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push("/dashboard");
    } else {
      const data = await response.json().catch(() => null);
      setError(data?.error || "Invalid email or password.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 my-form ">
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
          <button type="submit" className="btn  w-100" style={{backgroundColor:"#0F3028",color:"white"}}>Log In</button>
        </form>
        <div className="mt-3 text-center">
          <p>
            Don't have an account?{" "}
            <a href="/signup"  style={{color:"#347064"}}>Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
