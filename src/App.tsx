import { AppThemeProvider, DrawerProvider } from './shared/contexts/index' ;
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { MenuLateral } from './shared/components/menu-lateral/MenuLateral';

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>


          <MenuLateral>
            <AppRoutes/>
          </MenuLateral>



        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};


