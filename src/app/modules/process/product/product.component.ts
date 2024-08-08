import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'wlrd-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
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
    Email: '',
  };
  sedesDeAcopio: any = [
    {
      Nombre: 'Producto  1',
      fecha: '29/07/2024',
      estado: 'Activo',
    },
    {
      Nombre: 'Producto 2',
      fecha: '29/07/2024',
      estado: 'Activo',
    },
    {
      Nombre: 'Producto 3',
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
      Email: '',
    };
  }

  toggleCreateUserForm() {
    $("#modalmypass").modal('show');

  }
  close(){
    $("#modalmypass").modal('hide');
  }
}
