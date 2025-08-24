import { useState, type ChangeEvent } from 'react';
import { useDebounce } from 'use-debounce';

import { Searchbar } from './Searchbar';
import { useShowsSearch } from '../hooks/useShowsSearch';

export const SearchbarContainer = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query] = useDebounce(searchValue, 500);

  const { data, isLoading } = useShowsSearch({ query });
  console.log({ data, isLoading });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return <Searchbar onChange={onChange} />;
};
