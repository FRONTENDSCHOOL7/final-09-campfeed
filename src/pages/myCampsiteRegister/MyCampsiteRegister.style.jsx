import styled from "styled-components";

export const WrapperMyCampsiteRegister = styled.section`
  width: 100%;
  height: calc(100vh - 50px);
  gap: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 34px 34px 34px 34px;
  box-sizing: border-box;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const WrapperMyCampsiteInput = styled.div`
  gap: 6px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const WrapperLabel = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const FileUploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  border: 0.5px solid var(--DBDBDB, #dbdbdb);
  background: var(--Gray-6, #f2f2f2);
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  background-image: url(${props => props.$previewImage});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  &:hover {
    border: 0.5px solid var(--primary-disabled-color);
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const UploadButtonText = styled.p`
  margin: 0;
  color: #666666;
  font-size: 16px;
  display: ${props => (props.$previewImage ? "none" : "block")};
`;

export const GoBackButton = styled.img`
  cursor: pointer;
`;
