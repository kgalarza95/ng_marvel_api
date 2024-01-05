import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() mensajeDesdePadre: string = '';
  @Output() mensajeHaciaPadre: EventEmitter<string> = new EventEmitter<string>();

  mensajeParaPadre: string = '';

  enviarMensajeAlPadre() {
    this.mensajeHaciaPadre.emit(this.mensajeParaPadre);
  }
}
