import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../Components/LoadingSpinner';
import App from '../App';
// import Footer from '../Components/Footer';

export default function Main() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading && <LoadingSpinner />}
      <App />
    </>
  );
}
