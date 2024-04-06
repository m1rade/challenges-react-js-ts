import React, { createContext, useContext, useEffect, useState } from 'react';
import { CityType } from '../types/data';
import { sleep } from '../utils/sleep';

const BASE_URL = 'http://localhost:5172';

const CitiesContext = createContext<CitiesContextType | null>(null);

function CitiesProvider({ children }: { children: React.ReactNode }) {
  const [cities, setCities] = useState<CityType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState<CityType | null>(null);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);

        const resp = await fetch(`${BASE_URL}/cities`);
        const data = await resp.json();
        await sleep(1000);

        setCities(data);
      } catch (error) {
        console.error('Some error');
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  async function getCityInfoById(id: string) {
    try {
      setIsLoading(true);

      const resp = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await resp.json();
      await sleep(1000);

      setCurrentCity(data);
    } catch (error) {
      console.error('Some error');
    } finally {
      setIsLoading(false);
    }
  }

  async function createCity(newCity: CreateCityType) {
    try {
      setIsLoading(true);

      const resp = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await resp.json();
      await sleep(1000);

      console.log(data);
      setCities(cities => [...cities, data]);
    } catch (error) {
      console.error('Some error');
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCity(id: string) {
    try {
      setIsLoading(true);

      await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      });

      await sleep(1000);

      setCities(cities => cities.filter(c => c.id !== id));
    } catch (error) {
      console.error('Some error');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCityInfoById, createCity, deleteCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCitiesContext() {
  const context = useContext(CitiesContext);
  if (!context) throw new Error('useCitiesContext hook has has to be used within <CitiesProvider>');
  return context;
}

export { CitiesProvider, useCitiesContext };

export type CreateCityType = Omit<CityType, 'id'>;
interface CitiesContextType {
  cities: CityType[];
  isLoading: boolean;
  currentCity: CityType | null;
  getCityInfoById: (id: string) => Promise<void>;
  createCity: (newCity: CreateCityType) => Promise<void>;
  deleteCity(id: string): Promise<void>;
}
