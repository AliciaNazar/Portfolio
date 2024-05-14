import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ServiceService } from '../../services/service.service';
import { slideFromBottom,slide1,slide2 } from '../../animations';
import { ContactoComponent } from "../contacto/contacto.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    animations: [slideFromBottom, slide1, slide2],
    imports: [CommonModule, ContactoComponent]
})
export class HomeComponent implements OnInit{

  
  valor = inject(ServiceService);
  


  expandido: boolean = false;
  positions: { x: number, y: number }[] = [];
  positions2: { x: number, y: number }[] = [];

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
