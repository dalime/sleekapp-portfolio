import styled from "styled-components";

export const PreviewsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  margin-left: 25%;
  margin-top: 30px;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    width: 80%;
    margin-left: 10%;
  }
`;

export const PreviewWrapper = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 20px;
  border: none;
  border-radius: 8px;
  box-shadow: rgba(255, 241, 118, 0.2) 0px 8px 24px;
`;
