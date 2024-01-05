import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiMarvelService } from 'src/app/servicios/api-marvel.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent {
  textoBuscar: string = 'spider';
  searchResults: any[] = [];

  constructor(private marvelService: ApiMarvelService, private router: Router) {
    this.buscarHeroesPorNombre();
  }

  /* 
    buscarHeroesPorNombre(): void {
      if (this.textoBuscar.trim() !== '') {
        this.marvelService.searchSuperheroes(this.textoBuscar).subscribe(
          (response) => {
            this.searchResults = response.data.results;
          },
          (error) => {
            console.error('Error fetching search results:', error);
          }
        );
      }
    } */

  buscarHeroesPorNombre(): void {
    if (this.textoBuscar.trim() !== '') {
      this.marvelService.searchSuperheroes(this.textoBuscar).subscribe(
        (response) => {
          this.searchResults = response.data.results;
          if (this.searchResults.length === 0) {
            setTimeout(() => {
              this.searchResults = [];
            }, 5000);
          }
        },
        (error) => {
          console.error('Error fetching search results:', error);
        }
      );
    }
  }

  mostrarDetalleHeroe(heroId: number) {
    console.log('heroId:   ' + heroId);
    this.router.navigate(['/heroes', heroId]);
  }

  cerrarAlerta(): void {
    this.searchResults = [];
  }
}
