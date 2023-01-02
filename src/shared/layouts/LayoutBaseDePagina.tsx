import { Box } from '@mui/system';
import { Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useDrawerContext } from '../contexts';


interface ILayoutBaseDePagina {
  children: React.ReactNode;
	titulo: string;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePagina> = ({children, titulo}) => {

  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  const { toggleDrawerOpen } = useDrawerContext();

  return(	
    <Box height='100%' display='flex' flexDirection='column' gap={1}>

      <Box display='flex' padding={1} alignItems='center' height={theme.spacing(12)} gap={1} >

        {downSM && 
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        }
        
        <Typography variant='h5'>
          {titulo}
        </Typography>
      </Box>

      <Box>
				Barra de ferramentas
      </Box>

      <Box>
        {children}
      </Box>

    </Box>
  );
};