import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';



export const AppRoutes = () => { 

  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

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
      <Route path = '/pagina-inicial' element = {<p style={{margin: 0, padding: 0}}><Button variant='contained' color= 'primary' onClick={toggleDrawerOpen}>Abrir menu</Button></p>} />
      <Route path = '*' element = {<Navigate to = '/pagina-inicial' />} />
    </Routes>
  );
};