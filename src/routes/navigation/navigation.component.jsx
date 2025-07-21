import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  //getting the user auth status from the stored global context
  const { currentUser } = useContext(UserContext);
  console.log("CURRENT USER: ", currentUser);

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
        {/* the first one is an image based link */}
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/home">
            HOME
          </Link>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {/* if we have any current user in the global context,
          we will display sign-out. if no current user, we will display sign-in and sign-up,
          for the user to sign-in or sign-up*/}
          {currentUser ? (
            <Link className="nav-link" to="/sign-out" onClick={signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <div>
              <Link className="nav-link" to="/sign-in">
                SIGN IN
              </Link>
              <Link className="nav-link" to="/sign-up">
                SIGN UP
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* specifying the desginated place to go to for the nested routes */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

//todo: also, why no component imports in the navigation comp, how do the Link tags work w/o component imports

//todo: Link tag must have to attr set, or else error
//todo: if u wanna use Link-tag without to-attr, then use span-tag with onClick-attr
