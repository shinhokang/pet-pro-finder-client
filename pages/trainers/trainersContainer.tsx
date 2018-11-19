import React from "react";
import { Query } from "react-apollo";
import TrainersPresenter from "./trainersPresenter";
import { getAllTrainers } from "types/api";
import { GET_ALL_TRAINERS } from "./trainersQueries";

class TrainersQuery extends Query<getAllTrainers> {}

interface IProps {}

export default class extends React.Component<IProps> {
  render() {
    return (
      <TrainersQuery query={GET_ALL_TRAINERS}>
        {({ data, loading }) =>
          !loading ? <TrainersPresenter data={data} /> : null
        }
      </TrainersQuery>
    );
  }
}
