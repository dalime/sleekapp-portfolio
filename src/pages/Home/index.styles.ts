import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const HeroWrapper = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: fit-content;
  padding: 5%;
`;

export const HeroLeft = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(100vw - 400px);
  height: fit-content;
  text-align: left;
`;

export const CaseStudiesWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;