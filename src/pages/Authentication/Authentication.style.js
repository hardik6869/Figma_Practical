import styled from "styled-components";
import Images from "../../Global/Images";

export const CaDasLogoWrapper = styled.div`
  width: auto;
  height: 15vh;
  padding-top: 70px;
  padding-bottom: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 154px;
    height: 32px;
  }
`;

export const AuthBGWrapper = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const AuthFormBG = styled.div`
  width: 100vw;
  height: 85vh;
  flex-shrink: 0;
  background-image: url("${Images.authBG}");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const SignUpWarpper = styled.div`
  font-family: DM Sans;
  width: 360px;
  height: 619px;
  background-color: lightblue;
  position: absolute;
  border-radius: 48px;
  background: var(--white-w-100, #fff);
  box-shadow: 80px 120px 504px 0px rgba(0, 0, 0, 0.16);
  padding: 40px 32px;
  .ant-btn-primary {
    width: 296px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 16px;
    background: var(--blue-b-100, #0052cc);
  }
  h4 {
    color: var(--gray-g-100, #8f92a1);
    font-family: DM Sans;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 166.667% */
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 10px 0;
  }
`;

export const SignInWarpper = styled.div`
  font-family: DM Sans;
  width: 360px;
  height: 525px;
  flex-shrink: 0;
  border-radius: 48px;
  background: var(--white-w-100, #fff);
  box-shadow: 80px 120px 504px 0px rgba(0, 0, 0, 0.16);
  position: absolute;
  padding: 40px 32px;
  .ant-btn-primary {
    width: 296px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 16px;
    background: var(--blue-b-100, #0052cc);
  }
  h4 {
    color: var(--gray-g-100, #8f92a1);
    font-family: DM Sans;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 166.667% */
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 10px 0;
  }
`;

export const GoogleLink = styled.div`
  font-family: DM Sans;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: bold;
  border-radius: 16px;
  background: #f3f6f8;
  padding: 13px 0 13px 0;
  cursor: pointer;
  span {
    padding: 0 0 0 12px;
  }
`;

export const TitleWrapper = styled.div`
  h2 {
    color: var(--black-b-100, #171717);
    font-family: DM Sans;
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 136.364% */
    letter-spacing: -0.4px;
  }
  p {
    color: var(--gray-g-100, #8f92a1);
    font-family: DM Sans;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.4px;
  }
`;

export const FormField = styled.div`
  border-radius: 16px;
  background: var(--gray-g-05, rgba(143, 146, 161, 0.05));
  font-family: DM Sans;
  width: 296px;
  flex-shrink: 0;
  padding: 11px 56px 11px 24px;
  margin: 8px 0 8px;

  .ant-input {
    color: var(--gray-g-100, #8f92a1);
    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
    letter-spacing: -0.2px;
  }
`;

export const Terms = styled.div`
  padding: 24px 0;
  span {
    color: var(--gray-g-100, #8f92a1);
    font-family: DM Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
    letter-spacing: -0.2px;
    Link {
      color: var(--blue-b-100, #0052cc);
      font-family: DM Sans;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: -0.2px;
    }
  }
  a {
    color: var(--blue-b-100, #0052cc);
    text-align: right;
    font-family: DM Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 150% */
    letter-spacing: -0.4px;
    align-items: left;
  }
`;

export const AnAccount = styled.div`
  color: var(--gray-g-100, #8f92a1);
  font-family: DM Sans;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  padding-top: 16px;
  a {
    color: var(--blue-b-100, #0052cc);
    font-family: DM Sans;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.2px;
    text-decoration: none;
  }
`;
