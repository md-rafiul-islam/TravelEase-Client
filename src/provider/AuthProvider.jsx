import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
export const Authcontext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (result) => {
      setUser(result);
    });

    return () => unsubscribed();
  }, []);

  // signOut a user
  const logOut = () => {
    return signOut(auth);
  };

  //  google login
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // login with email and password
  const handleEmailAndPasswordLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //create account with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // update user data
  const updateUserInfo = (newData) => {
    return updateProfile(auth.currentUser, newData);
  };

  const userData = {
    user,
    logOut,
    handleGoogleLogin,
    createUser,
    updateUserInfo,
    handleEmailAndPasswordLogin,
  };

  return <Authcontext value={userData}>{children}</Authcontext>;
};

export default AuthProvider;
