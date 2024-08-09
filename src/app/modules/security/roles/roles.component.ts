import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/core/services/roles/roles.service';
import { Observable, Subject, forkJoin, fromEvent } from 'rxjs';
declare var $: any;
@Component({
  selector: 'wlrd-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit {
  switchSection: string = 'List';
  actionModal: string = '';
  showForm = false;
  role = {
    Id: null,
    Nombre: '',
    Descripcion: '',
  };
  listData: any = [];

  constructor(private _rolesService: RolesService) {}
  ngOnInit(): void {
    this.selectData();
  }

  selectData(): void {
    this._rolesService.allRoles().subscribe({
      next: (value: any) => {
        console.log(value);
        this.listData = value.items;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  clearDta(){
    this.role = {
      Id: null,
      Nombre: '',
      Descripcion: '',
    };
  }
  createAndUpdte(item: any | null) {
    this.clearDta();
    $('#modalmypass').modal('show');
    if (item != null) {
      this.role = {
        Id: item.Id,
        Nombre: item.Nombre,
        Descripcion: item.Descripcion,
      };
    }
  }

  close() {
    $('#modalmypass').modal('hide');
  }

  manageRole(): void {
    console.log(this.role);
    // Verifica que los campos no estén vacíos
    if (this.role.Nombre.trim() && this.role.Descripcion.trim()) {
      if (this.role.Id === null) {
        // Llamada al servicio para crear un nuevo rol
        this._rolesService.createRol({
          Nombre: this.role.Nombre,
          Descripcion: this.role.Descripcion,
        }).subscribe({
          next: (response) => {
            console.log('Rol creado exitosamente:', response);
            this.close();
          },
          error: (error) => {
            console.error('Error al crear rol:', error);
          },
        });
      } else if (this.role.Id !== null) {
        // Llamada al servicio para actualizar un rol existente
        this._rolesService.updateRol(this.role.Id, {
          Nombre: this.role.Nombre,
          Descripcion: this.role.Descripcion,
        }).subscribe(x=>{
          console.log(x);
          this.close();
        });
        
        
      }
    } else {
      // Muestra un mensaje de error si los campos están vacíos
      console.log('Por favor, completa todos los campos.');
    }
  }

}
