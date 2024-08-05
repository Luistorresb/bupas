import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceComponent } from './layouts/errors/maintenance/maintenance.component';
import { Page404Component } from './layouts/errors/page404/page404.component';
import { authGuard } from './core/guards/auth.guard';
import { UnauthorizedComponent } from './layouts/errors/unauthorized/unauthorized.component';
import { CerrarSesionComponent } from './layouts/errors/cerrar-sesion/cerrar-sesion.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('./pages/main/main.module').then(
        ({ MainModule }) => MainModule,
    ),
    // canActivate: [authGuard],
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
	{
    path: 'cerrar_sesion',
    component: CerrarSesionComponent,
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent,
  },
	{ path: '*', pathMatch: 'full', redirectTo: 'main/dashboard' },
  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
