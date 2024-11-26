import React from "react";
import MainHeader from "../headers/MainHeader";
import Footer from "../footer/footer";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <MainHeader />
      <main
        style={{
          flex: 1, // Takes the remaining space
          overflow: "hidden", // Prevents scrolling within the content area
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
