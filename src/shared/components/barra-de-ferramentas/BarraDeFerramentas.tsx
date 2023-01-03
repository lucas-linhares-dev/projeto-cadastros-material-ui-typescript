import { Button, Icon, Paper, TextField, useTheme } from '@mui/material';
import { Box } from '@mui/system';



export const BarraDeFerramentas: React.FC = () => {

  const theme = useTheme();
	
  return(
    <Box
      component={Paper}
      display= 'flex'
      gap={1}
      height={theme.spacing(6)}
      marginX={1}
      padding={1}
      paddingX={2}
      alignItems= 'center' 
    >

      <TextField size='small' placeholder='Pesquisar...'/>

      <Box display='flex' flex={1} justifyContent= 'end'>
        <Button
          variant='contained'
          color='primary'
          disableElevation
          endIcon={<Icon>add</Icon>}
        >
					Novo
        </Button>
      </Box>
      

    </Box>
  );
};