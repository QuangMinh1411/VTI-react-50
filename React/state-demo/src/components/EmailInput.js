import React, { useState } from "react";

const EmailInput = () => {
  const [emailValid, setEmailValid] = useState(true);
  const checkEmail = (e) => {
    const email = e.target.value;

    if (email.trim() === "" || !email.includes("@")) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  };
  return (
    <div>
      <input placeholder="Your email" type="text" onBlur={checkEmail} />
      {!emailValid && <p>The entered email address is invalid.</p>}
    </div>
  );
};

export default EmailInput;
