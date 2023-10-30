import React, { useEffect, useState } from "react";
import {
  SearchResultAccountName,
  SearchResultAccountWrapper,
  SearchResultForm,
  SearchResultProfileImg,
  SearchResultUserName,
  SearchResultWrapper,
} from "./Search.style";
import { searchUser } from "../../api/searchUserApi";
import { useNavigate } from "react-router-dom";
import defaultProfileImage from "../../assets/image/profile-default-image.jpg";
import HeaderSearch from "../../components/header/HeaderSearch";

export default function Search() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // input에 검색어를 입력하면 호출되는 핸들러
  const handleInputChange = e => {
    setSearchKeyword(e.target.value); // 검색 키워드 상태 업데이트
  };

  // 디바운스를 위한 입력값 타이머
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(async () => {
      if (searchKeyword) {
        const results = await searchUser(searchKeyword);
        setSearchResults(results);
        console.log(searchResults);
      }
    }, 400);
    setTimer(newTimer);

    return () => {
      clearTimeout(timer);
    };
  }, [searchKeyword]);

  const navigate = useNavigate();

  return (
    <>
      <HeaderSearch handleInputChange={handleInputChange} />
      <SearchResultWrapper>
        {searchResults.map((data, id) => {
          return (
            <SearchResultForm
              key={id}
              onClick={() => navigate(`/profile/${data.accountname}`)}
            >
              <SearchResultProfileImg
                src={data.image}
                alt="프로필 이미지"
                onError={e => {
                  e.target.onError = null;
                  e.target.src = defaultProfileImage;
                }}
              />

              <SearchResultAccountWrapper>
                <SearchResultUserName>{data.username}</SearchResultUserName>
                <SearchResultAccountName>
                  @{data.accountname}
                </SearchResultAccountName>
              </SearchResultAccountWrapper>
            </SearchResultForm>
          );
        })}
      </SearchResultWrapper>
    </>
  );
}