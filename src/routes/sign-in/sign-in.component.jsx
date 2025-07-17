// remember we wrote google sign and auth in firebase utils, we are just importing them into this signin component
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

//now before we start using the firebase utils
//go to the firebase project
//go to authentication tab, then sign-in method, choose the provider, here google, and save
//also give a support email
//u can also perform 2 factor sms authentication, but need to upgrade the firebase project
const SignIn = () => {
  //for popup
  //simple function that waits till promise is resolved and prints the response to the console
  //u can see the response and access token in the google dev tab console
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();

    //i just need the user object from the whole resposne object
    //which we will pass to the create user function
    //this will be userAuth for the createUserDocumentFromAuth
    const { user: userAuth } = response;
    console.log("user or userAuth obj of response obj:", userAuth);
    createUserDocumentFromAuth(userAuth);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
