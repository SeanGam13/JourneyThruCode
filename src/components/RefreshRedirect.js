import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RefreshRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    console.log('Location:', location.pathname);
    console.log('Initial Load:', initialLoad);

    // Check if it's the initial load and not a navigation within the app
    if (initialLoad && location.pathname !== '/') {
      console.log('Redirecting to home');
      navigate('/');
      setInitialLoad(false); // Update to prevent future redirects on navigation
    }
  }, [initialLoad, location.pathname, navigate]);

  return null;
};

export default RefreshRedirect;

