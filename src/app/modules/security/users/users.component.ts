import { Component } from '@angular/core';
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
  users = [
    {
      OauthId: '123...',
      Nombre: 'Jon Doe',
      Descripcion: 'Jon Doe, usuario de prueba',
      Email: 'bqy.dev@qq.com',
    },
    {
      OauthId: '123...',
      Nombre: 'Jon Doe',
      Descripcion: 'Jon Doe, usuario de prueba',
      Email: 'bqy.dev@qq.com',
    },
    {
      OauthId: '123...',
      Nombre: 'Jon Doe',
      Descripcion: 'Jon Doe, usuario de prueba',
      Email: 'bqy.dev@qq.com',
    },
    {
      OauthId: '123...',
      Nombre: 'Jon Doe',
      Descripcion: 'Jon Doe, usuario de prueba',
      Email: 'bqy.dev@qq.com',
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
