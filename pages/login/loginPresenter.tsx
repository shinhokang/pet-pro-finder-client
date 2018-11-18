import React from "react";
import Head from "next/head";
import styled from "../../typed-components";
import Wrapper from "../../components/wrapper";
import Card from "../../components/card";
import Input from "../../components/input";
import Title from "../../components/title";
import Form from "../../components/form";
import Button from "../../components/button";
import routes from "../../routes";
import Link from "next/link";

const Container = styled.div`
  max-width: 500px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ETitle = styled(Title)`
  margin-bottom: 20px;
`;

const EForm = styled(Form)`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EInput = styled(Input)`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

const FormInputs = styled.div`
  margin-bottom: 20px;
`;

const EFormButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const EFormButton = styled.div`
  margin: 1.4rem;
`;

const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLoginButton = styled.div`
  margin: 1.4rem;
`;

interface IProps {
  email: string;
  password: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => void;
  handleFacebookLogin: () => void;
  handleGoogleLogin: () => void;
  handleKakaoLogin: () => void;
  handleNaverLogin: () => void;
}

const ProductEditorPresenter: React.SFC<IProps> = ({
  email,
  password,
  handleInputChange,
  handleLogin,
  handleFacebookLogin,
  handleGoogleLogin,
  handleKakaoLogin,
  handleNaverLogin
}) => (
  <Wrapper>
    <Head>
      <title>Dog Problem | 로그인</title>
    </Head>
    <Container>
      <ETitle>로그인</ETitle>
      <Card>
        <EForm onSubmit={handleLogin}>
          <FormInputs>
            <EInput
              required={true}
              type={"text"}
              name={"email"}
              placeholder={"Email *"}
              value={email}
              onChange={handleInputChange}
            />
            <EInput
              required={true}
              type={"password"}
              name={"password"}
              placeholder={"Password *"}
              value={password}
              onChange={handleInputChange}
            />
          </FormInputs>
          <EFormButtons>
            <EFormButton>
              <Button text="로그인" onClick={handleLogin} accent={true} />
            </EFormButton>
            <div>
              <Link prefetch href={routes.join}>
                <a>회원가입</a>
              </Link>
            </div>
          </EFormButtons>
        </EForm>
        <hr />
        <SocialLoginContainer>
          <SocialLoginButton>
            <Button
              text="네이버 아이디로 로그인하기"
              onClick={handleNaverLogin}
              accent={false}
            />
          </SocialLoginButton>
          <SocialLoginButton>
            <Button
              text="카카오 아이디로 로그인하기"
              onClick={handleKakaoLogin}
              accent={false}
            />
          </SocialLoginButton>
        </SocialLoginContainer>
      </Card>
    </Container>
  </Wrapper>
);

export default ProductEditorPresenter;
