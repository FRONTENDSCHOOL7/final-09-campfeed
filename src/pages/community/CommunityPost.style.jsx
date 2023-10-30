import styled from "styled-components";
import { InputStyle } from "../../components/form/form.style";

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

//게시글작성 input style
export const TextareaStyle = styled.textarea`
  width: 302px;
  min-height: 100px;
  resize: none; // 사용자가 크기를 변경할 수 없도록 함

  // 기타 원하는 스타일 요소 추가
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  padding: 10px;
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    border-color: #7cb45b; // 원하는 색상으로 변경하세요.
    outline: none; // 기본 outline 스타일을 제거
  }
  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #dbdbdb; /* 원하는 색상으로 변경하세요. */
    opacity: 1; /* Firefox의 경우 기본적으로 opacity를 적용하기 때문에 필요하면 1로 설정 */
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #dbdbdb; /* 원하는 색상으로 변경하세요. */
  }
`;
