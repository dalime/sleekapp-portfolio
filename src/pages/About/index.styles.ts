import styled from "styled-components";
import { grey } from "@mui/material/colors";

export const OptionsWrapper = styled.div`
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Rows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const TechWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  margin-bottom: 16px;
  height: 60px;
  cursor: pointer;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
  }
`;

export const TechImg = styled.img`
  width: auto;
  height: 30px;
  object-fit: contain;
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-top: 10px;
  }
`;

export const TechText = styled.p`
  color: ${grey[300]};
  font-size: 14px;
`;

export const TeamMemberImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  border-radius: 50%;
`;
