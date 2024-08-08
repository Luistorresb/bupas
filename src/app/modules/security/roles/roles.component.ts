import { HttpErrorResponse } from '@angular/common/http';
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

  createAndUpdte(item: any | null) {
    $('#modalmypass').modal('show');
    if (item != null) {
      this.role = {
        Nombre: item.Nombre,
        Descripcion: item.Descripcion,
      };
    }
  }

  close() {
    $('#modalmypass').modal('hide');
  }

  manageRole(action: 'create' | 'update', id?: string): void {
    console.log(action);

    // Verifica que los campos no estén vacíos
    if (this.role.Nombre.trim() && this.role.Descripcion.trim()) {
      if (action === 'create') {
        // Llamada al servicio para crear un nuevo rol
        this._rolesService.createRol(this.role).subscribe({
          next: (response) => {
            console.log('Rol creado exitosamente:', response);
            this.close();
          },
          error: (error) => {
            console.error('Error al crear rol:', error);
          },
        });
      } else if (action === 'update' && id) {
        // Llamada al servicio para actualizar un rol existente
        this._rolesService.updateRol(id, this.role).subscribe({
          next: (response) => {
            console.log('Rol actualizado exitosamente:', response);
            this.close();
          },
          error: (error) => {
            console.error('Error al actualizar rol:', error);
          },
        });
      }
    } else {
      // Muestra un mensaje de error si los campos están vacíos
      console.log('Por favor, completa todos los campos.');
    }
  }

}
