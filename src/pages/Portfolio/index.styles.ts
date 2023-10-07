import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
`;

export const MobileWrapper = styled(Wrapper)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ProjectPreview = styled.div`
  width: 50%;
  height: calc(100vh - 95px - 40px - 90.02px);
  border: 1px solid #ffffff;
  border-radius: 8px;
`;

export const MobileProjectPreview = styled(ProjectPreview)`
  width: 100%;
  height: calc(70vh - 56px - 40px - 90.02px);
`;

export const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MobilePreviewImg = styled.img`
  width: auto;
  height: 100%;
  object-fit: contain;
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

export const MobileProjectsList = styled(ProjectsList)`
  height: 20vh;
  width: 100%;
`;

export const ProjectDetailWrapper = styled.div<{ mobile: boolean }>`
  margin-top: 30px;
  text-align: ${(props) => props.mobile ? "center" : "left"};
  padding: 20px;
  background: rgba(125, 125, 125, 0.1);
  border-radius: 8px;
  padding: 20px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(90px);
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
`;

export const StarsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const MatrixBackdrop = styled.img`
  width: auto;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;
