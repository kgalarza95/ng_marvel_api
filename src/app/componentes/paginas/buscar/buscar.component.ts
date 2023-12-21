import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiMarvelService } from 'src/app/servicios/api-marvel.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  query: string = '';
  searchResults: any[] = [];


  constructor(private marvelService: ApiMarvelService,
    private router: Router) { }


  buscarHeroesPorNombre(): void {
    if (this.query.trim() !== '') {
      this.marvelService.searchSuperheroes(this.query).subscribe(
        (response) => {
          this.searchResults = response.data.results;
        },
        (error) => {
          console.error('Error fetching search results:', error);
        }
      );
    }
  }

  mostrarDetalleHeroe(heroId: number) {
    console.log("heroId:   " + heroId);
    this.router.navigate(['/heroes', heroId]);
  }
}
