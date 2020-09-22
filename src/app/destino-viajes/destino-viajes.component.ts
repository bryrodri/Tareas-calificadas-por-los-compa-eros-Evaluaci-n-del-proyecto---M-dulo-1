import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Destinoviaje } from '../models/DestinoViajes';

@Component({
  selector: 'app-destino-viajes',
  templateUrl: './destino-viajes.component.html',
  styleUrls: ['./destino-viajes.component.css']
})
export class DestinoViajesComponent implements OnInit {
  @Input() destino:Destinoviaje;
  @HostBinding('attr.class') cssClass='col-md-12';
  constructor() { }

  ngOnInit(): void {
  }

}
