import React, { useState } from "react";
import "./LoginScreen.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../features/userSlice";
import FormSubmit from "../FormSubmit";
import FooterSecondary from "../FooterSecondary";
import { TextField } from "@mui/material";
import { auth } from "../firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";


function LoginScreen() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const userData = useSelector(selectUser)

  const onSubmit = ({ email, password }) => {
    signInWithEmailAndPassword(email, password)
    console.log("user : ", userData)
  }

  return (
    <div className="loginScreen">
      <div className="loginScreen__left">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt=""
          />
        </Link>
        <div className="loginScreen__info">
          <h1>Sign in or create an account 🌟</h1>
        </div>
      </div>
      <div className="loginScreen__right">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="loginScreen__inputContainer">
            <TextField
              name="email"
              label="Email Address"
              type="email"
              variant="standard"
              InputLabelProps={{
                style: { color: "rgba(0,0,0,.56)" },
              }}
              InputProps={{ style: { fontWeight: "800" } }}
              className="loginScreen__input"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <div className="loginScreen__error">
                <CloseIcon fontSize="small" />
                <span>Enter an email.</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="loginScreen__reportIcon"
                />
              </div>
            )}
          </div>
          <div className="loginScreen__inputContainer">
            <TextField
              name="password"
              label="Password"
              variant="standard"
              type={passwordShown ? "text" : "password"}
              InputLabelProps={{
                style: { color: "rgba(0,0,0,.56)" },
              }}
              InputProps={{ style: { fontWeight: "800" } }}
              className="loginScreen__input"
              {...register('password', { required: true })}
            />
            {passwordShown ? (
              <VisibilityOutlinedIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className="loginScreen__visibilityIcon"
              />
            ) : (
              <VisibilityOffOutlinedIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className="loginScreen__visibilityIcon"
              />
            )}
            {errors.password && (
              <div className="loginScreen__error">
                <CloseIcon fontSize="small" />
                <span>Enter an password.</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="loginScreen__reportIcon"
                />
              </div>
            )}
          </div>
          <div className="loginScreen__resetLinks">
            <Link to="">Forgot your username?(yeh implement nai kia h)</Link>
            <Link to="">Forgot your password?(yeh bhi implement nai kia)</Link>
          </div>
          <FormSubmit name="Sign in" type="submit" />
        </form>
        <div className="loginScreen__rewards">
          <h4>JOIN STARBUCKS® REWARDS</h4>
        </div>
        <div className="loginScreen__joinNow">
          <div className="loginScreen__joinNowContainer">
            <Link to="/account/create">Join now</Link>
            <h4>Create an account and bring on the Rewards!</h4>
            <p>
              Join Starbucks® Rewards to earn free food and drinks, get free
              refills, pay and order with your phone, and more.
            </p>
          </div>
        </div>
        <FooterSecondary paddingLeft={30} flexDirection="column" />
      </div>
    </div>
  );
}

export default LoginScreen;
