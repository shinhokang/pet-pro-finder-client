import React from 'react';
import { toast } from 'react-toastify';
import LoginPresenter from './loginPresenter';
import { Mutation, MutationFn } from 'react-apollo';
import { LOG_USER_IN } from './loginQueries';
import { logUserIn, logUserInVariables } from 'types/api';
import logIn from '../../lib/logIn';

interface IProps {
  isLoggedIn: boolean;
}

interface IState {
  email: string;
  password: string;
}

class LoginMutation extends Mutation<logUserIn, logUserInVariables> {}

export default class LoginContainer extends React.Component<IProps, IState> {
  public logInFn: MutationFn<logUserIn, logUserInVariables>;
  public toastId: number;

  constructor(props: IProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;

    return (
      <LoginMutation mutation={LOG_USER_IN} onCompleted={this.onLoginCompleted}>
        {logInFn => {
          this.logInFn = logInFn;
          return (
            <LoginPresenter
              email={email}
              password={password}
              handleInputChange={this.handleInputChange}
              handleLogin={this.handleLogin}
            />
          );
        }}
      </LoginMutation>
    );
  }

  public handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = event;
    this.setState({
      [name]: value,
    } as any);
  };

  public handleLogin = () => {
    const { email, password } = this.state;
    this.toastId = toast.info('Loggin you in');

    this.logInFn({ variables: { email, password } });
  };

  public onLoginCompleted = (data: logUserIn) => {
    const {
      Login: { ok, error, token },
    } = data;
    if (!ok && error) {
      toast.update(this.toastId, {
        render: `${error}`,
        type: toast.TYPE.ERROR,
      });
    } else if (ok && token) {
      logIn(token);
      toast.update(this.toastId, {
        render: `Done! You're logged in!`,
        type: toast.TYPE.SUCCESS,
      });
    }
  };
}
