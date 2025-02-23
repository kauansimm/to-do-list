import { useNavigate } from 'react-router-dom';
import routesconfig from '../routes/routesconfig';

const useHandleNavigation = () => {
  const navigate = useNavigate();

  const locations = routesconfig.map((route) => {
    return route.path;
  });

  const handleNavigationClick = (pageToNavigate: string) => {
    const path = locations.filter((path) => pageToNavigate.toLocaleLowerCase() === path).toString();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  return { handleNavigationClick };
};

export default useHandleNavigation;