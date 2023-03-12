import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { postWithCredentials } from "../data/postWithCredentials";
import { useUser } from "../auth/useUser";

const SingupPage = () => {
  const { isLoading, user } = useUser();
  const navigate = useNavigate();
  {
    user ? navigate("/") : null;
  }
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [register, setRegister] = useState(false);

  const auth = getAuth();

  const onClickSignUp = async () => {
    var validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailValue.trim() == "" || passwordValue.trim() == "") {
      setSignUpError("Fill the email and password..");
      return;
    }
    if (emailValue.match(validEmail)) {
      setSignUpError("");
    } else {
      setSignUpError("Fill the correct email..");
      return;
    }
    if (passwordValue.length < 6) {
      setSignUpError("Password length must be grater than 5...");
      return;
    }
    setSignUpError("");
    setRegister(true);
    console.log(emailValue, passwordValue);

    try {
      setSignUpError("");
      const response = await createUserWithEmailAndPassword(
        auth,
        emailValue,
        passwordValue
      );

      const firebaseEmail = response.user.email;
      const firebaseUid = response.user.uid;
      console.log(firebaseEmail, firebaseUid);

      const EmailAndUidOfFirebaseSavedToBackend = await postWithCredentials(
        `${import.meta.env.VITE_REACT_BACKEND_URL}/emailuid`,
        { firebaseEmail, firebaseUid }
      );
      const EmailAndUidOfFirebaseSavedToBackendResponse =
        await EmailAndUidOfFirebaseSavedToBackend.json();
      console.log(EmailAndUidOfFirebaseSavedToBackendResponse);

      setRegister(false);
      navigate("/");
    } catch (e) {
      setRegister(false);
      setSignUpError(e.message);
    }
  };

  return (
    <div className="full-height">
      <div className="centered-container space-before">
        {signUpError ? (
          <div>
            <p className="error-message">{signUpError}</p>
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
          onClick={onClickSignUp}
          disabled={register}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default SingupPage;
