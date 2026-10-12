import { Component } from '@angular/core';

import { Header } from '../../component/header/header';
import { Quemsomos } from '../../component/quemsomos/quemsomos';
import { Whatsaap } from '../../component/whatsaap/whatsaap';
import { Cartaz } from '../../component/cartaz/cartaz';
import { Footer } from '../../component/footer/footer';
import { Carrosel } from '../../component/carrosel/carrosel';

@Component({
  selector: 'app-home',
  imports: [Header, Quemsomos, Whatsaap, Cartaz, Footer, Carrosel],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}