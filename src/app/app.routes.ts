import { Routes } from '@angular/router';
import { Viajes } from './components/viajes/viajes';
import { Remfee } from './components/remfee/remfee';

export const routes: Routes = [
    {
        path: 'viajes',
        component: Viajes
    },
    {
        path: 'remfee',
        component: Remfee
    },
    {
        path: '**',
        component: Viajes
    }
];
