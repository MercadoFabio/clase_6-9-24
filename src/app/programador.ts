import { Contacto } from './contacto';

export class Programador {
  id: number = 0;
  nombre: string = '';
  apellido: string = '';
  puestoPostulacion: string = '';
  habilidades: string[] = [];
  ciudad: string = '';
  remuneracion  : number = 0;
  contacto: Contacto = new Contacto();
}
