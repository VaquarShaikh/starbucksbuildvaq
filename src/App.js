import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'
import HomeScreen from './screens/HomeScreen';
import Header from './Header';
import { Footer } from './Footer';
import LoginScreen from './screens/LoginScreen';
import { useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import SignupScreen from './screens/SignupScreen';
import MenuScreen from './screens/MenuScreen';
import Featured from './Featured';
import FeaturedScreen from './screens/FeaturedScreen';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from './Loading';

function App() {

  const [loading, error] = useAuthState(auth);
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName
          })
        )
      } else {
        // user is signed out 
        dispatch(
          logout(

          ))
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <HomeScreen />

            </>
          }
          />
          <Route path="/account/signin" element={user ? <Navigate to="/menu" /> : <LoginScreen />} />
          <Route path="/account/create" element={user ? <Navigate to="/menu" /> : <SignupScreen />} />
          <Route path="/menu" element={
            !user ? (
              // <>
              //   <Navigate to="/account/signin" />
              // </>
              loading ? (
                <Loading />
              ) : (
                <>
                  <Navigate to="/account/signin" />
                </>
              )
            ) : (
              <>
                <Header menuPage />
                <MenuScreen />
              </>
            )
          }
          />
          <Route path="/menu/featured" element={
            <>
              <Header />
              <FeaturedScreen />
              <Fade>
                <Footer />
              </Fade>
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
