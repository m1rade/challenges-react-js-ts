import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTES } from '../../../App';
import { CreateCityType, useCitiesContext } from '../../../contexts/CitiesContext';
import { useUrlPosition } from '../../../hooks/useUrlPosition';
import { convertToEmoji } from '../../../utils/convertToEmoji';
import { BackButton, Button } from '../../common/Buttons';
import { Field, Form, Label, StyledDatePicker } from '../../common/FormComponents';
import { Message } from '../../common/Message';
import { Spinner } from '../../common/Spinner';

const BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CountryEmoji = styled.span`
  position: absolute;
  right: 10%;
  top: 10.5%;
  font-size: 2.2rem;
  transform: translate(-12%, 12%);
`;

export function SidebarForm() {
  const [lat, lng] = useUrlPosition();
  const navigate = useNavigate();

  const [city, setCity] = useState('');
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');
  const [country, setCountry] = useState('');
  const [countryEmoji, setCountryEmoji] = useState('');

  const [isFetching, setIsFetching] = useState(false);
  const [geoError, setGeoError] = useState('');

  const { createCity, isLoading } = useCitiesContext();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!city && !date) return;

    const newCity: CreateCityType = {
      cityName: city,
      country,
      emoji: countryEmoji,
      date: date.toString(),
      notes,
      position: { lat, lng },
    };

    await createCity(newCity);
    navigate('/' + ROUTES.map);
  }

  useEffect(() => {
    if (!lat && !lng) return;

    async function fetchLocationData() {
      try {
        setIsFetching(true);
        setGeoError('');

        const resp = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = (await resp.json()) as {
          city: string;
          locality: string;
          countryName: string;
          countryCode: string;
          status?: number;
        };

        if (data.status) throw new Error('Server error');

        if (!data.countryCode) throw new Error("That doesn't seem to be a city. Click somewhere else");

        setCity(data.city || data.locality || '');
        setCountry(data.countryName || '');
        setCountryEmoji(convertToEmoji(data.countryCode));
      } catch (error) {
        if (error instanceof Error) setGeoError(error.message);
      } finally {
        setIsFetching(false);
      }
    }

    fetchLocationData();
  }, [lat, lng]);

  if (isFetching) return <Spinner />;

  if (!lat && !lng) return <Message message="Start by clicking somewhere on the map" />;

  if (geoError) return <Message message={geoError} />;

  return (
    <Form onSubmit={handleSubmit} $isLoading={isLoading}>
      <Field
        inputName="city"
        labelName="City name"
        value={city}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.currentTarget.value)}
        disabled={isLoading}
      />
      <CountryEmoji>{countryEmoji}</CountryEmoji>
      <div>
        <Label htmlFor="date">When did you go?</Label>
        <StyledDatePicker id="date" selected={date} dateFormat="dd/MM/yyyy" onChange={(date: Date) => setDate(date)} />
      </div>
      <Field
        inputName="notes"
        labelName="Notes about your trip"
        fieldType="textarea"
        value={notes}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNotes(e.currentTarget.value)}
        disabled={isLoading}
      />
      <BtnContainer>
        <BackButton to={'/' + ROUTES.map} disabled={isLoading}>
          &larr; Back
        </BackButton>
        <Button $type="primary" disabled={isLoading}>
          Submit
        </Button>
      </BtnContainer>
    </Form>
  );
}
