import React from "react";
import Head from "next/head";
import styled from "../typed-components";
import Wrapper from "../components/wrapper";
import Button from "../components/button";
import routes from "../routes";
import Link from "next/link";

const Container = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const Subtitle = styled.p`
  font-size: 16px;
`;

const SellPoints = styled.div`
  margin-bottom: 150px;
`;

const SellPointColumn = styled.div``;

const SellPoint = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  grid-gap: 30px;
  margin-bottom: 80px;
  &:nth-child(even) {
    & ${SellPointColumn} {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      text-align: right;
    }
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    justify-items: flex-start;

    &:nth-child(even) {
      & ${SellPointColumn} {
        order: 1;
        display: block;
        text-align: left;
      }
    }
  }
`;

const SellPointImage = styled<
  { bg: string; bgH?: string; bgV?: string },
  "div"
>("div")`
  border-radius: 50%;
  height: 400px;
  width: 400px;
  height: 400px;
  background-image: url(${props => props.bg});
  border: 5px solid ${props => props.theme.darkBlueColor};
  background-size: cover;
  background-position: ${props =>
    props.bgH && props.bgV ? `${props.bgH} ${props.bgV}` : "center center"};
  @media (max-width: 800px) {
    width: 300px;
    height: 300px;
  }
`;

const SellPointTitle = styled.h4`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const SellPointText = styled.p`
  width: 60%;
`;

const JoinHero = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

const About = ({ fbLogin }) => (
  <React.Fragment>
    <Head>
      <title>About | Dog Problem</title>
      <meta name="description" content={"Dog Problem"} />
    </Head>
    <Wrapper>
      <Container>
        <Title>당신의 강아지를 행복하게</Title>
        <Subtitle>
          기업에게 프로젝트 관리는 매일매일 진행되는 작업이며, 중요한 부분 중
          하나입니다. 이 프로젝트의 성공 기준은 크게 3가지로 나눌 수가 있습니다.
        </Subtitle>
      </Container>
      <SellPoints>
        <SellPoint>
          <SellPointImage bg={"/static/aboutOne.png"} />
          <SellPointColumn>
            <SellPointTitle>
              서당개 한 달이면, 이웃간 소음갈등 걱정 없어요 - 한국일보
            </SellPointTitle>
            <SellPointText>
              2017. 4. 17. - 서당개 한 달이면, 이웃간 소음갈등 걱정 없어요 ...
              올해부터 강동구가 시작한 반려견 문제행동 교정을 위한 '반려동물
              강동서당'이 열린 자리다. ... 이날 같이한 유기견없는도시
              교육부장이자 애견 훈련사인 정윤식씨는 “짖을 때는 무시 ...
            </SellPointText>
          </SellPointColumn>
        </SellPoint>
        <SellPoint>
          <SellPointColumn>
            <SellPointTitle>반려견 훈련사 강형욱의 교육</SellPointTitle>
            <SellPointText>
              인터뷰 반려견 훈련사 강형욱 “당신은 누군가를 10시간 동안 기다려본
              적이 있나요?” 매일같이, 한결같이. 아마 오늘도 수많은 개와 고양이
            </SellPointText>
          </SellPointColumn>
          <SellPointImage
            bg={"/static/aboutTwo.png"}
            bgH={"bottom"}
            bgV={"bottom"}
          />
        </SellPoint>
        <SellPoint>
          <SellPointImage bg={"/static/aboutThree.png"} />
          <SellPointColumn>
            <SellPointTitle>강형욱 훈련사</SellPointTitle>
            <SellPointText>
              “강아지 훈련사라고 속이고 가서 사람을 교육하는 거죠". 반려견
              보호자가 아닌 이들도 이제 그의 이름과 직업은 알게 됐다. 반려견
              훈련사 강형욱을 만나야 할 이유가 더 늘기 전에 계획을 실행에
              옮겼다.
            </SellPointText>
          </SellPointColumn>
        </SellPoint>
      </SellPoints>
      <JoinHero>
        <Link prefetch href={routes.join}>
          <a>
            <Button
              accent={true}
              text={"회원가입"}
              fontSize={32}
              onClick={fbLogin}
            />
          </a>
        </Link>
      </JoinHero>
    </Wrapper>
  </React.Fragment>
);

export default About;
