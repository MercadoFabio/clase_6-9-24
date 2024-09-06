import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { LIST_HABILIDADES, LIST_REDES_SOCIALES } from '../storage';
import { Programador } from '../programador';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnChanges {
  habilidadSeleccionada: string = '';
  habilidades: string[] = LIST_HABILIDADES;
  sociales: string[] = LIST_REDES_SOCIALES;
  programador: Programador = new Programador();
  @Output() emitForm = new EventEmitter<Programador>();
  @Input() programdorEdit = new Programador();
  ngOnChanges(): void {
    if (this.programdorEdit.id != 0) {
      this.programador.apellido = this.programdorEdit.apellido;
      this.programador.nombre = this.programdorEdit.nombre;
      this.programador.id = this.programdorEdit.id;
      this.programador.ciudad = this.programdorEdit.ciudad;
      this.programador.puestoPostulacion =
        this.programdorEdit.puestoPostulacion;
      this.programador.habilidades = this.programdorEdit.habilidades;
      this.programador.contacto.email = this.programdorEdit.contacto.email;
      this.programador.contacto.redSocial =
        this.programdorEdit.contacto.redSocial;
      this.programador.contacto.telefono =
        this.programdorEdit.contacto.telefono;
    }
  }
  agregarHabilidades() {
    if (!this.programador.habilidades.includes(this.habilidadSeleccionada)) {
      this.programador.habilidades.push(this.habilidadSeleccionada);
    }
  }
  eliminarhabilidad(index: number) {
    this.programador.habilidades.splice(index, 1);
  }
  sendForm(form: NgForm) {
    console.log(form);
    if (form.valid) {
      console.log(this.programador);
      this.emitForm.emit(this.programador);
      this.programador = new Programador();
    }
  }
}
