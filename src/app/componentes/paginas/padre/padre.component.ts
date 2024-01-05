import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  mensajeParaHijo: string = '';
  mensajeDesdePadre: string = '';
  mensajeDesdeHijo: string = '';

  enviarMensajeAlHijo() {
    this.mensajeDesdePadre = this.mensajeParaHijo;
  }

  recibirMensajeDelHijo(mensaje: string) {
    this.mensajeDesdeHijo = mensaje;
  }

}
