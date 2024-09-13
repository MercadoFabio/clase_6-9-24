import { Contacto } from './contacto';

export class Programador {
  nombre: string = '';
  apellido: string = '';
  habilidades: string[] = [];
  fechaNacimiento: string = '';
  contacto: Contacto = new Contacto();
}
