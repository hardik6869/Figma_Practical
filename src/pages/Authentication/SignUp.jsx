import React, { useState } from "react";
import {
  AnAccount,
  AuthBGWrapper,
  AuthFormBG,
  AuthFormWarpper,
  CaDasLogoWrapper,
  FormField,
  GoogleLink,
  Terms,
  TitleWrapper,
} from "../Authentication.style";
import Logo from "../../assets/Logo";
import { Button, Checkbox, Form, Input, Progress } from "antd";
import { Link } from "react-router-dom";
import Google from "../../assets/Google";

const SignUp = () => {
  const [password, setPassword] = useState("");

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
          <AuthFormWarpper>
            <TitleWrapper>
              <h2>Getting Started</h2>
              <p>Create an account to continue!</p>
            </TitleWrapper>

            <Form>
              <FormField>
                <Input placeholder="Your Email" bordered={false} />
              </FormField>
              <FormField>
                <Input placeholder="Your Name" bordered={false} />
              </FormField>
              <FormField>
                <Input.Password
                  placeholder="Create Password"
                  bordered={false}
                  onChange={handlePasswordChange}
                />
              </FormField>
              <Progress
                percent={getPasswordStrength()}
                showInfo={false}
                steps={6}
                size={[40, 5]}
              />

              <Terms>
                <Checkbox>
                  <span style={{ paddingLeft: "8px" }}>
                    By creating an account, you agree to our{" "}
                  </span>
                </Checkbox>
                <Link>Term and Conditions</Link>
              </Terms>

              <Button htmlType="submit" type="primary">
                Register
              </Button>

              <h4> OR </h4>

              <GoogleLink>
                <Google /> <span> Continue with Google </span>
              </GoogleLink>
            </Form>

            <AnAccount>
              Already have an account? <Link> Sign in </Link>
            </AnAccount>
          </AuthFormWarpper>
        </AuthFormBG>
      </AuthBGWrapper>
    </>
  );
};

export default SignUp;
