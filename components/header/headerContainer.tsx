import React from "react";
import Header, { FixedHeader } from "./headerPresenter";
import { getMe } from "types/api";
import { toast } from "react-toastify";
import logOut from "../../lib/logOut";

interface IState {
  scrolled: boolean;
}

interface IProps {
  isLoggedIn: boolean;
  user: getMe;
}

class HeaderContainer extends React.Component<IProps, IState> {
  state = {
    scrolled: false
  };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        this.setState({
          scrolled: true
        });
      } else if (window.scrollY < 400) {
        this.setState({
          scrolled: false
        });
      }
    });
  }
  render() {
    const { scrolled } = this.state;
    const { isLoggedIn, user } = this.props;

    return (
      <React.Fragment>
        <Header
          isLoggedIn={isLoggedIn}
          user={user}
          onLogOutClick={this.onLogOutClick}
        />
        {scrolled && (
          <FixedHeader
            isLoggedIn={isLoggedIn}
            user={user}
            onLogOutClick={this.onLogOutClick}
          />
        )}
      </React.Fragment>
    );
  }

  public onLogOutClick = () => {
    toast.info("See you later!");
    setTimeout(() => {
      logOut();
    }, 1000);
  };
}

export default HeaderContainer;
