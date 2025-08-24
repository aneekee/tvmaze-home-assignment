import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const Navigation = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="px-5 py-4 w-11/12 border-r-2 border-b-2 border-l-2 rounded-b-4xl border-black">
        <Link to="/">
          <Home size={28} />
        </Link>
      </div>
    </div>
  );
};
