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
  grid-template-columns: repeat(auto-fill, 320px);
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
      <title>Dog Problem | 훈련사</title>
      <meta
        name="description"
        content={`Find all trainers being registered in Dog Problem`}
      />
    </Head>
    <Tabs>
      <Tab link={routes.trainers} text={"지역"} selected={true} />
      <Tab link={routes.trainers} text={"문제행동"} selected={false} />
      <Tab link={routes.trainers} text={"날짜"} selected={false} />
      <Tab link={routes.trainers} text={"가격"} selected={false} />
    </Tabs>
    <TrainerGrid>
      {/* {trainers &&
        trainers.map(
          trainer =>
            trainer && (
              <BigDetailCard
                key={trainer.id}
                isLink={true}
                link={routes.trainerDetail(`${trainer.id}`)}
                linkAs={routes.asTrainerDetail(`${trainer.id}`)}
                icon={trainer.logo || ""}
                authorAvatar={""}
                title={trainer.name}
                showSubtitle={true}
                subtitle={trainer.description}
                toDoNumber={`${product.completedGoalCount}/${
                  product.goalCount
                }`}
                hasAuthor={true}
                needsHelp={product.needsHelp}
                commentNumber={product.commentCount}
                voteNumber={product.voteCount}
                isFinished={product.isLaunched}
              />
            )
        )} */}
      {trainers && trainers.length === 0 && (
        <h1 className={"thickText"}>등록된 훈련사가 없습니다.</h1>
      )}
    </TrainerGrid>
  </Wrapper>
);

export default TrainersPresenter;
