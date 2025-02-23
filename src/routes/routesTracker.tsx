import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLocation } from '../features/location/locationSlice';

const RouteTracker = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLocation(location.pathname));
  }, [location, dispatch]);

  return null;
};

export default RouteTracker;
