import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {
  usuario = {
    nombre: 'Bryan',
    apellido: 'Alba',
    correo: ''
  }
  constructor() { }

  ngOnInit() {
  }

  guardar(form: NgForm) {
    console.log('Formulario posteado');
    console.log('ngForm', form);
    console.log('Valor forma', form.value );
    console.log('Usuario', this.usuario);
  }

}
