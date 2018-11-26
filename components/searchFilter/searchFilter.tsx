import styled from '../../typed-components';

const Container = styled.div`
  background-color: ${props => props.theme.darkBlueColor};
  min-width: 80px;
  text-align: center;
  padding: 7px 20px;
  cursor: pointer;
  color: ${props => props.theme.greyColor};
  border-radius: ${props => props.theme.borderRadius};
`;

interface IProps {
  text: string;
}

const SearchFilter: React.SFC<IProps> = ({ text }) => (
  <Container>
    <span>{text}</span>
  </Container>
);

export default SearchFilter;
