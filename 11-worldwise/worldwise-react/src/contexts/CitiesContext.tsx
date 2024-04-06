import React, { createContext, useEffect, useReducer } from 'react';
import { useCustomContext } from '../hooks/useCustomContext';
import { CityType } from '../types/data';
import { sleep } from '../utils/sleep';
import { citiesReducer } from './citiesReducer';

const BASE_URL = 'http://localhost:5172';

const CitiesContext = createContext<CitiesContextType | null>(null);

export const initState = {
  cities: [] as CityType[],
  isLoading: false,
  error: '',
  currentCity: null as CityType | null,
};

function CitiesProvider({ children }: { children: React.ReactNode }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(citiesReducer, initState);

  useEffect(() => {
    async function fetchCities() {
      dispatch({ type: 'cities/loading' });

      try {
        const resp = await fetch(`${BASE_URL}/cities`);
        const data = await resp.json();
        await sleep(1000);

        dispatch({ type: 'cities/loaded', payload: data });
      } catch (error) {
        console.error('Some error');
        dispatch({ type: 'cities/rejected', payload: 'Some error when fetching data' });
      }
    }

    fetchCities();
  }, []);

  async function getCityInfoById(id: string) {
    if (id === currentCity?.id) return;

    dispatch({ type: 'cities/loading' });

    try {
      const resp = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await resp.json();
      await sleep(1000);

      dispatch({ type: 'cities/currentCity/loaded', payload: data });
    } catch (error) {
      console.error('Some error');
      dispatch({ type: 'cities/rejected', payload: 'Some error when getting city information' });
    }
  }

  async function createCity(newCity: CreateCityType) {
    dispatch({ type: 'cities/loading' });

    try {
      const resp = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await resp.json();
      await sleep(1000);

      dispatch({ type: 'city/created', payload: data });
    } catch (error) {
      console.error('Some error');
      dispatch({ type: 'cities/rejected', payload: 'Some error when creating a city' });
    }
  }

  async function deleteCity(id: string) {
    try {
      dispatch({ type: 'cities/loading' });

      await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      });

      await sleep(1000);

      dispatch({ type: 'city/deleted', payload: id });
    } catch (error) {
      console.error('Some error');
      dispatch({ type: 'cities/rejected', payload: 'Some error when deleting a city' });
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, error, getCityInfoById, createCity, deleteCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

const useCitiesContext = () => useCustomContext(CitiesContext);

export { CitiesProvider, useCitiesContext };

export type CreateCityType = Omit<CityType, 'id'>;
interface CitiesContextType extends InitStateType {
  getCityInfoById: (id: string) => Promise<void>;
  createCity: (newCity: CreateCityType) => Promise<void>;
  deleteCity(id: string): Promise<void>;
}

export type InitStateType = typeof initState;
