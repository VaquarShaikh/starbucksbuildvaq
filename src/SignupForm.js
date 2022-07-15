import React, { useState } from "react";
import "./SignupForm.css";
import CloseIcon from '@mui/icons-material/Close';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useForm } from "react-hook-form";
import FormSubmit from "./FormSubmit";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'


function SignupForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [passwordShown, setPasswordShown] = useState(false);
    const dispatch = useDispatch();

    const [
        createUserWithEmailAndPassword,
        userCred,
        loading,
        userError,
    ] = useCreateUserWithEmailAndPassword(auth);


    let navigate = useNavigate();

    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: "",
        // confirmPassword: "",
    })

    const [error, setError] = useState('')

    const onSubmit = ({ fName, lName, email, password, event }) => {

        event.preventDefault()
        if (error) setError('')

        if (password.length <= 7) {
            setError('Length of password must be atleast 8 characters')
            return;
        }

        createUserWithEmailAndPassword(email, password)
    };


    return (
        <div className="signupForm">
            <div className="signupForm__container">
                <form onSubmit={handleSubmit(onSubmit)} className="signupForm__form">
                    <h4 className="signupForm__section">Personal Information</h4>
                    <div className="signupForm__inputContainer">
                        <TextField
                            name="fName"
                            label="First name"
                            type="text"
                            InputLabelProps={{
                                style: { color: "rgba(0,0,0,.56)" },
                            }}
                            InputProps={{ style: { fontWeight: "800" } }}
                            className="signupForm__input"
                            {...register('fName', { required: true })}
                        />
                        {errors.fName && (
                            <div className="signupForm__error">
                                <CloseIcon fontSize="small" />
                                <span>Enter your first name.</span>
                                <ReportProblemRoundedIcon
                                    fontSize="small"
                                    className="signupForm__reportIcon"
                                />
                            </div>
                        )}
                    </div>

                    <div className="signupForm__inputContainer">
                        <TextField
                            name="lName"
                            label="Last name"
                            type="text"
                            InputLabelProps={{
                                style: { color: "rgba(0,0,0,.56)" },
                            }}
                            InputProps={{ style: { fontWeight: "800" } }}
                            className="signupForm__input"
                            {...register('lName', { required: true })}
                        />
                        {errors.lName && (
                            <div className="signupForm__error">
                                <CloseIcon fontSize="small" />
                                <span>Enter your last name.</span>
                                <ReportProblemRoundedIcon
                                    fontSize="small"
                                    className="signupForm__reportIcon"
                                />
                            </div>
                        )}
                    </div>
                    <h4 className="signupForm__section">Account Security</h4>
                    <div className="signupForm__inputContainer">
                        <TextField
                            name="email"
                            label="Email Address"
                            type="email"
                            InputLabelProps={{
                                style: { color: "rgba(0,0,0,.56)" },
                            }}
                            InputProps={{ style: { fontWeight: "800" } }}
                            className="signupForm__input"
                            {...register('email', { required: true })}
                        />
                        {errors.email && (
                            <div className="signupForm__error">
                                <CloseIcon fontSize="small" />
                                <span>Enter an email.</span>
                                <ReportProblemRoundedIcon
                                    fontSize="small"
                                    className="signupForm__reportIcon"
                                />
                            </div>
                        )}
                    </div>

                    <div className="signupForm__inputContainer">
                        <TextField
                            name="password"
                            label="Password"
                            type={passwordShown ? "text" : "password"}
                            InputLabelProps={{
                                style: { color: "rgba(0,0,0,.56)" },
                            }}
                            InputProps={{ style: { fontWeight: "800" } }}
                            className="signupForm__input"
                            {...register('password', { required: true })}
                        />
                        {passwordShown ? (
                            <VisibilityOutlinedIcon
                                onClick={() => setPasswordShown(!passwordShown)}
                                className="signupForm__visibilityIcon"
                            />
                        ) : (
                            <VisibilityOffOutlinedIcon
                                onClick={() => setPasswordShown(!passwordShown)}
                                className="signupForm__visibilityIcon"
                            />
                        )}
                        {errors.password && (
                            <div className="signupForm__error">
                                <CloseIcon fontSize="small" />
                                <span>Enter an password.</span>
                                <ReportProblemRoundedIcon
                                    fontSize="small"
                                    className="login__reportIcon"
                                />
                            </div>
                        )}
                    </div>
                    <h4 className="signupForm__rewards">
                        COLLECT MORE STARS & EARN REWARDS
                    </h4>
                    <span className="signupForm__span">
                        Email is a great way to know about offers and what’s new from
                        Starbucks.
                    </span>
                    <FormSubmit name="Create account" type="submit" />
                </form>
            </div>
        </div>
    );
}

export default SignupForm;
