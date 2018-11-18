import React from "react";
import { toast } from "react-toastify";
import JoinPresenter from "./joinPresenter";

interface IProps {
  isLoggedIn: boolean;
}

interface IState {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export default class JoinContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      phoneNumber: ""
    };
  }

  render() {
    const { name, email, password, phoneNumber } = this.state;

    return (
      <JoinPresenter
        name={name}
        email={email}
        password={password}
        phoneNumber={phoneNumber}
        handleInputChange={this.handleInputChange}
        handleJoin={this.handleJoin}
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

  public handleJoin = () => {
    const { name, email, password, phoneNumber } = this.state;
    toast.info(name);
    toast.info(email);
    toast.info(password);
    toast.info(phoneNumber);
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
