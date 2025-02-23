import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoutes } from './AppRoutes';
import { selectLocation } from '../features/location/locationSlice';
import RouteTracker from '../routes/routesTracker';
import '../assets/css/global.css'

const App = () => {
  const lastPage = useSelector(selectLocation);

  return (
    <React.Suspense>
      <Router>
        <RouteTracker />
        <Routes>
          <Route path="/" element={<Navigate to={lastPage} />} />
          <Route path="*" element={<AppRoutes />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default App;
