import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fBase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 로그인된 유저 목룍을 가져와서 로그인 여부를 파악하기
  useEffect(() => {
    // onAuthStateChanged((user) => callback_func)
    // 이벤트 리스너
    // 유저 상태에 변화가 있을 때에 변화를 알아차림
    // 로그아웃, 계정 생성, firebase 초기화(init) 등등...
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        const uid = user.uid;
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []); // 로그인 여부 확인 가능
  // 크롬 -> 개발자 옵션 -> application -> storage -> indexed...
  // -> firebase... -> firebase...에서 확인 가능(삭제하면 로그 아웃)
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initialiaing..."}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
