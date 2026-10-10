import { Component } from '@angular/core';

import { Header } from '../../component/header/header';
import { Quemsomos } from '../../component/quemsomos/quemsomos';
import { Whatsaap } from '../../component/whatsaap/whatsaap';
@Component({
  imports: [Header, Quemsomos, Whatsaap],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
