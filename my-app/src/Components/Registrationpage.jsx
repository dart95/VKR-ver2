import React from "react";

export default function Registrationpage() {
  return (
    <div className="main">
      <span>Enter Username</span>
      <input type="text" placeholder="Username" />
      <br />
      <span>Enter Password</span>
      <input type="text" placeholder="Password" />
      <br />
      <span>Enter Email</span>
      <input type="text" placeholder="Email" />
      <br />
      <span>Date of Birth</span>
      <input type="date" />
    </div>
  );
}
