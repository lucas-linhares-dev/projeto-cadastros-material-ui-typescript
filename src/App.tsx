import { AppThemeProvider } from './shared/contexts/index' ;
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { MenuLateral } from './shared/components/menu-lateral/MenuLateral';

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>


        <MenuLateral>
          <AppRoutes/>
        </MenuLateral>



      </BrowserRouter>
    </AppThemeProvider>
  );
};


