import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ShowDetailsPage } from '@/pages/ShowDetails.page';
import { HomePage } from '@/pages/Home.page';
import { NotFoundPage } from '@/pages/NotFound.page';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/show-details/:id" element={<ShowDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
