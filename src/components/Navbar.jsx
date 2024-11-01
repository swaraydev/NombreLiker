import React from "react";

export default function Navbar({ nombreLiker }) {
  return (
    <div className="entete">
      <h3>Les posts liker sont :{nombreLiker} </h3>
    </div>
  );
}
