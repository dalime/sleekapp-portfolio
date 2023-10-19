import styled from "styled-components";
import { yellow } from "@mui/material/colors";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${yellow[300]};
  width: 50%;
  height: 50%;
  min-height: 500px;
  margin-left: 25%;
  padding: 20px;

  @media (max-width: 768px) {
    width: 80%;
    margin-left: 10%;
  }
`;
