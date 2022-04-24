import { async } from "@firebase/util";
import { authService } from "fBase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import React from "react";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    // console.log(value); 만약 email이나 password의 value의 값이
    // 정해져 있다면 그 값에서 바뀌지 않을 것임
    // name prop의 값에 따라서 email이나 password state를 변경
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault(); // 새로고침 방지
    try {
      let data;
      const auth = getAuth();
      if (newAccount) {
        // Create new account
        // persistence를 통해 타입을 바꿀 수 있다.
        // session : 창이 열려있는 동안 기억
        // local : 창이 닫혀도 기억
        // none : 기억하지 않음
        data = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        // Log in
        data = await signInWithEmailAndPassword(auth, email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input
          type="submit"
          value={newAccount ? "Create Account" : "Sign in"}
        />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "Sign in" : "Create Account"}
      </span>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
};

export default Auth;
