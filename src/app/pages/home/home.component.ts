import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ServiceService } from '../../services/service.service';
import { slideFromBottom,slide1,slide2 } from '../../animations';
import { ContactoComponent } from "../contacto/contacto.component";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Proyecto } from './proyecto.model';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    animations: [slideFromBottom, slide1, slide2],
    imports: [CommonModule, ContactoComponent,MatCardModule, MatButtonModule]
})
export class HomeComponent implements OnInit{

  
  valor = inject(ServiceService);
  


  expandido: boolean = false;
  positions: { x: number, y: number }[] = [];
  positions2: { x: number, y: number }[] = [];


  currentIndex: number = 1;
  previousIndex: number = -1;

actualizarIndices(nuevoIndex: number) {
  if(nuevoIndex > 0 && nuevoIndex < this.proyectos.length) {
  this.previousIndex = nuevoIndex - 1;
  this.currentIndex = nuevoIndex;
  // console.log("nuevoIndex", nuevoIndex, "currentIndex", this.currentIndex, "previousIndex", this.previousIndex);
  }
  return this.currentIndex;
}
analizar(nuevoIndex: number): boolean {
  if (this.previousIndex > nuevoIndex) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

  proyectos: Proyecto[] = [
    {
      nombre: "TravelBooker",
      descripcion: "Aplicacion hecha en Angular 17",
      imagen: "../../../assets/TravelBooker.png",
      descripcionLarga:"Sistema de reservas de pasajes de colectivos con uso de base de datos y consumo de API creada con C#. Github: ",
      github: "https://github.com/AliciaNazar/TravelBooker"
    },
    {
      nombre: "LandingPage",
      descripcion: "Landing Page hecha en Angular 17",
      imagen: "../../../assets/Productos.png",
      descripcionLarga:"Esta aplicación consume una API externa y permite consultar productos con sus precios, detalles e imágenes. Github: ",
      github: "https://github.com/AliciaNazar/LandingPage-Angular17"
    },
    {
      nombre: "DentCorp",
      descripcion: "Proyecto hecho en Django para Centro Odontológico",
      imagen: "../../../assets/DentCorp.png",
      descripcionLarga:"Sistema de gestión y asignación de turnos; alta, baja y modificación de usuarios. Github: ",
      github: "https://github.com/AliciaNazar/DentCorp"
    },
    {
      nombre: "SaltaVincula",
      descripcion: "Proyecto colaborativo realizado usando Ionic",
      imagen: "../../../assets/proyIonic.png",
      descripcionLarga:"Corresponde al diseño FrontEnd de una aplicación móvil para una red social. Github: ",
      github: "https://github.com/AliciaNazar/SaltaVincula"
    },
    {
      nombre: "SkyNet",
      descripcion: "Proyecto colaborativo de consola hecho en C#",
      imagen: "../../../assets/SkyNet.png",
      descripcionLarga:"Software que simula mapa, entidades mecánicas, funcionalidades avanzadas como persistencia de datos en una base SQL Server y consultas generales. Github: ",
      github: "https://github.com/AliciaNazar/Sky.Net-UTN"
    },
    {
      nombre: "Lista de Tareas",
      descripcion: "Lista de Tareas hecha con Angular 17",
      imagen: "../../../assets/Lista de Tareas.png",
      descripcionLarga:"Esta es una aplicación para registrar y eliminar tareas a realizar. Github: ",
      github: "https://github.com/AliciaNazar/lista-tareas"
    },
    {
      nombre: "Sistema Productos",
      descripcion: "Proyecto colaborativo desarrollado en Python",
      imagen: "../../../assets/tkinter.png",
      descripcionLarga:"Sistema de gestión (CRUD) de productos en el que se hizo uso de Tkinter. Github: ",
      github: "https://github.com/AliciaNazar/SistemaProductosPython"
    },
    
  ];

 

ngOnInit() {


  for (let i = 0; i < 50; i++) {
    this.positions.push(this.generateRandomPosition());
  }
  for (let i = 0; i < 50; i++) {
    this.positions2.push(this.generateRandomPosition());
  }
}


  expandir() {
    this.expandido = !this.expandido;
  }
  

  generateRandomPosition(): { x: number, y: number } {
    const maxWidth = document.body.clientWidth; 
    const maxHeight = document.body.clientHeight; 
  
    const x = Math.random() * (maxWidth - 100);
    const y = Math.random() * (maxHeight - 100);
  
    return { x, y };
  }

  
  


  
}
