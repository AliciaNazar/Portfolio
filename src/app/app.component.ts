import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiceService } from './services/service.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, HomeComponent]
})
export class AppComponent{

  title = 'Alicia Nazar - Portfolio';
  enlaceActivo: number = 0;

  manejarClicEnlace(indice: number) {
    this.enlaceActivo = indice;
  }

  valorAEnviar = inject(ServiceService);

  enviarValor(){
    this.valorAEnviar.valorSignal.update(x=>this.enlaceActivo);
  }


  // scrollOffset = 10;
  // copiaScroll= this.scrollOffset;


  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll($event: Event) {
  //   this.scrollOffset = window.pageYOffset;

  //   if (this.scrollOffset >= this.copiaScroll && this.enlaceActivo != 5) {
  //     this.manejarClicEnlace(this.enlaceActivo + 1);
      
  //   }
  //   if (this.scrollOffset <= this.copiaScroll && this.enlaceActivo !== 0) {
  //     this.manejarClicEnlace(this.enlaceActivo - 1);
  //   }
  //   this.enviarValor();
  // }

}
