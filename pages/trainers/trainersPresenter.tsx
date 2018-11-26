import React from 'react';
import Head from 'next/head';
import styled from '../../typed-components';
import Wrapper from '../../components/wrapper';
import Tabs from '../../components/tabs';
import SearchFilter from '../../components/searchFilter';
import TrainerCardBig from '../../components/trainerCardBig';
import routes from '../../routes';
import { getAllTrainers } from 'types/api';

const TrainerGrid = styled.div`
  display: grid;
  grid-gap: 40px;
  margin-bottom: 60px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

interface IProps {
  data?: getAllTrainers;
}

const TrainersPresenter: React.SFC<IProps> = ({
  data: { GetAllTrainers: { trainers = [] } = {} } = {},
}) => (
  <Wrapper>
    <Head>
      <title>Animal Mind | 전문가 검색</title>
      <meta
        name="description"
        content={`Find all trainers being registered in Animal Mind`}
      />
    </Head>
    <Tabs>
      <SearchFilter text={'지역'} />
      <SearchFilter text={'문제행동'} />
      <SearchFilter text={'날짜'} />
      <SearchFilter text={'가격'} />
    </Tabs>
    <TrainerGrid>
      {trainers &&
        trainers.map(
          trainer =>
            trainer && (
              <TrainerCardBig
                key={trainer.id}
                trainerId={trainer.id}
                link={routes.trainerDetail(trainer.id)}
                linkAs={routes.asTrainerDetail(trainer.id)}
                images={trainer.images || []}
                avatar={trainer.user.profilePhoto || ''}
                title={trainer.title}
                name={trainer.user.name || ''}
                description={
                  (trainer.description &&
                    `${trainer.description.substring(0, 60)}...`) ||
                  ''
                }
                workingAreas={
                  trainer.workingAreas
                    ? trainer.workingAreas.map(workingArea => workingArea.text)
                    : []
                }
                reviewNumber={trainer.reviews ? trainer.reviews.length : 0}
                ratingForExpertiseAverage={3.5}
                ratingForFriendlinessAverage={4.4}
                favorite={true}
                bestTrainer={true}
              />
            )
        )}
      {trainers && trainers.length === 0 && (
        <h1 className={'thickText'}>등록된 훈련사가 없습니다.</h1>
      )}
    </TrainerGrid>
  </Wrapper>
);

export default TrainersPresenter;
