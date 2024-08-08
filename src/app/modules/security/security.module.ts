import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { RequestLogsComponent } from './request-logs/request-logs.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RequestLogsComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
  ]
})
export class SecurityModule { }
