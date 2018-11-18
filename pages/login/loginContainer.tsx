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
        handleFacebookLogin={this.handleFacebookLogin}
        handleGoogleLogin={this.handleGoogleLogin}
        handleKakaoLogin={this.handleKakaoLogin}
        handleNaverLogin={this.handleNaverLogin}
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

  public handleLogin = (email: string, password: string) => {
    toast.info(email);
    toast.info(password);
  };
  public handleFacebookLogin = () => {
    toast.info("Facebook login");
  };
  public handleGoogleLogin = () => {
    toast.info("Google login");
  };
  public handleKakaoLogin = () => {
    toast.info("Kakao Login");
  };
  public handleNaverLogin = () => {
    toast.info("Naver Login");
  };
}
