import { useState } from "react";
import { InputTextBox } from "../../components/controls";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [valid, setValid] = useState({ email: false, password: false });

  const onChangeText = (event) => {
    const tempUser = { ...user };
    const tempValid = { ...valid };
    tempUser[event.target.name] = event.target.value;
    if (tempValid[event.target.name] && event.target.value !== "") {
      tempValid[event.target.name] = false;
    }
    setValid(tempValid);
    setUser(tempUser);
  };

  const onSubmitForm = () => {
    const tempValid = { ...valid };
    if (user.email === "") {
      tempValid.email = true;
    } else {
      tempValid.email = false;
    }
    if (user.password === "") {
      tempValid.password = true;
    } else {
      tempValid.password = false;
    }
    setValid(tempValid);
  };

  return (
    <div>
    <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label htmlFor="email" className="col-form-label">
            Email
          </label>
        </div>
        <div className="col-auto">
          <InputTextBox
            onChangeEvent={onChangeText}
            type="email"
            id="email"
            name="email"
            css="form-control"
            isRequired={true}
            isNotValid={valid.email}
            placeHolder="Email"
            errorMessage="Email is required"
          />
        </div>
    </div>

    <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label htmlFor="password" className="col-form-label">
            Password
          </label>
        </div>
        <div className="col-auto">
          <InputTextBox
            onChangeEvent={onChangeText}
            type="password"
            id="password"
            name="password"
            css="form-control"
            isRequired={true}
            isNotValid={valid.password}
            placeHolder="Password"
            errorMessage="Password is required"
          />
        </div>
    </div>
    <div className="row g-3 align-items-center">
    <button onClick={() => onSubmitForm()}>Submit</button>
    </div>
    </div>
  );
};
export default Login;
