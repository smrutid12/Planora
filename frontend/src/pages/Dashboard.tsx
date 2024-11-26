import React from "react";
import { Button, Progress} from "antd";

const Dashboard: React.FC = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f8f5ff",
        padding: "10px",
      }}
    >
      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", marginTop: "20px" }}>
        {/* Calendar Section */}
        <div
          style={{
            flex: 2,
            borderRadius: "8px",
            background: "#fff",
            padding: "20px",
            position: "relative",
            marginRight: "10px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Spiral Effect */}
          <div
            style={{
              position: "absolute",
              top: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "10px",
            }}
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "#000",
                }}
              />
            ))}
          </div>

          {/* Calendar Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gridTemplateRows: "repeat(5, 100px)",
              gap: "10px",
              marginTop: "30px",
            }}
          >
            {Array.from({ length: 35 }).map((_, day) => (
              <div
                key={day}
                style={{
                  border: "1px dashed #ccc",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  fontWeight: "bold",
                  background: "#fafafa",
                }}
              >
                {day + 1 <= 30 ? day + 1 : ""}
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Mood Section */}
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>Hi Smruti! How are you feeling today?</h3>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <Button>😊</Button>
              <Button>😐</Button>
              <Button>☹️</Button>
            </div>
          </div>

          {/* Upcoming Plans */}
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>Upcoming Plans:</h3>
            <ul style={{ paddingLeft: "20px" }}>
              <li>Task 1</li>
              <li>Task 2</li>
              <li>Task 3</li>
            </ul>
            <Button style={{ marginTop: "10px" }} type="primary">
              Start your day
            </Button>
          </div>

          {/* Goal Section */}
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <h3>Goal</h3>
            <Progress type="circle" percent={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
