import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Programador } from '../programador';
import { ProgramdorServiceService } from '../programdor-service.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaComponent implements OnInit {

  
  private progService = inject(ProgramdorServiceService);
  lstProgramadores: Programador[] = [];

  ngOnInit(): void {
    console.log(this.progService.getProgramadores());
    this.lstProgramadores = this.progService.getProgramadores();
  }
  mostrarDetalle(p: Programador) {
    this.progService.setProg(p);
  }
  eliminarProgramador(index: number) {
    this.progService.deleteProg(index);
  }
  editar(index: number) {
    const p = this.lstProgramadores[index];
  }
}
