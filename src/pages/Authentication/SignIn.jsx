import React, { useState } from "react";
import {
  AnAccount,
  AuthBGWrapper,
  AuthFormBG,
  CaDasLogoWrapper,
  FormField,
  GoogleLink,
  SignInWarpper,
  Terms,
  TitleWrapper,
} from "./Authentication.style";
import Logo from "../../assets/Logo";
import { Button, Checkbox, Col, Form, Input, Progress, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Google from "../../assets/Google";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const getPasswordStrength = () => {
    const lengthScore = Math.min(password.length, 8) / 8;
    const complexityScore = calculateComplexityScore(password);
    const totalScore = (lengthScore + complexityScore) / 2;
    return totalScore * 100;
  };

  const calculateComplexityScore = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    return hasUpperCase ? 1 : 0;
  };
  return (
    <>
      <CaDasLogoWrapper>
        <Logo />
      </CaDasLogoWrapper>
      <AuthBGWrapper>
        <AuthFormBG>
          <SignInWarpper>
            <TitleWrapper>
              <h2>Let’s Sign You In</h2>
              <p>Welcome back, you’ve been missed!</p>
            </TitleWrapper>

            <Form>
              <FormField>
                <Input
                  placeholder="Your Email"
                  bordered={false}
                  autoComplete="email"
                />
              </FormField>
              <FormField>
                <Input.Password
                  placeholder="Create Password"
                  bordered={false}
                  onChange={handlePasswordChange}
                  autoComplete="create-password"
                />
              </FormField>
              <Progress
                percent={getPasswordStrength()}
                showInfo={false}
                steps={6}
                size={[40, 5]}
              />

              <Terms>
                <Row>
                  <Col span={10}>
                    <Checkbox>
                      <span>Remember me </span>
                    </Checkbox>
                  </Col>
                  <Col span={8} offset={6}>
                    <Link>Forgot Password</Link>
                  </Col>
                </Row>
              </Terms>

              <Button
                htmlType="submit"
                type="primary"
                onClick={() => navigate("/home")}
              >
                Login
              </Button>

              <h4> OR </h4>

              <GoogleLink>
                <Google /> <span> Continue with Google </span>
              </GoogleLink>
            </Form>

            <AnAccount>
              Don't have an account?{" "}
              <Link onClick={() => navigate("/signup")}> Sign up </Link>
            </AnAccount>
          </SignInWarpper>
        </AuthFormBG>
      </AuthBGWrapper>
    </>
  );
};

export default SignIn;
