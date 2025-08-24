import { useGetShowByIdQuery } from '@/features/search/services/search.api';

interface Props {
  id: string;
}

export const useShow = ({ id }: Props) => {
  const { data, isLoading, isFetching, isError } = useGetShowByIdQuery(
    id || '',
    {
      skip: !id,
    },
  );

  return {
    show: data,
    isLoading,
    isFetching,
    isError,
  };
};
