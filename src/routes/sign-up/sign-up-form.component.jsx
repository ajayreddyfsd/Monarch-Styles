import { useState } from "react";

import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";

import { useContext } from "react";
import { UserContext } from "../../contexts/user.context"; // adjust path as needed

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-up-form.styles.scss";

//this is for initial state initialization
//instead of tracking all expected state variables individually,
//we just grouped them as a single state object
//below are initial values to that state object
//also below are the initial values to the respective input tags as well once the component is mounted
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  //state assignment and initialization
  const [formFields, setFormFields] = useState(defaultFormFields);

  //destructuring the formField key-values into seperate variables
  //why? to set the initial values for the input tags once the form is live
  const { displayName, email, password, confirmPassword } = formFields;

  //once the user signsup, we gonna set the context's user as the user
  const { setCurrentUser } = useContext(UserContext);

  //to reset the form back to its initial values
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  //only for new sign-ups
  //below method checks if the email in the db or not
  //if doesnt exist, puts the user data into the db and resets the form
  //if exists, gives error
  //goes into the form tag
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password.length < 6) {
      alert("password needs to be atleast 6 chars long");
      return;
    }

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      const { user: userAuth } = response;

      //passing the userAuth and formFields to store in the firestore DB
      await createUserDocumentFromAuth(userAuth, formFields);
      setCurrentUser(userAuth);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  //this method to collect that user entered data from each input tag seperately
  //goes into each of the input tags
  const handleChange = (event) => {
    const { name, value } = event.target;

    //need to spread and update
    //if done setFormFields({ [name]: value }), we assign a new object which has only single KV pair;
    setFormFields({ ...formFields, [name]: value });

    console.log("formFields", formFields);
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>

      {/* simple form using imported input and button tags instead of the usual ones */}
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit" buttonType="google">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
