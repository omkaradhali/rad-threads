import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../../src/assets/crown.svg'
import "./navigation.styles.scss"

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;