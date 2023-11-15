import styled from "styled-components";

// My Team
export const MyTeamWrapper = styled.div`
  width: 100%;
  padding: 48px 50px;
  margin-bottom: 24px;
  border-radius: 16px;
  background: var(--gray-g-05, rgba(143, 146, 161, 0.05));
  .ant-row {
    display: flex;
    align-items: center;
  }
`;

export const MyTeamHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  p {
    color: var(--gray-g-100, #8f92a1);
    font-feature-settings: "clig" off, "liga" off;
    /* Bold/Label */
    font-family: DM Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 166.667% */
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

export const InnerWrapper = styled.div`
  .ant-row {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const OuterDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TeamProfile = styled.div`
  padding: 24px;
  width: 338px;
  height: 152px;
  margin: 16px 0;
  border-radius: 16px;
  background: var(--white-w-100, #fff);
  font-feature-settings: "clig" off, "liga" off;
  padding: 16px 24px;
  .ant-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .ant-row {
      display: flex;
      .ant-col {
        padding-left: 12px;
        h2 {
          font-size: 14px;
          font-weight: bold;
          /* line-height: 18px; */
        }
        p {
          color: var(--gray-g-100, #8f92a1);
          font-family: DM Sans;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          letter-spacing: -0.4px;
          margin: 0;
        }
      }
    }
    .ant-btn-text {
      display: flex;
      align-self: baseline;
    }
  }
`;

export const UserIcon = styled.div`
  padding-top: 24px;
  display: flex;
  .ant-avatar {
    width: 32px;
    height: 32px;
    margin: 4px 4px 4px 0;
  }
`;

export const AddTeamBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  width: 338px;
  height: 152px;
  cursor: pointer;
  border-radius: 16px;
  background: var(--gray-g-05, rgba(143, 146, 161, 0.05));
  span {
    color: var(--black-b-100, #171717);
    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
  }
`;

// My Projects
export const MyProjectsWrapper = styled.div`
  width: 100%;
  padding: 48px 50px;
  margin-bottom: 24px;
  border-radius: 16px;
  background: var(--gray-g-05, rgba(143, 146, 161, 0.05));
  .ant-row {
    display: flex;
    align-items: center;
  }
`;

export const ProjectSummary = styled.div`
  width: 338px;
  height: 226px;
  margin: 16px 0;
  border-radius: 16px;
  background: var(--white-w-100, #fff);
  font-feature-settings: "clig" off, "liga" off;
  padding: 24px;

  p {
    color: var(--gray-g-100, #8f92a1);
    font-feature-settings: "clig" off, "liga" off;

    /* Regular/Title Small */
    font-family: DM Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 150% */
    letter-spacing: -0.4px;
    margin: 0;
  }

  .ant-row {
    display: flex;
    align-items: center;
    justify-content: left;

    label {
      border-radius: 8px;
      background: var(--gray-g-20, rgba(143, 146, 161, 0.2));

      display: flex;
      padding: 2px 8px;
      flex-direction: row;
      align-items: center;
      gap: 10px;

      margin: 16px 16px 16px 0;
      color: var(--gray-g-100, #8f92a1);
      font-family: DM Sans;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 171.429% */
      letter-spacing: -0.2px;
    }
  }
  .ant-btn-text {
    display: flex;
    align-self: baseline;
  }
  .ant-progress {
    padding: 0;
    margin: 0;
  }
`;

export const ProjectTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  span {
    color: var(--black-b-100, #171717);
    font-feature-settings: "clig" off, "liga" off;
    /* Bold/H3 */
    font-family: DM Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 137.5% */
    letter-spacing: -0.4px;
    min-width: 242px;
  }
  .ant-btn-text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const AddProjectBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  width: 338px;
  height: 226px;
  cursor: pointer;
  border-radius: 16px;
  background: var(--gray-g-05, rgba(143, 146, 161, 0.05));
  span {
    color: var(--black-b-100, #171717);
    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
  }
`;
