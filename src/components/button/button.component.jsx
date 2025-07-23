import "./button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

// how props object passed to this Component looks like
// {
//   buttonType: "google",
//   type: "submit"
//   children: "Sign In with Google"
// }

//this component is same as button-tag in html but more customized, we use this comp in both sign-in and sign-out routes
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
