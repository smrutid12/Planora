import React from "react";
import { Button, Switch, message} from "antd";
import axios from "axios";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";

const MainHeader: React.FC = () => {
  function handleLogout() {
    const LOGOUT_API = "http://127.0.0.1:5001/logout";
    console.log("handleLogout triggered"); // Debug

    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }

    axios
      .post(
        LOGOUT_API,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          console.log("Logout successful");
          localStorage.removeItem("token"); // Clear the token
          window.location.href = "/login"; // Redirect to login page
        } else {
          console.error("Logout failed with status: ", response.status);
        }
      })
      .catch((error) => {
        console.error("Logout failed", error);
        message.error("Logout failed. Please try again.");
      });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // height: "100vh",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          borderRadius: "8px",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>Planora</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button>Year</Button>
          <Button type="primary">Month</Button>
          <Button>Day</Button>
          {/* <Switch
            checkedChildren={<span>🌞</span>}
            unCheckedChildren={<span>🌙</span>}
          /> */}
          <Button icon={<SettingOutlined />} />
          <Button
            icon={<LogoutOutlined />}
            onClick={(e) => {
              handleLogout();
            }}
          />
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
