import React from 'react';
import Head from 'next/head';
import { getTrainer } from 'types/api';
import Wrapper from '../../components/wrapper';
import styled from '../../typed-components';
import TrainerCardMiddle from '../../components/trainerCardMiddle';
import Card from '../../components/card';
import Button from '../../components/button';

const Container = styled.div`
  margin: 50px 0px;
  display: grid;
  grid-template-columns: 320px 3fr;
  grid-gap: 50px;
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const ToDos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  & > a {
    width: 100%;
    display: block;
  }
`;

const Divider = styled.div`
  margin: 25px 0;
`;

const ToDosColumn = styled.div`
  height: 100%;
`;

const Title = styled.h4`
  font-size: 18px;
  font-weight: 700;
`;

const Header = styled.div`
  text-align: center;
  padding-bottom: 10px;
  box-shadow: 0px 10px 10px -5px rgba(219, 233, 241, 0.8);
`;

const GoalsContainer = styled.div`
  padding: 20px 10px;
  height: 60vh;
  max-height: 60vh;
  overflow: scroll;
  & > span {
    margin-bottom: 20px;
  }
`;

const GoalsFooter = styled.div`
  box-shadow: 0px -10px 10px -5px rgba(219, 233, 241, 0.8);
  height: 20px;
  width: 100%;
`;

const LinkBtn = styled(Button)`
  width: 100%;
  display: block;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RedText = styled.span`
  color: ${props => props.theme.redColor};
`;

const VoteContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 25px;
`;

interface IProps {
  data?: getTrainer;
}

const TrainerPresenter: React.SFC<IProps> = ({
  data: { GetTrainer: { trainer = null } = {} } = {},
}) => (
  <Wrapper>
    <Head>
      <title>
        {' '}
        {trainer && trainer.user ? `${trainer.user.name} 훈련사` : '전문가'} |
        애니멀마인드{' '}
      </title>
      <meta name="description" content={trainer ? `${trainer.title}` : ''} />
    </Head>
    <Container>
      {trainer ? (
        <>
          <LeftContainer>
            <TrainerCardMiddle
              isLink={false}
              icon={trainer.user.profileImage || ''}
              title={trainer.user.name ? trainer.user.name : ''}
              showSubtitle={true}
              toDoNumber={'30'}
              subtitle={trainer.title}
              hasAuthor={false}
              needsHelp={false}
              commentNumber={10}
              voteNumber={15}
              isFinished={false}
            />
          </LeftContainer>
          <span>
            <Card>
              <div>test test</div>
            </Card>
            <div>리뷰</div>
            <div>문의</div>
          </span>
        </>
      ) : (
        <h1 className={'thickText'}>This product does not exist.</h1>
      )}
    </Container>
  </Wrapper>
);

export default TrainerPresenter;
