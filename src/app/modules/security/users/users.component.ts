import { Component } from '@angular/core';
import { RolesService } from 'src/app/core/services/roles/roles.service';
import { UsersService } from 'src/app/core/services/users/users.service';
import { Observable, Subject, forkJoin, fromEvent, identity } from 'rxjs';

declare var $: any;
@Component({
  selector: 'wlrd-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  switchSection: string = 'List';
  actionModal: string = '';
  showForm = false;
  users: any[] = [];
  user = {
    Id: null,
    Authid: '',
    Nombre: '',
    Descripcion: '',
    Email: '',
    Rol: '',
  };
  listData: any;

  constructor(
    private _userService: UsersService,
    private _rolesService: RolesService
  ) {}

  ngOnInit(): void {
    this.selectData();
  }

  selectData(): void {
    forkJoin({
      users: this._userService.allUsers(),
      roles: this._rolesService.allRoles(),
    }).subscribe({
      next: ({ users, roles }) => {
        console.log(users);
        console.log(roles);
        this.users = users.items;
        this.listData = roles.items;
      },
      error: (error: any) => {
        console.error('Error al obtener datos:', error);
      },
    });
  }

  createAndUpdate(item: any | null) {
    console.log(item)
    this.clearDta();
    this.showForm = !this.showForm;
    if (item != null) {
      this.user = {
        Id: item.Id,
        Authid: item.OauthId,
        Nombre: item.Nombre,
        Descripcion: item.Descripcion,
        Email: item.Email,
        Rol: '',
      };
    }
  }

  manageUser(): void {
    console.log(this.user);
    // Verifica que los campos no estén vacíos
    if (
      this.user.Nombre.trim() &&
      this.user.Descripcion.trim() &&
      this.user.Email.trim()
    ) {
      if (this.user.Id === null) {
        console.log('crearr')
        // Llamada al servicio para crear un nuevo usuario
        this._userService
          .createUser({
            OauthId: this.user.Authid,
            Nombre: this.user.Nombre,
            Descripcion: this.user.Descripcion,
            Email: this.user.Email,
          })
          .subscribe({
            next: (response: any) => {
              console.log('Usuario creado exitosamente:', response);
              this.selectData(); // Para refrescar la lista de usuarios después de crear uno nuevo
            },
            error: (error: any) => {
              console.error('Error al crear usuario:', error);
            },
          });
      } else if (this.user.Id !== null) {
        // Llamada al servicio para actualizar un usuario existente
        this._userService
          .updateUser(this.user.Authid, {
            Nombre: this.user.Nombre,
            Descripcion: this.user.Descripcion,
            Email: this.user.Email,
          })
          .subscribe({
            next: (response: any) => {
              console.log('Usuario actualizado exitosamente:', response);
              this.selectData(); // Para refrescar la lista de usuarios después de actualizar uno existente
            },
            error: (error: any) => {
              console.error('Error al actualizar usuario:', error);
            },
          });
      }
    } else {
      // Muestra un mensaje de error si los campos están vacíos
      console.log('Por favor, completa todos los campos.');
    }
  }
  clearDta(){
    this.user = {
      Id: null,
      Authid: '',
      Nombre: '',
      Descripcion: '',
      Email: '',
      Rol: '',
    };
  }
}
