import { Route, Routes } from 'react-router-dom';
import routesconfig from '../routes/routesconfig';

export const AppRoutes = () => {
  return (
    <Routes>
      {routesconfig.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
};
