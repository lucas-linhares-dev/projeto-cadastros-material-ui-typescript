import { BarraDeFerramentas } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';


export const Dashboard = () => {
  return(
    <LayoutBaseDePagina titulo='DashBoard' barraDeFerramentas={<BarraDeFerramentas />}>
			Página
    </LayoutBaseDePagina>
  );
};