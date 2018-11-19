import Link from "next/link";
import styled from "../../typed-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  align-items: center;
`;

const Btn = styled.span`
  font-size: 25px;
  cursor: pointer;
  &:first-child {
    margin-right: 20px;
  }
  &:last-child {
    margin-left: 20px;
  }
`;

const Page = styled.span``;

const Divider = styled.span`
  margin: 0px 10px;
`;

interface IProps {
  currentPage: string;
  totalPages: string;
  previousLink: string;
  asPreviousLink: string;
  nextLink: string;
  asNextLink: string;
  hasNext: boolean;
  hasPrevious: boolean;
}

const Pagination: React.SFC<IProps> = ({
  previousLink,
  asPreviousLink,
  nextLink,
  asNextLink,
  currentPage,
  totalPages,
  hasNext,
  hasPrevious
}) => (
  <Container>
    {hasPrevious && (
      <Link prefetch href={previousLink} as={asPreviousLink}>
        <a>
          <Btn>{`<`}</Btn>
        </a>
      </Link>
    )}
    <Page>{currentPage}</Page>
    <Divider>/</Divider>
    <Page>{totalPages}</Page>
    {hasNext && (
      <Link prefetch href={nextLink} as={asNextLink}>
        <a>
          <Btn>{`>`}</Btn>
        </a>
      </Link>
    )}
  </Container>
);

export default Pagination;
