import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }
