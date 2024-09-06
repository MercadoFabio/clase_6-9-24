import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { Programador } from './programador';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  progEdit: Programador = new Programador();
  lstProgramdores: Programador[] = [];
  nextId: number = 1;
  mostrar: boolean = true;
  mostrarLista : boolean = false
  add(p: Programador) {
    this.mostrarLista = true
    this.mostrar = false
    if (p.id === 0) {
      p.id = this.nextId;
      this.lstProgramdores.push(p);
      this.nextId++;
    } else {
      const index = this.lstProgramdores.findIndex((prog) => prog.id === p.id);
      this.lstProgramdores[index] = p;
    }
  }
  remove(index: number) {
    this.lstProgramdores.splice(index, 1);
  }
  editar(p: Programador) {
    this.mostrar = true
    this.mostrarLista = false
    console.log(p);
    this.progEdit = p;
    console.log(this.progEdit);
  }
  nuevo() {
    this.mostrar = !this.mostrar;
    this.mostrarLista = false
    this.progEdit = new Programador();
  }
}
