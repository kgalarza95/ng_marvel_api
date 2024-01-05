import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './componentes/paginas/principal/principal.component';
import { BuscarComponent } from './componentes/paginas/buscar/buscar.component';
import { PipesComponent } from './componentes/paginas/pipes/pipes.component';
import { DetalleHeroeComponent } from './componentes/paginas/subpaginas/detalle-heroe/detalle-heroe.component';
import { PresentacionComponent } from './componentes/paginas/presentacion/presentacion.component';
import { PadreComponent } from './componentes/paginas/padre/padre.component';




const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'presentacion', component: PresentacionComponent },
  { path: 'heroes/:id', component: DetalleHeroeComponent },
  { path: 'padre', component: PadreComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
