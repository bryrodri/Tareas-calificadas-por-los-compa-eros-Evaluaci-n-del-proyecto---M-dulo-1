import { Component, OnInit } from '@angular/core';
import { Destinoviaje } from '../models/DestinoViajes';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  
  destinos:Destinoviaje[];
  
  constructor() { 
    this.destinos=[];
  }

  ngOnInit(): void {
  }

    guardar(nombre:string):boolean{

      this.destinos.push(new Destinoviaje(nombre));
      console.log(this.destinos);
      return false;
    }

    borrar(nombre:string):boolean{

      for (let index = 0; index < this.destinos.length; index++) {
        
        console.log(this.destinos[index].nombre)
        if(nombre==this.destinos[index].nombre){
          this.destinos.splice(index,1);
          index--;

        }
        
        
      }



      return false;
    }


}
