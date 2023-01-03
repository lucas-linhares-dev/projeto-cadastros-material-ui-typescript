import { Button, Icon, Paper, TextField, useTheme } from '@mui/material';
import { Box } from '@mui/system';

interface IBarraDeFerramentas {
	mostrarInputBusca?: boolean,
	textoDaBusca?: string,
	aoMudarBusca?: (novoTexto: string) => void;
	mostrarBotaoNovo?: boolean,
	textoBotaoNovo?: string,
	aoClicarBotaoNovo?: () => void;
}

export const BarraDeFerramentas: React.FC<IBarraDeFerramentas> = ({
  mostrarInputBusca = false,
  textoDaBusca = '',
  aoMudarBusca,
  mostrarBotaoNovo = true,
  textoBotaoNovo = 'Novo',
  aoClicarBotaoNovo
	
}) => {

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

      {mostrarInputBusca && <TextField
        size='small'
        placeholder='Pesquisar...'
        value={textoDaBusca}
        onChange={(e) => aoMudarBusca?.(e.target.value)}/>}

      <Box display='flex' flex={1} justifyContent= 'end'>

        { mostrarBotaoNovo && <Button
          variant='contained'
          color='primary'
          disableElevation
          endIcon={<Icon>add</Icon>}
          onClick={aoClicarBotaoNovo}
        >
          {textoBotaoNovo}
        </Button>}

      </Box>
      

    </Box>
  );
};