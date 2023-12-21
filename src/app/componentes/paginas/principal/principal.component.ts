import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiMarvelService } from 'src/app/servicios/api-marvel.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  superheroes: any[] = [];

  constructor(private marvelService: ApiMarvelService,
    private router: Router) { }

  ngOnInit(): void {
    this.getSuperheroes();
  }

  getSuperheroes(): void {
    this.marvelService.getSuperheroes().subscribe((response) => {
      this.superheroes = response.data.results;
    });
  }

  mostrarDetalleHeroe(heroId: number) {
    console.log("heroId:   " + heroId);
    this.router.navigate(['/heroes', heroId]);
  }
}
