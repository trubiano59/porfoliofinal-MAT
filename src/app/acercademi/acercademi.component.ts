import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
  //esta es una forma pero no es la que va
  //nombre = 'Miguel Angel';
 //apellido = 'Trubiano';
 //crear variable de instancia para almacenar los datos con los que trata el servicio
 infoPorfolio: any;
//inyectar el Servicio para tener acceso en la clase a los Metodos

  constructor(private porfolioService:PorfolioService) {}

  ngOnInit(): void {
    //esto es almacenar en la variable de instancia los datos recuperados por el Servicio
    this.porfolioService.getDatos().subscribe(datos =>{
      console.log(datos); 
      this.infoPorfolio-datos.uno;
    }) 
  }

}
