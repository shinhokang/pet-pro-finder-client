import React from "react";
import styled from "../../typed-components";
import Card from "../../components/card";
import Button from "../../components/button";

interface IProps {
  handleFacebookLogin: () => void;
  handleGoogleLogin: () => void;
  handleKakaoLogin: () => void;
  handleNaverLogin: () => void;
}

const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLoginButton = styled.div`
  margin: 1.4rem;
`;

const SocialLoginPresenter: React.SFC<IProps> = ({
  handleFacebookLogin,
  handleGoogleLogin,
  handleKakaoLogin,
  handleNaverLogin
}) => (
  <Card>
    <SocialLoginContainer>
      <SocialLoginButton>
        <Button
          text="네이버로 로그인"
          onClick={handleNaverLogin}
          accent={false}
        />
      </SocialLoginButton>
      <SocialLoginButton>
        <Button
          text="카카오로 로그인"
          onClick={handleKakaoLogin}
          accent={false}
        />
      </SocialLoginButton>
      <SocialLoginButton>
        <Button
          text="페이스북으로 로그인"
          onClick={handleFacebookLogin}
          accent={false}
        />
      </SocialLoginButton>
      <SocialLoginButton>
        <Button
          text="구글로 로그인"
          onClick={handleGoogleLogin}
          accent={false}
        />
      </SocialLoginButton>
    </SocialLoginContainer>
  </Card>
);

export default SocialLoginPresenter;
