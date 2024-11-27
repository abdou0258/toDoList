"use client";

import { useRouter } from "next/navigation";
import logo from "../public/logo.png";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 text-center position-relative"
      style={{ overflow: "hidden" }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover", zIndex: -1 }}
      >
        <source src="/note.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Shadow Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity for the shadow effect
          zIndex: 1,
        }}
      ></div>

      {/* Navbar with Logo */}
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 0,
          width: "100%",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <Image
          src={logo}
          alt="Logo"
          width={100}
          height={100}
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Main Content */}
      <div className="text-white" style={{ zIndex: 2 }}>
        {/* Title and Paragraph */}
        <h1 className="mb-3 " style={{fontSize:"62px"}}>Welcome to Your To-Do List</h1>
        <p
          className="mb-4"
          style={{
            fontSize: "18px",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          Stay organized and productive with our simple and effective to-do list
          application. Manage your tasks efficiently and achieve your goals!
        </p>

        {/* Button */}
        <button
          onClick={() => router.push("/signup")}
          className="btn  btn-lg px-4"
          style={{backgroundColor:"#347064",color:"white"}}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}
