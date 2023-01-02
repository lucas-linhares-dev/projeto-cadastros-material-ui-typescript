import { useCallback, useState, useContext, createContext } from 'react';

interface IDrawerContext {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
    drawerOptions: IDrawerOption[];
    setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
}

interface IDrawerOption {
  label: string;
  path: string;
  icon: string;
}

const DrawerContext = createContext({} as IDrawerContext);


export const useDrawerContext = () => {
  return useContext(DrawerContext);
};


interface IDrawerProvider {
    children: React.ReactNode
}

export const DrawerProvider: React.FC<IDrawerProvider> = ({children}) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldIsDrawerOpen => !oldIsDrawerOpen);
  }, []);

  const handleDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
    setDrawerOptions(newDrawerOptions);
  }, []);

  return(
    <DrawerContext.Provider value = {{isDrawerOpen, drawerOptions ,toggleDrawerOpen, setDrawerOptions: handleDrawerOptions}}>
      {children}
    </DrawerContext.Provider>
  );
};