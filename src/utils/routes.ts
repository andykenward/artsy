import queryString from 'query-string';
import { isNil, pick, pickBy } from 'ramda';

const allowedFilters = ['color'];

interface Filter {
  color?: string;
}

export const validateFilterObject = (
  searchQuery: string | undefined
): Filter | null => {
  if (!searchQuery || searchQuery === '') return null;
  const filter = pick(allowedFilters, queryString.parse(searchQuery));
  return pickBy((v) => !isNil(v), filter);
};

export const getFilter = (
  searchQuery: string | undefined
): { color?: string } | null => {
  return validateFilterObject(searchQuery);
};
