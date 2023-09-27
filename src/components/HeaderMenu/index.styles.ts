import styled from "styled-components";

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Wrapper = styled(FlexRow)`
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: fit-content;
  color: #ffffff;
  z-index: 1;
`;

export const RightSide = styled(FlexRow)`
  justify-content: flex-end;
`;

export const LeftSide = styled(FlexRow)`
  justify-content: flex-start;
`;
