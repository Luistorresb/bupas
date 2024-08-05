import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { CatalogueComponent } from 'src/app/components/catalogue/catalogue.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CatalogueComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,

  ]
})
export class DashboardModule { }
