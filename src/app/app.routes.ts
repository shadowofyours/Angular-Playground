import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home-page';

export const routes: Routes = [
  { path: '', component: HomePage }, // Default route
  { path: 'about', component: HomePage }, // TODO: Create AboutPage component
  { path: 'services', component: HomePage }, // TODO: Create ServicesPage component
  { path: 'contact', component: HomePage }, // TODO: Create ContactPage component
  { path: '**', redirectTo: '' } // Wildcard route
];
