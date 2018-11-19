import React from "react";
import { toast } from "react-toastify";
import SocialLoginPresenter from "./socialLoginPresenter";

interface IProps {}

export default class LoginContainer extends React.Component<IProps> {
  render() {
    return (
      <SocialLoginPresenter
        handleFacebookLogin={this.handleFacebookLogin}
        handleGoogleLogin={this.handleGoogleLogin}
        handleKakaoLogin={this.handleKakaoLogin}
        handleNaverLogin={this.handleNaverLogin}
      />
    );
  }

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
