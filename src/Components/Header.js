import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { LOGO_URL, USER_ICON } from '../Utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.


    }).catch((error) => {
      // An error happened.

    });
  }

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();  //unsubscribing store when component unmounts
  }, []);




  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex  justify-between '>
      <img className='w-44' src={LOGO_URL} alt='logo' />
      {user &&
        <div className='flex '>
          <img className='w-12 h-12 p-2 m-4' src={user?.photoURL} alt='user' />
          <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
        </div>
      }
    </div>


  )
}

export default Header;