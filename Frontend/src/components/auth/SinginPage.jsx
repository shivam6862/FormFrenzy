import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useUser } from "../auth/useUser";

const SigninPage = () => {
  const { isLoading, user } = useUser();
  const navigate = useNavigate();
  {
    user ? navigate("/") : null;
  }
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [signInError, setSignInError] = useState("");
  const [singIn, setsingIn] = useState(false);
  const auth = getAuth();

  const onClickSignIn = async () => {
    var validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailValue.trim() == "" || passwordValue.trim() == "") {
      setSignInError("Fill the email and password..");
      return;
    }
    if (emailValue.match(validEmail)) {
      setSignInError("");
    } else {
      setSignInError("Fill the correct email..");
      return;
    }
    if (passwordValue.length < 6) {
      setSignInError("Password length is small...");
      return;
    }
    setsingIn(true);
    setSignInError("");

    try {
      setSignInError("");
      await signInWithEmailAndPassword(auth, emailValue, passwordValue);
      navigate("/");
    } catch (e) {
      setsingIn(false);
      setSignInError(e.message);
    }
  };
  return (
    <div className="full-height">
      <div className="centered-container space-before">
        {signInError ? (
          <div>
            <p className="error-message">{signInError}</p>
          </div>
        ) : null}
        <input
          type="text"
          value={emailValue}
          placeholder="Email address"
          className="full-width space-after"
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <input
          type="password"
          value={passwordValue}
          placeholder="Password"
          className="full-width space-after"
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <button
          className="full-width sing-in-button"
          onClick={onClickSignIn}
          disabled={singIn}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SigninPage;
