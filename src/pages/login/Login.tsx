import React, { useState } from "react";
import "../../styles.css";
import { Button, Checkbox, Form, Input } from "antd";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { userLogin } from "../../features/auth/helpers/loginUser";
import { useNavigate } from "react-router-dom";
import "./login.css";
const Login = () => {
  const dispatch = useAppDispatch();
  const { authUserData, social_media_token } = useAppSelector(
    (store) => store.auth
  );
  const navigate = useNavigate();

  console.log(
    authUserData,
    social_media_token,
    "authUserData,social_media_token"
  );

  const [userCredentail, setUserCredential] = useState({
    username: "",
    password: "",
  });

  const onLoggedIn = (values: any) => {
    console.log(values.username, "values");
    setUserCredential({ username: values.username, password: values.password });
  };

  const onLoggedInFailed = (errorFields: any) => {
    console.log(errorFields?.[0]?.errors, "values");
  };
  console.log(userCredentail, "userCredentail");

  const testUser = { username: "vaishnavi", password: "vaishnavi123" };

  const handelDummyLogin = () => {
    try {
      dispatch(userLogin(testUser));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-container common-flex al-center js-center">
      <img src="./assests/login-img.svg" alt="login-img" />
      <div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onLoggedIn}
          onFinishFailed={onLoggedInFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="dashed" htmlType="submit" className="mr-sm">
              Submit
            </Button>
            <Button type="primary" onClick={handelDummyLogin}>
              Dummy
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
