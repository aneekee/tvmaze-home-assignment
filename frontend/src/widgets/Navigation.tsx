import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SearchbarContainer } from '@/features/search/components/searchbar/SearchbarContainer';

export const Navigation = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="px-5 py-4 w-11/12 flex justify-between border-r-2 border-b-2 border-l-2 border-none rounded-b-4xl shadow-xl">
        <Link to="/">
          <Button variant="link">
            <Home />
            <span>Home</span>
          </Button>
        </Link>

        <div className="w-2/3">
          <SearchbarContainer />
        </div>
      </div>
    </div>
  );
};
