import { Component } from '@angular/core';

import { Header } from '../../component/header/header';
import { Quemsomos } from '../../component/quemsomos/quemsomos';
@Component({
  imports: [Header, Quemsomos],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
