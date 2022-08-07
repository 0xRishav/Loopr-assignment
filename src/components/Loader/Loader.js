import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "75vh",
      }}
    >
      <span class="loader"></span>
    </div>
  );
}

export default Loader;
