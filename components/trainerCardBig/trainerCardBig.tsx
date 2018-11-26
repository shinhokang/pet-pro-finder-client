import React from 'react';
import Link from 'next/link';
import styled from '../../typed-components';
import Badge from '../badge';
import RoundImage from '../roundImage';
import SquareImage from '../squareImage';
import ImagePlaceholder from '../imagePlaceholder';
import { Carousel } from 'antd';
import routes from '../../routes';

const A = styled.a`
  flex-grow: 1;
  color: black;
`;

const Span = styled.span`
  display: flex;
  flex-direction: row;
`;

const Content = styled.div``;

const Container = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  ${props => props.theme.cardShadow};
  background-color: white;
  cursor: 'pointer';
  width: 100%;
  & ${Span} {
    display: flex;
    flex-direction: row;
  }
`;

const IconContainer = styled.div`
  margin-right: 30px;
  min-width: 200px;
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

const Pitch = styled.p`
  color: ${props => props.theme.blackColor};
`;

const Badges = styled.div`
  display: flex;
  align-items: flex-start;
  width: 90%;
  flex-wrap: wrap;
  color: ${props => props.theme.blackColor};
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
  link: string;
  linkAs: string;
  images: string[];
  avatar: string;
  title: string;
  name: string;
  description: string;
  workingAreas: string[];
  reviewNumber: number;
  ratingForExpertiseAverage: number;
  ratingForFriendlinessAverage: number;
  favorite: boolean;
  bestTrainer?: boolean;
}

const CardContent: React.SFC<IPresenterProps> = ({
  link,
  linkAs,
  images,
  avatar,
  title,
  name,
  description,
  workingAreas,
  reviewNumber,
  ratingForExpertiseAverage,
  ratingForFriendlinessAverage,
  favorite,
  bestTrainer,
}) => (
  <React.Fragment>
    <IconContainer>
      {images && images.length && <Icon src={images[0]} alt="test" />}
      {/* <Carousel>
        {images && images.length
          ? images.map((image, index) => {
              return (
                <div key={index}>
                  <Icon src={image} alt="test" />
                </div>
              );
            })
          : null}
      </Carousel> */}
    </IconContainer>
    <Link prefetch href={link} as={linkAs}>
      <A>
        <ContentContainer>
          <Content>
            <Title>{title}</Title>
            <Span>
              {name && <Small>{name} 훈련사</Small>}
              {avatar && <Maker alt={name} src={avatar} />}
            </Span>
            <Pitch>{description}</Pitch>
          </Content>
          <hr />
          <Footer>
            <Badges>
              <React.Fragment>
                {bestTrainer && (
                  <Badge bgColor={'#FEF48B'} text={'BEST'} icon={'⭐'} />
                )}
                <Badge
                  text={`${ratingForExpertiseAverage}/5.0`}
                  icon={'전문성'}
                />
                <Badge
                  text={`${ratingForFriendlinessAverage}/5.0`}
                  icon={'친절도'}
                />
                <Badge text={reviewNumber} icon={'고객후기'} />
                {workingAreas &&
                  workingAreas.length &&
                  workingAreas.map((workingArea, index) => (
                    <Badge
                      key={index}
                      bgColor={'#DBE9F1'}
                      text={workingArea}
                      icon={'⛯'}
                    />
                  ))}
              </React.Fragment>
            </Badges>
          </Footer>
        </ContentContainer>
      </A>
    </Link>
  </React.Fragment>
);

interface IContainerProps {
  trainerId: number;
}

const TrainerCardContainer: React.SFC<IContainerProps & IPresenterProps> = ({
  trainerId,
  ...props
}) => (
  <Container>
    <Span>
      <CardContent {...props} />
    </Span>
  </Container>
);

export default TrainerCardContainer;
