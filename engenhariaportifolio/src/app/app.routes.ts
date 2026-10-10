import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Notfound } from './pages/notfound/notfound';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: '**',
        component: Notfound,
    },
];
