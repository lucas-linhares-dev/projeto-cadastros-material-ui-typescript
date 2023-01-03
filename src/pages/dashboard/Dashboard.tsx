import { BarraDeFerramentas } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';


export const Dashboard = () => {
  return(
    <LayoutBaseDePagina titulo='DashBoard' barraDeFerramentas={<BarraDeFerramentas mostrarInputBusca textoBotaoNovo='Nova'/>}>
			Página
    </LayoutBaseDePagina>
  );
};