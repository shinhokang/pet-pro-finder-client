import React from "react";
import { toast } from "react-toastify";
import LoginPresenter from "./loginPresenter";

interface IProps {
  isLoggedIn: boolean;
}

interface IState {
  email: string;
  password: string;
}

export default class LoginContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    const { email, password } = this.state;

    return (
      <LoginPresenter
        email={email}
        password={password}
        handleInputChange={this.handleInputChange}
        handleLogin={this.handleLogin}
      />
    );
  }

  public handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };

  public handleLogin = () => {
    const { email, password } = this.state;
    toast.info(email);
    toast.info(password);
  };
}
