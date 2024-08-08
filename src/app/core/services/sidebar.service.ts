import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/generic.interface';
import { appRoles, roleRoutes } from '../models/role-routes';
import { Auth0Service } from './auth0.service';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private _menu: MenuItem[] = [];

  // Menú estático en el formato estándar con solo tres objetos
  private staticMenu: MenuItem[] = [
    {
      id: 1,
      label: 'Inicio',
      badge: 'General',
      icon: 'fa-solid fa-house-chimney',
      link: 'dashboard',
    },
    {
      id: 2,
      label: 'Seguridad',
      badge: 'Módulos',
      icon: 'fa-solid fa-lock',
      subItems: [
        {
          id: 1,
          label: 'Roles',
          link: 'roles',
          parentId: 2,
        },
        {
          id: 2,
          label: 'Usuarios',
          link: 'users',
          parentId: 2,
        },
        {
          id: 3,
          label: 'Bitacora',
          link: 'request',
          parentId: 2,
        },
      ],
    },
     {
      id: 3,
      label: 'Procesos',
      badge: 'Módulos',
      icon: 'fa-solid fa-lock',
      subItems: [
        {
          id: 1,
          label: 'Clientes',
          link: 'customers',
          parentId: 3,
        },
    
        {
          id: 2,
          label: 'Sedes de Acopio',
          link: 'collection',
          parentId: 3,
        },
        {
          id: 3,
          label: 'Producto',
          link: 'product',
          parentId: 3,
        },
        {
          id: 4,
          label: 'Transportador',
          link: 'conveyor',
          parentId: 3,
        },
        {
          id: 5,
          label: 'Asesor',
          link: 'adviser',
          parentId: 3,
        },
      ],
    },
  ];

  constructor(private auth0Service: Auth0Service) {
    this.auth0Service.user$.subscribe((user) => {
      if (user) {
        let roles: string[] = [];
        const userRoles = user['https://woomi.bateriaswillard.com/roles'];

        if (Array.isArray(userRoles)) {
          roles = userRoles;
        } else if (typeof userRoles === 'string') {
          roles = [userRoles];
        }

        // Encuentra el primer rol que coincide con appRoles
        const userRole = roles.find((role: string) => appRoles.includes(role));

        if (userRole) {
          this._menu = roleRoutes[userRole] || roleRoutes['none'] || [];
        } else {
          this._menu = roleRoutes['none'] || [];
        }
      }
    });
  }

  get menu(): MenuItem[] {
    return this._menu.length > 0 ? this._menu : this.staticMenu;
  }
}
