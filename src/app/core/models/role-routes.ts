import { MenuItem } from '../interfaces/generic.interface';

export const appRoles: string[] = ['portalcli_client'];

export const roleRoutes: { [key: string]: MenuItem[] } = {
  none: [
    { id: 0, label: 'PORTAL CLIENTES', isTitle: true },
    {
      id: 1,
      label: 'Inicio',
      icon: 'bx bx-home-alt',
      link: '/dashboard',
      isTitle: false,
    },
  ],
  portalcli_client: [
    { id: 0, label: 'PORTAL CLIENTES', isTitle: true },
    {
      id: 1,
      label: 'Inicio',
      icon: 'bx bx-home-alt',
      link: '/dashboard',
      isTitle: false,
    },
    {
      id: 2,
      label: 'Post consumo',
      icon: 'bx bx-shape-circle',
      link: '/post-consumption',
      isTitle: false,
    },
    {
      id: 3,
      label: 'Pedidos',
      icon: 'bx bx-taxi',
      link: '/orders',
      isTitle: false,
    },
    {
      id: 4,
      label: 'Reporte de Postconsumo',
      icon: 'bx bxs-report',
      link: '/reports',
      isTitle: false,
    },
  ],
};
