import React from "react";
import Head from "next/head";
import styled from "../../typed-components";
import Wrapper from "../../components/wrapper";
import Tabs from "../../components/tabs";
import Tab from "../../components/tab";
import BigDetailCard from "../../components/bigDetailCard";
import routes from "../../routes";
import { getAllTrainers } from "types/api";

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
  data: { GetAllTrainers: { trainers = [] } = {} } = {}
}) => (
  <Wrapper>
    <Head>
      <title>Animal Mind | 훈련사</title>
      <meta
        name="description"
        content={`Find all trainers being registered in Animal Mind`}
      />
    </Head>
    <Tabs>
      <Tab link={routes.trainers} text={"지역"} selected={true} />
      <Tab link={routes.trainers} text={"문제행동"} selected={false} />
      <Tab link={routes.trainers} text={"날짜"} selected={false} />
      <Tab link={routes.trainers} text={"가격"} selected={false} />
    </Tabs>
    <TrainerGrid>
      {trainers &&
        trainers.map(
          trainer =>
            trainer && (
              <BigDetailCard
                key={trainer.id}
                isLink={false}
                link={routes.trainerDetail(trainer.id)}
                linkAs={routes.asTrainerDetail(`${trainer.user.name}`)}
                icon={
                  (trainer.images &&
                    trainer.images.length > 0 &&
                    trainer.images[0]) ||
                  ""
                }
                authorAvatar={trainer.user.profileImage || ""}
                title={trainer.description}
                showSubtitle={true}
                subtitle={`${trainer.user.name} 훈련사`}
                underTitle={"테스트"}
                hasAuthor={true}
                needsHelp={false}
                commentNumber={0}
                voteNumber={0}
                isFinished={false}
              />
            )
        )}
      {trainers && trainers.length === 0 && (
        <h1 className={"thickText"}>등록된 훈련사가 없습니다.</h1>
      )}
    </TrainerGrid>
  </Wrapper>
);

export default TrainersPresenter;
