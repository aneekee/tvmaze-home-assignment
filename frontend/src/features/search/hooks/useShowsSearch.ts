import { useShowsSearchQuery } from '../services/search.api';

interface Props {
  query: string;
}

export const useShowsSearch = ({ query }: Props) => {
  const { data, isLoading, isFetching, error } = useShowsSearchQuery(
    {
      q: query,
    },
    { skip: query.length < 2 },
  );

  return {
    data,
    isLoading,
    isFetching,
    error,
  };
};
