import styled from "styled-components";

export const SearchInputStyle = styled.input`
  font-family: "TheJamsil5", sans-serif;
  width: 300px;
  height: 32px;
  border-radius: 32px;
  background: var(--Gray-6, #f2f2f2);
  border: 0;
  padding-left: 16px;
`;

export const SearchResultWrapper = styled.div`
  width: calc(100% - 32px);
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px 16px 20px 16px;
`;

export const SearchResultForm = styled.form`
  width: calc(100% - 8px);
  height: 50px;
  padding: 3px;
  display: flex;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  cursor: pointer;
`;

export const SearchResultProfileImg = styled.img`
  width: 45px;
  height: 45px;
  stroke-width: 0.5px;
  stroke: var(--DBDBDB, #dbdbdb);
  border-radius: 50%;
`;
export const SearchResultAccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px auto 6px 15px;
  gap: 6px;
`;

export const SearchResultUserName = styled.h3`
  font-size: 14px;
`;

export const SearchResultAccountName = styled.p`
  color: var(--767676, #767676);
  font-size: 12px;
`;
