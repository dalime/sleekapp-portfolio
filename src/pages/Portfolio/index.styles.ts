import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100v%;
  height: fit-content;
`;

export const ProjectPreview = styled.div`
  width: 50%;
  height: calc(100vh - 95px - 40px - 90.02px);
  border: 1px solid #ffffff;
  border-radius: 8px;
`;

export const ProjectsList = styled.div`
  height: calc(100vh - 95px - 40px - 90.02px);
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  overflow-y: auto;
  border: 1px solid #ffffff;
  border-radius: 8px;
`;
