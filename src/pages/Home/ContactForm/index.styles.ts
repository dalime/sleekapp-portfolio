import styled from "styled-components";
import { yellow } from "@mui/material/colors";

export const Form = styled.form`
  width: 100%;
  padding: 20px 5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Separator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-left: 25%;
  margin-bottom: 30px;
`;

export const Line = styled.hr`
  width: 300px;
  border: 1px solid ${yellow[500]};
`;

export const LogoImg = styled.img`
  width: 40px;
  height: auto;
  object-fit: contain;
`;
