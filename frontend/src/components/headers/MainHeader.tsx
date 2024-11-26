import React from "react";
import { Button, Switch } from "antd";
import { SettingOutlined } from "@ant-design/icons";

const MainHeader: React.FC = () => {
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
          <Switch
            checkedChildren={<span>🌞</span>}
            unCheckedChildren={<span>🌙</span>}
          />
          <Button icon={<SettingOutlined />} />
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
