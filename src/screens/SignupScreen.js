import React from 'react'
import { Link } from 'react-router-dom'
import FooterSecondary from '../FooterSecondary'
import SignupForm from '../SignupForm'
import './SignupScreen.css'

function SignupScreen() {
    return (
        <div className='signupScreen'>
            <div className='signupScreen__header'>
                <Link to="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
                        alt="starbucks logo"
                    />
                </Link>
            </div>
            <h1 className='signupScreen__heading'>
                Create an account
            </h1>
            <div className='signupScreen__rewards'>
                <h4>
                    STARBUCKS REWARDS
                </h4>
                <p>
                    Join Starbucks Rewards to earn Stars for free food and drinks, any way
                    you pay. Get access to mobile ordering, a birthday Reward, and{" "}
                    <Link to="">more</Link>.
                </p>
            </div>
            <SignupForm />
            <FooterSecondary alignItems='center' flexDirection='column' />
        </div>
    )
}

export default SignupScreen