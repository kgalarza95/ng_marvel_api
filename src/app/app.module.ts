import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PrincipalComponent } from './componentes/paginas/principal/principal.component';
import { BuscarComponent } from './componentes/paginas/buscar/buscar.component';
import { PipesComponent } from './componentes/paginas/pipes/pipes.component';
import { FormsModule } from '@angular/forms';
import { DetalleHeroeComponent } from './componentes/paginas/subpaginas/detalle-heroe/detalle-heroe.component';
import { PresentacionComponent } from './componentes/paginas/presentacion/presentacion.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { ToastrModule } from 'ngx-toastr';
import { PadreComponent } from './componentes/paginas/padre/padre.component';
import { HijoComponent } from './componentes/paginas/hijo/hijo.component';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { EmojiFyPipe } from './pipes/emoji-fy.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    BuscarComponent,
    PipesComponent,
    DetalleHeroeComponent,
    PresentacionComponent,
    CarruselComponent,
    PadreComponent,
    HijoComponent,
    UppercasePipe,
    EmojiFyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
