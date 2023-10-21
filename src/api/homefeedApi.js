export const homefeedApi = async token => {
  const reqUrl = "https://api.mandarin.weniv.co.kr/post/feed";

  try {
    const res = await fetch(reqUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWY1ZWUwYjJjYjIwNTY2Mzc2ZTY0YyIsImV4cCI6MTcwMTczOTk4MiwiaWF0IjoxNjk2NTU1OTgyfQ.QKNZ-L28iBciLX-oc5PI8nx42j320dHhUCNDvpzboNc`,
        "Content-type": "application/json",
      },
    });
    const json = await res.json();
    return json;
  } catch (error) {
    console.log("Api 응답 실패", error);
  }
};
