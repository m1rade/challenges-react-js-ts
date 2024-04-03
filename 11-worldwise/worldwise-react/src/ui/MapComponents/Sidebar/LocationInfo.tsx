import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { ICity } from '../../../types/data';
import { Button } from '../../common/Buttons';

const Container = styled.div`
  background-color: var(--color-dark--2);
  width: 100%;
  max-height: 73%;
  overflow-y: auto;
  overflow-x: hidden;
  overflow-wrap: break-word;
  padding: 2rem 3rem;
  border-radius: 0.7rem;
  margin-bottom: 1.4rem;
`;
const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 2rem;

  & h6 {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 900;
    color: var(--color-light--1);
  }

  & h3 {
    font-size: 2rem;
  }

  & h3 span {
    font-size: 2.2rem;
    line-height: 1;
    margin-right: 1.2rem;
  }

  & p {
    font-size: 1.6rem;
  }

  & a:link,
  & a:visited {
    color: var(--color-brand--1);
    font-size: 1.6rem;
  }
`;

export function LocationInfo({ city }: { city?: ICity }) {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <Container>
      <Row>
        <h6>City name {id}</h6>
        <h3>
          <span>😎</span>Berlin
          <span>{lat}</span>
          <span>{lng}</span>
        </h3>
      </Row>

      <Row>
        <h6>You went to Berlin on</h6>
        <p>25/04/2037</p>
      </Row>

      <Row>
        <h6>Your notes</h6>
        <p>My favourite city so far!</p>
      </Row>

      <Row>
        <h6>Learn more</h6>
        <a href={`https://en.wikipedia.org/wiki/Berlin`} target="_blank" rel="noreferrer">
          Check out Berlin on Wikipedia &rarr;
        </a>
      </Row>
      <Button $type="back" onClick={() => navigate(-1)}>
        &larr; Back
      </Button>
    </Container>
  );
}
