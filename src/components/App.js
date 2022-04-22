import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fBase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  // 로그인된 유저 목룍을 가져와서 로그인 여부를 파악하기
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
