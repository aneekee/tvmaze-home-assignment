import { useState, type ChangeEvent } from 'react';
import { useDebounce } from 'use-debounce';

import { Searchbar } from './Searchbar';
import { useShowsSearch } from '../../hooks/useShowsSearch';

export const SearchbarContainer = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query] = useDebounce(searchValue, 500);

  useShowsSearch({ query });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return <Searchbar onChange={onChange} />;
};
