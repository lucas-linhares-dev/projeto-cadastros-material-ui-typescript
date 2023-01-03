import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';


export const Dashboard = () => {
  return(
    <LayoutBaseDePagina titulo='DashBoard' barraDeFerramentas={<FerramentasDaListagem mostrarInputBusca textoBotaoNovo='Nova'/>}>
			Página
    </LayoutBaseDePagina>
  );
};