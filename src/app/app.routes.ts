import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Pagina de inicio'
  },
  {
    path: 'categoria-form/:id',
    component: CategoriaFormComponent,
    title: 'Formulario de categoria'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
