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
          id: 21,
          label: 'Roles',
          link: 'roles',
          parentId: 2,
        },
        {
          id: 22,
          label: 'Usuarios',
          link: 'users',
          parentId: 2,
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
