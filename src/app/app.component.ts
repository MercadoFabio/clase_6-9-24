import { Component, inject, OnInit } from '@angular/core';
import { FormComponent } from './form/form.component';
import { Programador } from './programador';
import { ProgramdorServiceService } from './programdor-service.service';
import { DetailsComponent } from './details/details.component';
import { ListaComponent } from './lista/lista.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent, DetailsComponent, ListaComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  mostrarFormulario: boolean = true;
  mostrarLista: boolean = false;
  listaProgramadores?: Programador[];
  opcionSeleccionada: any;
}
