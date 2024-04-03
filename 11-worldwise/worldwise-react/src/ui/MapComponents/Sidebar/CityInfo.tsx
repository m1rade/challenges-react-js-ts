import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useCitiesContext } from '../../../contexts/CitiesContext';
import { formatDate } from '../../../utils/formatDate';
import { BackButton } from '../../common/Buttons';
import { Message } from '../../common/Message';
import { Spinner } from '../../common/Spinner';

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

export function CityInfo() {
  const { isLoading, getCityInfoById, currentCity } = useCitiesContext();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) getCityInfoById(id);
  }, [id]);

  if (isLoading) return <Spinner />;

  if (!isLoading && !currentCity) return <Message message="Oops, something went wrong 😨" />;

  const { emoji, date, cityName, notes } = currentCity!;

  return (
    <Container>
      <Row>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span>
          {cityName}
        </h3>
      </Row>

      <Row>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date)}</p>
      </Row>

      <Row>
        <h6>Your notes</h6>
        <p>{notes}</p>
      </Row>

      <Row>
        <h6>Learn more</h6>
        <a href={`https://en.wikipedia.org/wiki/${cityName}`} target="_blank" rel="noreferrer">
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </Row>
      <BackButton>&larr; Back</BackButton>
    </Container>
  );
}
