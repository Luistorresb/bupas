import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'wlrd-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
  switchSection: string = 'List';
  actionModal: string = '';
  showForm = false;
  dataUser: any = {
		name: '',
		lastname: '',
		documentTypeId: '',
		documentNumber: '',
		email: '',
		mobile: '',
		address: '',
		roleId: '',
		nickname: '',
		password: '',
		playerIdPush: '',
	};
  newUser = {
    id: '',
    Nombre: '',
    Descripcion: '',
    Email: ''
  };
  roles = [
    {
      Nombre: 'Empleado',
      fecha: '29/07/2024',
      estado: 'Activo',
    },
    {
      Nombre: 'Administrador',
      fecha: '29/07/2024',
      estado: 'Activo',
    },
    {
      Nombre: 'proveedor',
      fecha: '29/07/2024',
      estado: 'Activo',
    },
  ];

  addUser() {
    this.actionModal = 'Crear';
    this.dataUser = {
      name: '',
      lastname: '',
      documentTypeId: '',
      documentNumber: '',
      email: '',
      mobile: '',
      address: '',
      roleId: '',
      nickname: '',
      password: '',
      playerIdPush: '',
    };
    $('#modalUser').modal('show');
  }
  showCreateUserForm() {
    this.showForm = true;
  }

  cancelCreate() {
    this.showForm = false;
    this.newUser = {
      id: '',
      Nombre: '',
      Descripcion: '',
      Email: ''
    };
  }

  toggleCreateUserForm() {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.cancelCreate();
    }
  }
}
