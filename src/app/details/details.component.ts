import { Component, inject, OnInit } from '@angular/core';
import { ProgramdorServiceService } from '../programdor-service.service';
import { Programador } from '../programador';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  private service = inject(ProgramdorServiceService);
  prog: Programador = new Programador();
  ngOnInit(): void {
    this.service.currentProg.subscribe((p) => {
      this.prog = p;
    });
  }
}
