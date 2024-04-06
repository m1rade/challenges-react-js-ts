export function toUniqueCountries<T extends ICountry>(arr: T[], key: keyof T): ICountry[] {
  const keysArr = arr.map(el => el[key]);

  return arr.reduce<ICountry[]>(
    (acc, curr, i) =>
      !keysArr.includes(curr[key], i + 1) ? [...acc, { id: curr.id, emoji: curr.emoji, country: curr.country }] : acc,
    []
  );
}

export interface ICountry {
  id: string;
  emoji: string;
  country: string;
}
