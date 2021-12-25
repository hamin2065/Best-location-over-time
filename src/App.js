import React, { useEffect } from "react";
import kakaoMap from "./kakaoMap";

function App() {
  useEffect(() => {
    kakaoMap();
  }, []);

  return (
    <>
      <div id="address_box">주소를 입력하는 박스</div>
      <div
        id="myMap"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      ></div>
    </>
  );
}

export default App;
