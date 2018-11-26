import React from "react";
import Link from "next/link";
import styled from "../../typed-components";
import Badge from "../badge";
import RoundImage from "../roundImage";
import SquareImage from "../squareImage";
import ImagePlaceholder from "../imagePlaceholder";

const Span = styled.span`
  display: flex;
  flex-direction: row;
`;

const Container = styled<{ isLink: boolean }, any>("div")`
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  ${props => props.theme.cardShadow};
  background-color: white;
  cursor: ${props => (props.isLink ? "pointer" : "default")};
  width: 100%;
  & ${Span} {
    display: flex;
    flex-direction: row;
  }
`;

const IconContainer = styled.div`
  margin-right: 30px;
`;

const Icon = styled(SquareImage)`
  height: 200px;
  width: 200px;
  display: block;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Pitch = styled.p``;

const Badges = styled.div`
  display: flex;
  align-items: flex-start;
  width: 90%;
  flex-wrap: wrap;
`;

const Footer = styled.footer`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Maker = styled(RoundImage)`
  margin-left: 10px;
  height: 30px;
  width: 30px;
  min-width: 30px;
  border: 0;
`;

const Small = styled.span`
  color: ${props => props.theme.greyColor};
  margin-bottom: 20px;
`;

interface IPresenterProps {
  icon: string;
  title: string;
  subtitle: string;
  showSubtitle: boolean;
  hasAuthor: boolean;
  authorAvatar?: string;
  streakNumber?: number;
  launchedNumber?: number;
  toDoNumber?: string;
  needsHelp?: boolean;
  authorUsername?: string;
  isFinished?: boolean;
  underTitle?: string;
  commentNumber?: number;
  voteNumber?: number;
}

const CardContent: React.SFC<IPresenterProps> = ({
  icon,
  title,
  subtitle,
  showSubtitle,
  hasAuthor,
  authorAvatar,
  needsHelp,
  streakNumber,
  toDoNumber,
  launchedNumber,
  isFinished,
  underTitle,
  commentNumber,
  voteNumber
}) => (
  <React.Fragment>
    <IconContainer>
      {icon ? (
        <Icon src={icon} alt={title} />
      ) : (
        <ImagePlaceholder letter={title[0]} size={80} />
      )}
    </IconContainer>
    <ContentContainer>
      <Title>{title}</Title>
      {underTitle && <Small>{underTitle}</Small>}
      <Span>
        {showSubtitle && <Pitch>{subtitle}</Pitch>}
        {hasAuthor && <Maker alt={title} src={authorAvatar!} />}
      </Span>
      <Footer>
        <Badges>
          <React.Fragment>
            <Badge bgColor={"#FEF48B"} text={"Best"} icon={"👍"} />
            <Badge text={"4.9/5.0"} icon={"⭐"} />
            <Badge text={83} icon={"💬"} />
            <Badge bgColor={"#DBE9F1"} text={"남양주시"} icon={"⛯"} />
            <Badge bgColor={"#DBE9F1"} text={"강동구"} icon={"⛯"} />
          </React.Fragment>
        </Badges>
      </Footer>
    </ContentContainer>
  </React.Fragment>
);

interface IContainerProps {
  isLink: boolean;
  link?: string;
  linkAs?: string;
}

const TrainerCardContainer: React.SFC<IContainerProps & IPresenterProps> = ({
  isLink,
  link,
  linkAs,
  ...rest
}) => {
  if (!isLink) {
    return (
      <Container isLink={isLink}>
        <Span>
          <CardContent {...rest} />
        </Span>
      </Container>
    );
  } else {
    return (
      <Container isLink={isLink}>
        <Link prefetch href={link} as={linkAs}>
          <a>
            <Span>
              <CardContent {...rest} />
            </Span>
          </a>
        </Link>
      </Container>
    );
  }
};

export default TrainerCardContainer;
