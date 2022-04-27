import { getAuth } from "firebase/auth";
import React from "react";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();
  const onLogOutClick = () => {
    const auth = getAuth();
    auth.signOut();
    history.push("/");
    // usehistory hook을 이용해서 이동할 수도 있다.
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
export default Profile;
