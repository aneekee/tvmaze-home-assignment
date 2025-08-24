import type { ChangeEvent } from 'react';
import { Searchbar } from './Searchbar';

export const SearchbarContainer = () => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return <Searchbar onChange={onChange} />;
};
