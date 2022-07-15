import React, { useState } from 'react'
// import { logout } from './features/userSlice'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import './LogoutButton.css'
import { auth } from "./firebase";
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import { Navigate } from 'react-router-dom';

function LogoutButton() {

  const location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const user = useSelector(selectUser)

  return (
    <div>
      <button className='logoutButton' onClick={() => {
        signOut(auth)
        if (user) {
          navigate(from, { replace: true });
        }
      }}>Logout </button>
    </div >
  )
}

export default LogoutButton