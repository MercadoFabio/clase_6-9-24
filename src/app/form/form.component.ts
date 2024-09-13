import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Programador } from '../programador';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import moment from 'moment';
import { ProgramdorServiceService } from '../programdor-service.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  ngOnInit(): void {
    // Configurar la fecha inicial en el formato correcto
    const today = new Date(2010, 0, 10); // Recuerda que los meses en JavaScript son 0-indexados (noviembre es 10)
    this.prog.fechaNacimiento = moment(today).format('YYYY-MM-DD'); // libreria moment
    //this.prog.fechaNacimiento = today.toISOString().split('T')[0]
    console.log(this.prog.fechaNacimiento); // Debería mostrar la fecha en formato yyyy-MM-dd
  }
  //@Input() progEdit = new Programador();

  prog: Programador = new Programador();

  listHabilidades: string[] = ['.Net', 'Java', 'Javascript', 'AWS'];

  habilidadSeleccionada: string = '';
 
   //constructor(private progService:ProgramdorServiceService) {}
   private progService = inject(ProgramdorServiceService)
  //@Output() enviadoEmit = new EventEmitter<Programador>();
  sendForm(form: NgForm) {
    //TODO:
    if (form.valid) {
      const prog = {...this.prog}
      //this.enviadoEmit.emit(prog);
      this.progService.addProg(prog)
      this.prog = {
        apellido: '',
        nombre: '',
        habilidades: [],
        fechaNacimiento : '',
        contacto: {
          email: '',
          redSocial: '',
        },
      };
      this.habilidadSeleccionada = '';
    }
  }
  agregarHabilidades() {
    if (!this.prog.habilidades.includes(this.habilidadSeleccionada))
      this.prog.habilidades.push(this.habilidadSeleccionada);
  }
  eliminarHabilidades(index: number) {
    this.prog.habilidades.splice(index, 1);
  }
 
}
