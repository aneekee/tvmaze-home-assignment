import { useShowsSearchQuery } from '../services/search.api';

interface Props {
  query: string;
}

export const useShowsSearch = ({ query }: Props) => {
  const { data, isLoading, isFetching, error } = useShowsSearchQuery({
    q: query,
  });

  return {
    data,
    isLoading,
    isFetching,
    error,
  };
};
