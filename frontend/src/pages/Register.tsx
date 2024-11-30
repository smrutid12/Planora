import React from "react";
import { Form, Input, Button, Card, Divider, message } from "antd";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register: React.FC = () => {
  // Replace this with your actual API endpoint
  const REGISTER_API = "http://127.0.0.1:5001/register";
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      // Send login request to the API
      const response = await axios.post(REGISTER_API, {
        name: values.name,
        username: values.username,
        email: values.email,
        password: values.password,
        confirm_password: values.confirmPassword,
      });

      // If login is successful
      message.success("Registration Successful!");
      console.log("Registration Response:", response.data);
      localStorage.setItem("token", response.data.token);
      // Redirect to the dashboard
      navigate("/dashboard");
      // Perform additional actions, like redirecting the user
    } catch (error: any) {
      // Handle errors
      console.error("Registration Failed:", error.response?.data || error.message);
      message.error(error.response?.data?.message || "Registration Failed!");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error("Validation Failed:", errorInfo);
    message.error("Please check the input fields!");
  };

  const handleGoogleRegisterSuccess = (credentialResponse: any) => {
    console.log("Google Register Success:", credentialResponse);
  };

  const handleGoogleRegisterFailure = () => {
    console.error("Google Register Failed");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        <h2 style={{ textAlign: "center" }}>Register</h2>
        <Form
          name="register"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input prefix={<IdcardOutlined />} placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={["password"]} // Watch for changes in the "password" field
            rules={[
              { required: true, message: "Please input your password again!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Register
            </Button>
          </Form.Item>
        </Form>

        <Divider>OR</Divider>

        <GoogleLogin
          onSuccess={handleGoogleRegisterSuccess}
          onError={handleGoogleRegisterFailure}
          text="continue_with"
          width="100%"
        />

        <div style={{ textAlign: "center", marginTop: 16 }}>
          <a href="/">Already have an account? Log in now!</a>
        </div>
      </Card>
    </div>
  );
};

export default Register;
