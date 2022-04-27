import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "routes/Profile";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      {/* Navigation이 존재하려면 앞에 값이 true여야 함 : && */}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            {/* <Redirect from="*" to="/" /> */}
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth />
            </Route>
            {/* <Redirect from="*" to="/" /> */}
            {/* isLoggedIn이 아닌데 주소가 /이 아니면 /로 가기 */}
          </>
        )}
      </Switch>
    </Router>
  );
};
// <></> : Fragment, 많은 컴포넌트를 render하고 싶은데
// 따로 부모 컴포넌트를 만들고 싶지 않을 때에 사용

export default AppRouter;
