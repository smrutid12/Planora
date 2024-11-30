import React from "react";
import { Form, Input, Button, Checkbox, Card, Divider, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  // Replace this with your actual API endpoint
  const LOGIN_API = "http://127.0.0.1:5001/login";
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const response = await axios.post(LOGIN_API, {
        username: values.username,
        password: values.password,
      });

      console.log(response.data, "Login Response");

      // Check if the response contains access_token
      if (response.data?.access_token) {
        message.success("Login Successful!");
        localStorage.setItem("token", response.data.access_token);
        navigate("/dashboard");
      } else {
        message.error("Login failed. Please check your credentials.");
      }
    } catch (error: any) {
      console.error("Login Failed:", error?.response?.data || error.message);
      message.error(error?.response?.data?.message || "Login Failed!");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error("Validation Failed:", errorInfo);
    message.error("Please check the input fields!");
  };

  const handleGoogleLoginSuccess = (credentialResponse: any) => {
    console.log("Google Login Success:", credentialResponse);
  };

  const handleGoogleLoginFailure = () => {
    console.error("Google Login Failed");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Ensure it covers the full height
        backgroundColor: "#f5f5f5", // Optional background color
      }}
    >
      <Card
        style={{
          width: 400,
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
          borderRadius: "8px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log in
            </Button>
          </Form.Item>
        </Form>

        <Divider>OR</Divider>

        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginFailure}
          text="continue_with"
          width="100%"
        />

        <div style={{ textAlign: "center", marginTop: 16 }}>
          <a href="/register">Don't have an account? Register now!</a>
        </div>
      </Card>
    </div>
  );
};

export default Login;
