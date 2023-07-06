import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { logo } from '../../assets';
import { AuthUser } from '../../utils/auth';

const Header = () => {
  const auth = AuthUser();

  const handleLogout = () => {
    auth.logout();
  };
  return (
    <header className='header'>
      <div className='container'>
        <nav className='navbar'>
          <NavLink to='/' className='logo'>
            <img src={logo} alt='Logo' />
          </NavLink>
          <div className='nav-items'>
            {auth.user && (
              <NavLink to='/' className='nav-link'>
                Home
              </NavLink>
            )}
            {auth.user && (
              <NavLink to='/blog' className='nav-link'>
                Blog
              </NavLink>
            )}
            <NavLink to='/about' className='nav-link'>
              About Us
            </NavLink>
            {!auth.user && (
              <>
                <NavLink to='/register' className='nav-link'>
                  Register
                </NavLink>
                <NavLink to='/login' className='nav-link nav-link-login'>
                  Login
                </NavLink>
              </>
            )}
            {auth.user && (
              <NavLink
                to='/login'
                className='nav-link nav-link-login'
                onClick={handleLogout}
              >
                Logout
              </NavLink>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
