import { ActionsType } from '../types/actions';
import { InitStateType } from './CitiesContext';

export function citiesReducer(state: InitStateType, action: ActionsType): InitStateType {
  switch (action.type) {
    case 'cities/loading':
      return { ...state, isLoading: true, error: '' };
    case 'cities/loaded':
      return { ...state, isLoading: false, cities: action.payload };
    case 'cities/currentCity/loaded':
      return { ...state, isLoading: false, currentCity: action.payload };
    case 'city/created':
      return { ...state, isLoading: false, cities: [...state.cities, action.payload], currentCity: action.payload };
    case 'city/deleted':
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter(c => c.id !== action.payload),
        currentCity: null,
      };
    case 'cities/rejected':
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
