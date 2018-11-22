import LazyLoad from "react-lazyload";
import styled from "../../typed-components";

const SquareImage = styled<any, any>("div")`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  border: 1px solid ${props => props.theme.darkBlueColor};
  max-width: 100%;
`;

interface IProps {
  src?: string;
  alt: string;
  className?: string;
}

const SquareImageC: React.SFC<IProps> = ({ src, className, alt }) => (
  <LazyLoad once height={"80px"}>
    <SquareImage src={src} alt={alt} className={className} />
  </LazyLoad>
);

export default SquareImageC;
