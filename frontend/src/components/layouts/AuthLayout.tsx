import React from "react";
import AuthHeader from "../headers/AuthHeader";
import Footer from "../footer/footer";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <AuthHeader />
      <main
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
