import React, { useEffect, useState } from "react";
import defaultBg from "../../assets/bg/light/bg1.jpg";
import axios from "../../axios";

const ThemeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");
  const [background, setBackground] = useState<string>(defaultBg);

  // Fetch user preferences on initial load
  // useEffect(() => {
  //   axios
  //     .get<{ background: string; theme: string }>("/api/preferences")
  //     .then((response: { data: { background: string; theme: string } }) => {
  //       setBackground(
  //         response.data.background || "frontend/src/assets/bg/light/ -2.jpg"
  //       );
  //       setTheme(response.data.theme || "frontend/src/assets/bg/light/ -2.jpg");
  //     })
  //     .catch((error: unknown) => {
  //       console.error("Failed to fetch preferences", error);
  //     });
  // }, []);

  const fontColor = theme === "light" ? "#000000" : "#FFFFFF";

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        color: fontColor,
        transition: "background 0.5s ease, color 0.5s ease",
      }}
    >
      {children}
    </div>
  );
};

export default ThemeLayout;
