import React from "react";

const AuthHeader: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{ textAlign: "left", padding: "10px", background: "#f0f2f5" }}
      >
        <h1>Welcome to Our App</h1>
      </header>
    </div>
  );
};

export default AuthHeader;
