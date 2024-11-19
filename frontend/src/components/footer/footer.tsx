import React from "react";

const Footer: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <footer
        style={{ textAlign: "center", padding: "10px", background: "#f0f2f5" }}
      >
        <p>Auth Footer - © 2024</p>
      </footer>
    </div>
  );
};

export default Footer;
