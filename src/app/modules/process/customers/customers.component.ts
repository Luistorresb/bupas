import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CustomersService } from 'src/app/core/services/procees/customers.service';
declare var $: any;
@Component({
  selector: 'wlrd-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent {
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
  clientes = [
    {
      Nombre: 'Almacen 1',
      fecha: '29/07/2024',
      estado: 'Activo',
    },
    {
      Nombre: 'Almacen 2',
      fecha: '29/07/2024',
      estado: 'Activo',
    },
    {
      Nombre: 'Almacen 3',
      fecha: '29/07/2024',
      estado: 'Activo',
    },
  ];
  listData: any = [];
  constructor(private _Service: CustomersService) {}

  ngOnInit(): void {
    this.selectData();
  }

  selectData(): void {
    forkJoin({
      clientes: this._Service.getClients()
    }).subscribe({
      next: (data: any) => {
        // Verifica la estructura del objeto recibido
        console.log('Datos recibidos:', data);
        this.listData = data.clientes.items; // Asegúrate de que 'items' esté en 'clientes'
      },
      error: (error: any) => {
        console.error('Error al obtener datos:', error);
      }
    });
  }
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
    $('#modalmypass').modal('show');
  }
  close() {
    $('#modalmypass').modal('hide');
  }
}
