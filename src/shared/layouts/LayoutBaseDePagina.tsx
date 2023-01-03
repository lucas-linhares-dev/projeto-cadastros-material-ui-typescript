import { Box } from '@mui/system';
import { Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useDrawerContext } from '../contexts';


interface ILayoutBaseDePagina {
  children: React.ReactNode;
	titulo: string;
  barraDeFerramentas: React.ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePagina> = ({children, titulo, barraDeFerramentas}) => {

  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));
  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  const { toggleDrawerOpen } = useDrawerContext();

  return(	
    <Box height='100%' display='flex' flexDirection='column' gap={1}>

      <Box display='flex' padding={1} alignItems='center' height={theme.spacing(downSM ? 6 : downMD ? 8 : 12)} gap={1} >

        {downSM && 
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        }
        
        <Typography variant={downSM ? 'h5' : downMD ? 'h4' : 'h3' } whiteSpace='nowrap' overflow='hidden' textOverflow='ellipses' >
          {titulo}
        </Typography>
      </Box>

      { barraDeFerramentas &&
       (<Box>
         {barraDeFerramentas}
       </Box>)}

      <Box flex={1} overflow='auto'>
        {children}
      </Box>

    </Box>
  );
};