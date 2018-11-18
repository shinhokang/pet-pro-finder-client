import React from "react";
import Head from "next/head";
import styled from "../../typed-components";
import Wrapper from "../../components/wrapper";
import Card from "../../components/card";
import Input from "../../components/input";
import Title from "../../components/title";
import Form from "../../components/form";
import Button from "../../components/button";

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
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleJoin: () => void;
  handleFacebookLogin: () => void;
  handleGoogleLogin: () => void;
  handleKakaoLogin: () => void;
  handleNaverLogin: () => void;
}

const JoinPresenter: React.SFC<IProps> = ({
  name,
  email,
  password,
  phoneNumber,
  handleInputChange,
  handleJoin,
  handleFacebookLogin,
  handleGoogleLogin,
  handleKakaoLogin,
  handleNaverLogin
}) => (
  <Wrapper>
    <Head>
      <title>Dog Problem | 회원가입</title>
    </Head>
    <Container>
      <ETitle>회원가입</ETitle>
      <Card>
        <EForm onSubmit={handleJoin}>
          <FormInputs>
            <EInput
              required={true}
              type={"text"}
              name={"name"}
              placeholder={"이름 *"}
              value={name}
              onChange={handleInputChange}
            />
            <EInput
              required={true}
              type={"email"}
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
            <EInput
              required={false}
              type={"text"}
              name={"phoneNumber"}
              placeholder={"전화번호"}
              value={phoneNumber}
              onChange={handleInputChange}
            />
          </FormInputs>
          <EFormButtons>
            <EFormButton>
              <Button text="로그인" onClick={handleJoin} accent={true} />
            </EFormButton>
          </EFormButtons>
        </EForm>
        <hr />
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
    </Container>
  </Wrapper>
);

export default JoinPresenter;
