import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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
export class HomeComponent {

  
  valor = inject(ServiceService);
 


  expandido: boolean = false;

  expandir() {
    this.expandido = !this.expandido;
  }
  
}
