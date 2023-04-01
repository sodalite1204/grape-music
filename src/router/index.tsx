import { BrowserRouter, Route, Routes } from 'react-router-dom';

import UnderConstruction from '@/components/ErrorPage/UnderConstruction';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UnderConstruction />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
