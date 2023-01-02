import { Box } from '@mui/system';


interface ILayoutBaseDePagina {
  children: React.ReactNode;
	titulo: string;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePagina> = ({children, titulo}) => {
  return(	
    <Box height='100%' display='flex' flexDirection='column' gap={1}>
      <Box>
        {titulo}
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