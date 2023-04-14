import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'destination',
    pathMatch: 'full',
  },
  {
    path: 'reservation',
    loadComponent: () => import('./reservation/reservation.page').then( m => m.ReservationPage)
  },
  {
    path: 'destination',
    loadComponent: () => import('./destination/destination.page').then( m => m.DestinationPage)
  },
];
