import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Notfound } from './pages/notfound/notfound';
import { Nossoimoveis } from './pages/nossoimoveis/nossoimoveis';
import { Contatos } from './pages/contatos/contatos';
import { Faq } from './pages/faq/faq';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'NossoImoveis',
        component: Nossoimoveis,
    },
    {
        path: 'Contatos',
        component: Contatos,
    },
    {
        path: 'Faq',
        component: Faq,
    },
    {
        path: '**',
        component: Notfound,
    },
];
