import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Notfound } from './pages/notfound/notfound';
import { Contatos } from './pages/contatos/contatos';
import { Faq } from './pages/faq/faq';
import { Termodecondicao } from './pages/termodecondicao/termodecondicao';

import { Nossoimoveis } from './pages/nossoimoveis/nossoimoveis';
import { Imoveis } from './pages/imoveis/imoveis';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    { 
        path: 'NossoImoveis', 
        component: Nossoimoveis 
    },
    { 
        path: 'NossoImoveis/:id', 
        component: Nossoimoveis 
    },
    { 
        path: 'imoveis/:id',
        component: Nossoimoveis

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
        path: 'termodecondicao',
        component: Termodecondicao,
    },
    {
        path: '**',
        component: Notfound,
    },
];
