import { CityType } from './data';

const CITIES_LOADING = 'cities/loading' as const;
const CITIES_LOADED = 'cities/loaded' as const;
const CITIES_CURRENT_CITY_LOADED = 'cities/currentCity/loaded' as const;
const CITY_CREATED = 'city/created' as const;
const CITY_DELETED = 'city/deleted' as const;
const CITIES_REJECTED = 'cities/rejected' as const;

interface CitiesSetLoadingAction {
  type: typeof CITIES_LOADING;
}

interface CitiesLoadedAction {
  type: typeof CITIES_LOADED;
  payload: CityType[];
}

interface CurrentCityLoadedAction {
  type: typeof CITIES_CURRENT_CITY_LOADED;
  payload: CityType;
}

interface CitiesCreatedAction {
  type: typeof CITY_CREATED;
  payload: CityType;
}

interface CitiesDeletedAction {
  type: typeof CITY_DELETED;
  payload: string;
}

interface CitiesRejectedAction {
  type: typeof CITIES_REJECTED;
  payload: string;
}

export type ActionsType =
  | CitiesSetLoadingAction
  | CitiesLoadedAction
  | CurrentCityLoadedAction
  | CitiesCreatedAction
  | CitiesDeletedAction
  | CitiesRejectedAction;
