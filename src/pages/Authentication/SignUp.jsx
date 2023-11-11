import React, { useState } from "react";
import {
  AnAccount,
  AuthBGWrapper,
  AuthFormBG,
  CaDasLogoWrapper,
  FormField,
  GoogleLink,
  SignUpWarpper,
  Terms,
  TitleWrapper,
} from "./Authentication.style";
import Logo from "../../assets/Logo";
import { Button, Checkbox, Col, Form, Input, Progress, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Google from "../../assets/Google";

const SignUp = () => {
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
          <SignUpWarpper>
            <TitleWrapper>
              <h2>Getting Started</h2>
              <p>Create an account to continue!</p>
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
                <Input
                  placeholder="Your Name"
                  bordered={false}
                  autoComplete="name"
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
                  <Col span={22}>
                    <Checkbox style={{ fill: "#DEEBFF", stroke: "#DEEBFF" }}>
                      <span>By creating an account, you agree to our </span>
                    </Checkbox>
                  </Col>
                  <Col span={11} offset={2}>
                    <Link>Term and Conditions</Link>
                  </Col>
                </Row>
              </Terms>

              <Button
                htmlType="submit"
                type="primary"
                onClick={() => navigate("/")}
              >
                Register
              </Button>

              <h4> OR </h4>

              <GoogleLink>
                <Google /> <span> Continue with Google </span>
              </GoogleLink>
            </Form>

            <AnAccount>
              Already have an account?
              <Link onClick={() => navigate("/")}> Sign in </Link>
            </AnAccount>
          </SignUpWarpper>
        </AuthFormBG>
      </AuthBGWrapper>
    </>
  );
};

export default SignUp;
