import Link from "next/link";
import routes from "../../routes";
import styled, { keyframes } from "../../typed-components";
import Button from "../button";
import RoundImage from "../roundImage";
import { getMe } from "types/api";
import { Consumer } from "../../lib/context";

const Container = styled("header")`
  width: 100%;
  padding: 20px 5px;
  background-color: white;
  box-shadow: 0px 0px 30px 0px rgba(219, 233, 241, 0.8);
  @media (max-width: 785px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const Logo = styled.h1`
  font-family: "Nunito";
  font-weight: 700;
  font-size: 20px;
  margin-right: 25px;
  border-right: 1px solid ${props => props.theme.blackColor};
  padding-right: 25px;
  cursor: pointer;
  display: flex;
`;

const Navigation = styled.nav`
  & ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    & li {
      margin-right: 25px;
    }
  }
  @media (max-width: 785px) {
    width: 100%;
    & ul {
      width: 100%;
      justify-content: space-between;
      & li {
        margin: 0;
      }
    }
  }
`;

const NavColumn = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  &:last-child {
    justify-content: flex-end;
    & > *:first-child {
      margin-right: 30px;
    }
    @media (max-width: 785px) {
      align-self: center;
      justify-content: center;
      flex-wrap: nowrap;

      & > *:first-child {
        margin-right: 0px;
      }
    }
  }
  span {
    cursor: pointer;
  }
`;

const MobileHome = styled.div`
  display: none;
`;

const FlexWidthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  @media (max-width: 785px) {
    flex-direction: column;
    align-items: flex-start;
    & ${Logo} {
      display: none;
    }
    & ${NavColumn} {
      &:first-child {
        width: 100%;
        margin-bottom: 15px;
      }
    }
    & ${MobileHome} {
      display: block;
    }
  }
  @media (max-width: 1400px) {
    padding: 0px 25px;
  }
`;

const Avatar = styled(RoundImage)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

interface IProps {
  isLoggedIn: boolean;
  user: getMe;
  onLogOutClick: () => void;
}

const Header: React.SFC<IProps> = ({ isLoggedIn, user, onLogOutClick }) => (
  <Container>
    <FlexWidthContainer>
      <NavColumn>
        <Link prefetch href={routes.home}>
          <Logo>
            <img src="/static/logo_55x55.png" height={"30px"} />
            Animal Mind
          </Logo>
        </Link>
        <Navigation>
          <ul>
            <li>
              <Link prefetch href={routes.trainers}>
                <a>전문가 검색</a>
              </Link>
            </li>
            <li>
              <Link prefetch href={routes.community}>
                <a>커뮤니티</a>
              </Link>
            </li>
            <li>
              <Link prefetch href={routes.about}>
                <a>About</a>
              </Link>
            </li>
          </ul>
        </Navigation>
      </NavColumn>
      {!isLoggedIn && (
        <NavColumn>
          <Link prefetch href={routes.login}>
            <a>
              <Button accent={false} text={`로그인`} />
            </a>
          </Link>
          <Link prefetch href={routes.join}>
            <a>
              <Button accent={true} text={`회원가입`} />
            </a>
          </Link>
        </NavColumn>
      )}
      {isLoggedIn && (
        <Consumer>
          {({ userQuery }) => (
            <Navigation>
              <ul>
                <li>
                  <Link
                    prefetch
                    href={routes.userDetail(
                      (userQuery &&
                        userQuery.Me &&
                        userQuery.Me.user &&
                        userQuery.Me.user.email) ||
                        ""
                    )}
                    as={routes.asUserDetail(
                      (userQuery &&
                        userQuery.Me &&
                        userQuery.Me.user &&
                        userQuery.Me.user.email) ||
                        ""
                    )}
                  >
                    <a>
                      <AvatarContainer>
                        <Avatar
                          src={
                            (userQuery &&
                              userQuery.Me &&
                              userQuery.Me.user &&
                              userQuery.Me.user.profileImage) ||
                            "/static/demo.jpg"
                          }
                          alt={
                            (userQuery &&
                              userQuery.Me &&
                              userQuery.Me.user &&
                              userQuery.Me.user.name) ||
                            "Profile"
                          }
                        />
                      </AvatarContainer>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link prefetch href={routes.new}>
                    <a>Add Product</a>
                  </Link>
                </li>
                <li>
                  <span style={{ cursor: "pointer" }} onClick={onLogOutClick}>
                    Log Out
                  </span>
                </li>
              </ul>
            </Navigation>
          )}
        </Consumer>
      )}
    </FlexWidthContainer>
  </Container>
);

const animation = keyframes`
  from{
    transform:translateY(-80px);
  }
  to{
    transform:none;
  }
`;

const FixedHeaderContainer = styled.div`
  position: fixed !important;
  top: 0;
  width: 100%;
  animation: ${animation} 0.2s linear;
  box-shadow: 0px 0px 30px 0px rgba(219, 233, 241, 0.8);
  z-index: 10;
`;

export const FixedHeader: React.SFC<IProps> = props => (
  <FixedHeaderContainer>
    <Header {...props} />
  </FixedHeaderContainer>
);

export default Header;
