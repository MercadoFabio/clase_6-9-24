import { Injectable } from '@angular/core';
import { Programador } from './programador';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgramdorServiceService {
  private lstProg: Programador[] = [];
  private progSource = new BehaviorSubject<Programador[]>([]);
    currentProg = new Subject<Programador>();
   
  addProg(p: Programador) {
    //this.lstProg.push(p)
    const programadoresActuales = this.progSource.getValue();
    programadoresActuales.push(p)
    this.progSource.next(programadoresActuales)
  }
  deleteProg(index: number) {
   // this.lstProg.splice(index,1)
    const programadoresActuales = this.progSource.getValue();
    programadoresActuales.splice(index, 1);
    this.progSource.next(programadoresActuales)
  }
  getProgramadores() {
    //return this.lstProg;
    return this.progSource.getValue()
  }
  editProg(){
    //todo:
  }
  setProg(p:Programador){
    this.currentProg.next(p)
  }
 
}
