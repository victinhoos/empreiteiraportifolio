import { Component } from '@angular/core';

import { Header } from '../../component/header/header';
import { Hubnossoimoveis } from '../../component/hubnossoimoveis/hubnossoimoveis';

@Component({
  imports: [Header, Hubnossoimoveis ],
  selector: 'app-nossoimoveis',
  styleUrl: './nossoimoveis.css',
  templateUrl: './nossoimoveis.html',
})
export class Nossoimoveis {}
