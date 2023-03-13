import React, { useState } from 'react';

import Logo from '../img/logo1.png';
import Avatar from '../img/avatar.png';
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase.config';
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';
import { async } from '@firebase/util';

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setusMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem('user', JSON.stringify(providerData[0]));
    } else {
      setusMenu(!isMenu);
    }
  };

  const logout = () => {
    setusMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };
  return (
    <header
      className='w-screen
      px-8 pt-6 '
    >
      {/*desktop view*/}
      <div className='hidden md:flex w-full h-full '>
        <Link to={'/'} className='flex items-center gap-2'>
          <img src={Logo} className='w-20 h-20 object-cover' alt='logo' />
        </Link>

        <div className='flex items-center gap-8 ml-auto'>
          <motion.ul
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            className='flex items-center gap-6 ml-8'
          >
            <li
              className='text-base text-textColor hover:text-headingColor duration-100
                    transition-all ease-in-out cursor-pointer'
            >
              Home
            </li>
            <li
              className='text-base text-textColor hover:text-headingColor duration-100
                    transition-all ease-in-out cursor-pointer'
            >
              Menu
            </li>
            <li
              className='text-base text-textColor hover:text-headingColor duration-100
            transition-all ease-in-out cursor-pointer'
            >
              About Us
            </li>
            <li
              className='text-base text-textColor hover:text-headingColor duration-100
            transition-all ease-in-out cursor-pointer'
            >
              Service
            </li>
          </motion.ul>
          <div className='relative flex items-center justify-center'>
            <MdShoppingBasket className='text-gray-500 text-2xl cursor-pointer' />
            <div className=' absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center'>
              <p className='text-xs text-white font-semibold'>2</p>
            </div>
          </div>

          <div className='relative'>
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className='w-10 min-w-[40px] h-10 drop-shadow-xl cursor-pointer rounded-full'
              alt='UserProfile'
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.3 }}
                className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'
              >
                {user && user.email === 'christian.lescano07@gmail.com' && (
                  <Link to={'/createItem'}>
                    <p
                      className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
                transition-all duration-100 ease-in-out text-textColor text-base'
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}

                <p
                  className='m-2 p-2 rounded-md shadow-md flex items-center justify-center  bg-red-500 gap-3 cursor-pointer hover:bg-red-200
              transition-all duration-100 ease-in-out text-white text-base'
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/*Mobile view*/}

      <div className='flex items-center justify-between md:hidden w-full h-full '>
        <div className='relative flex items-center justify-center'>
          <MdShoppingBasket className='w-8 h-8 text-gray-500 text-2xl cursor-pointer' />
          <div className=' absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center'>
            <p className='text-xs text-white font-semibold'>2</p>
          </div>
        </div>
        <Link to={'/'} className='flex items-center justifty-left'>
          <img src={Logo} className='w-20 h-20 object-cover' alt='logo' />
        </Link>
        <div className='relative'>
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className='width-3.5rem min-w-[40px] h-10  drop-shadow-xl cursor-pointer rounded-full'
            alt='UserProfile'
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.3 }}
              className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'
            >
              {user && user.email === 'christian.lescano07@gmail.com' && (
                <Link to={'/createItem'}>
                  <p
                    className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
                transition-all duration-100 ease-in-out text-textColor text-base'
                  >
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <ul className='flex flex-col gap-6 px-4 py-2'>
                <li
                  className='text-base text-textColor hover:text-headingColor duration-100
                    transition-all ease-in-out cursor-pointer hover:bg-slate-100'
                >
                  Home
                </li>
                <li
                  className='text-base text-textColor hover:text-headingColor duration-100
                    transition-all ease-in-out cursor-pointer hover:bg-slate-100'
                >
                  Menu
                </li>
                <li
                  className='text-base text-textColor hover:text-headingColor duration-100
            transition-all ease-in-out cursor-pointer hover:bg-slate-100'
                >
                  About Us
                </li>
                <li
                  className='text-base text-textColor hover:text-headingColor duration-100
            transition-all ease-in-out cursor-pointer hover:bg-slate-100'
                >
                  Service
                </li>
              </ul>
              <p
                className='m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-blue-400 gap-3 cursor-pointer hover:bg-red-200
              transition-all duration-100 ease-in-out text-white text-base'
                onClick={logout}
              >
                New Item <MdAdd />
              </p>
              <p
                className='m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-red-500 gap-3 cursor-pointer hover:bg-red-200
              transition-all duration-100 ease-in-out text-white text-base'
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
