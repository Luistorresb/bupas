import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestLogsRoutingModule } from './request-logs-routing.module';
import { FormsModule } from '@angular/forms';  // <-- Importa FormsModule aquí

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RequestLogsRoutingModule,
  ]
})
export class RequestLogsModule { }
