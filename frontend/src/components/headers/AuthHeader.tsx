import React from "react";

const AuthHeader: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header style={{ textAlign: "left", padding: "8px" }}>
        <h1>Planora</h1>
      </header>
    </div>
  );
};

export default AuthHeader;
