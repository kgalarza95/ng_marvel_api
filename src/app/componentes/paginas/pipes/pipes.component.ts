import { registerLocaleData } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import localeFr from '@angular/common/locales/fr';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  texto = 'Angular es poderoso y flexible';
  numero = 1234.5678;
  porcentaje = 0.75;
  valorMoneda = 1234.56;
  objeto = { nombre: 'Ejemplo', edad: 25, ciudad: 'Ciudad Ejemplo' };
  observableValue: Observable<string>;
  fecha = new Date();
  cadena = 'esto es un ejemplo de titlecase en angular';
  mensaje = 'Estoy muy feliz hoy. 😄';

  constructor(@Inject(LOCALE_ID) private locale: string) {
    // Ejemplo de observable (simulado con of y delay)
    this.observableValue = of('Valor del observable').pipe(delay(2000));
  }

  cambiarIdioma(idioma: string): void {
    if (idioma === 'fr') {
      registerLocaleData(localeFr);
      this.locale = 'fr';
    }
  }

  cambiarMensaje(): void {
    this.mensaje = 'Me siento enojado porque no hay helado. 😠🍦';
  }
}
