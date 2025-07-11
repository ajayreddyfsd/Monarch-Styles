import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    //these are just a group of links
    //first one is an image based link for the logo
    //second and third are the usual internal navigation links
    //we are using Link tag instead of a-tag as that is recommended in react for smooth internal transitions
    //finally we have put outlet tag, coz we need this component on all the webpages.
    //so we use this component as nested route and we need to tell the children routes
    //where they are supposed to go in the parent route
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
