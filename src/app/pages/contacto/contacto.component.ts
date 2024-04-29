import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent{

  formContacto!: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.formContacto = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    })
  }

  enviar(event: Event){
    event.preventDefault();
    if (this.formContacto.valid) {
      const formData = new FormData();
      formData.append('nombre', this.formContacto.value.nombre);
      formData.append('email', this.formContacto.value.email);
      formData.append('mensaje', this.formContacto.value.mensaje);
      
      fetch("https://formsubmit.co/48fc795df6cfc2c5be1a884b956e16af", {
        method: 'POST',
        body: formData
      })
      alert("Formulario enviado exitosamente")
    }
    else {
      alert('El formulario no es válido');
    }
  }

  hasErrors(field: string, typeError: string){
    return this.formContacto.get(field)?.hasError(typeError) && this.formContacto.get(field)?.touched;
  }

}
