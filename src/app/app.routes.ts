import { Routes } from '@angular/router';
import { AddObjectComponent } from './pages/add-object/add-object.component';
import { ObjectDetailsComponent } from './pages/object-details/object-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'add-object', pathMatch: 'full' },
  { path: 'add-object', component: AddObjectComponent },
  { path: 'object-details/:id', component: ObjectDetailsComponent },
];