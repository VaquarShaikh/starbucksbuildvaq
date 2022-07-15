import React from 'react'
import { Link } from 'react-router-dom'
import {selectUser} from './features/userSlice'
import { Example } from './Example'
import FindAStore from './FindAStore'
import { useSelector } from 'react-redux/es/exports'
import './Header.css'
import SignInButton from './SignInButton'
import SignUpButton from './SignUpButton'
import LogoutButton from './LogoutButton'

function Header({menuPage}) {

  const user = useSelector(selectUser)

  return (
    <div className={`header ${menuPage && 'header__menuPage'}`}>
      <div className='header__left'>
        <Link className='header__logo' to='/'>
          <img
            src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'
            alt='StarbucksLogo'
          />
        </Link>
        <Link className='header__link' to='/menu'>
          Menu
        </Link>
        <Link className='header__link' to='/menu'>
          Rewards
        </Link>
        <Link className='header__link' to='/menu'>
          Gift Cards
        </Link>
      </div>
      <div className='header__right'>
          <Example/>
          <FindAStore/>
          {!user ? (
            <>
            <Link to='/accounts/signin'>
              <SignInButton/>
            </Link>
            <Link to='/accounts/create'>
              <SignUpButton/>
            </Link>
            </>
          ) : (
            <div className='header__logout'>
              {menuPage ? <LogoutButton/> : <Link to='/menu'>Order Now</Link>}
            </div>
          )}
      </div>
    </div>
  )
}

export default Header