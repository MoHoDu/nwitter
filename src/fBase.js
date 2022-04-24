import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};
// 보안을 위해 하는 것이지만 완전히 보안이 되지는 않음
// 앱을 빌드할 때에 코드로 실제 값들로 바꾸기 때문에 보안은 아직 취약
// 깃허브에서만 key값을 업로드 안하기 위한 과정 -> gitignore에도 env 추가
// env 파일은 반드시 프로젝트의 가장 상위 폴더 안에 있어야함

initializeApp(firebaseConfig);

export const authService = getAuth();
// firebase의 auth를 사용하기 위해 가져오는 작업
// ./혹은 ../을 찍어서 표현 안해도 되도록 만드는 파일(-> jsconfig.json)
