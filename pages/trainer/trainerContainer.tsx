import React from 'react';
import { Query } from 'react-apollo';
import { withRouter, WithRouterProps } from 'next/router';
import { getTrainer, getTrainerVariables } from 'types/api';
import TrainerPresenter from './trainerPresenter';
import { GET_TRAINER } from './trainerQueries';

class TrainerQuery extends Query<getTrainer, getTrainerVariables> {}

interface IProps {
  trainerId: number;
}

class TrainerContainer extends React.Component<IProps & WithRouterProps> {
  static getInitialProps({ query }) {
    const { trainerId } = query;
    return { trainerId };
  }
  render() {
    const { trainerId } = this.props;

    return (
      <TrainerQuery 
        query={GET_TRAINER}
        variables={{ trainerId }}
      >
        {({ data, loading }) => !loading ? <TrainerPresenter data={data} /> : null}
      </TrainerQuery>
    );
  }
}

export default withRouter(TrainerContainer);
