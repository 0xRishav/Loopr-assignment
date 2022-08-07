import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "50vh",
      }}
    >
      <div className="text-3xl font-bold">Page not found</div>
      <Link to="/">
        <button className="px-3 py-1.5 bg-blue text-white font-medium rounded-md mt-10">
          Go to Homepage
        </button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
