import { useCallback, useState, useContext, createContext } from 'react';

interface IDrawerContext {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
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

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldIsDrawerOpen => !oldIsDrawerOpen);
  }, []);

  return(
    <DrawerContext.Provider value = {{isDrawerOpen, toggleDrawerOpen}}>
      {children}
    </DrawerContext.Provider>
  );
};