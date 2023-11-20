import styled from "styled-components";

export const ChatHeaderWrapper = styled.div`
  width: 100%;
  height: 128px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
`;

export const UserChatHeader = styled.div`
  margin: 16px 0;
  cursor: pointer;
  width: 200px;
  .ant-row {
    display: flex;
    justify-content: center;
    align-items: center;
    .ant-col {
      padding-left: 16px;
      label {
        color: var(--black-b-100, #171717);
        /* Bold/H3 */
        font-family: DM Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px; /* 137.5% */
        letter-spacing: -0.4px;
      }
      p {
        color: var(--gray-g-100, #8f92a1);
        font-family: DM Sans;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 166.667% */
        letter-spacing: -0.2px;
        padding: 0;
        margin: 0;
      }
    }
  }
`;

export const RightSideHeader = styled.div`
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin: 12px;
  }
`;
