

import { Avatar, Divider, Drawer, Icon, ListItemButton, ListItemIcon, ListItemText, useTheme , List, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { useDrawerContext } from '../../contexts';
import { useCallback } from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';



interface IListItemLink {
  label: string;
  icon: string;
  to: string;
  onClick: (() => void) | undefined;
}


const ListItemLink: React.FC<IListItemLink> = ({label, icon, to, onClick}) => {

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({path: resolvedPath.pathname, end: false});

  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(to);
    onClick?.();
  }, []);


  return(
    <ListItemButton onClick={handleClick} selected={!!match}>

      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>

      <ListItemText primary= {label}/>

    </ListItemButton>
  );
};








interface IMenuLateralProps {
  children: React.ReactNode
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {

  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));
  
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();


  return(
    <>
      <Drawer open= {isDrawerOpen} variant= {downSM ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} height = "100%" display= "flex" flexDirection= "column" >

          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src='./images/Foto eu.jpeg'
            />
          </Box>

          <Divider />
          
          <Box flex={1}> 
            <List component="nav">

              <ListItemLink 
                label= 'Página inicial'
                icon= 'home'
                to= '/pagina-inicial'
                onClick={downSM ? toggleDrawerOpen : undefined}
              />

            </List>
          </Box>

          
        </Box>
      </Drawer>

      <Box height='100vh' marginLeft={downSM ? 0 : theme.spacing(28)}> 
        {children}
      </Box>

    </>
  );
};