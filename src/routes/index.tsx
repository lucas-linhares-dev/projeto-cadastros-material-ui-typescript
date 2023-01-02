
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { Dashboard } from '../pages';




export const AppRoutes = () => { 

  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        label: 'Página inicial',
        path: '/pagina-inicial'
      }
    ]);
  }, []);

  return(
    <Routes>
      <Route path = '/pagina-inicial' element = { <Dashboard /> } />
      <Route path = '*' element = {<Navigate to = '/pagina-inicial' />} />
    </Routes>
  );
};