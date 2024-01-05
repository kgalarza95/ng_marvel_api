import { Component } from '@angular/core';
import { ApiMarvelService } from 'src/app/servicios/api-marvel.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {

  favoriteHeroes: any[] = [];


  constructor(private marvelService: ApiMarvelService) { }

  ngOnInit(): void {
    this.getHerosFavoritosCarrusel();
  }
  getHerosFavoritosCarrusel() {
    const favoriteHeroIds = [1009610, 1009368, 1009351];

    this.marvelService.getFavoriteHeroesDetails(favoriteHeroIds).subscribe((responses) => {
      this.favoriteHeroes = responses.map((response) => response.data.results[0]);
    });
  }


  getHeroImage(hero: any): string {
    // Modifica este método según la estructura de tu respuesta de la API de Marvel
    return `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
  }

}
