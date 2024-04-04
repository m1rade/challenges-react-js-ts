import { useState } from 'react';

export function useGeolocation(defaultPosition: PositionType = undefined) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState<PositionType>(defaultPosition);
  const [error, setError] = useState('');

  const getPosition = () => {
    if (!navigator.geolocation) return setError('Your browser does not support geolocation');

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      pos => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      error => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  };

  return { getPosition, position, isLoading, error };
}

type PositionType = { lat: number; lng: number } | undefined;
