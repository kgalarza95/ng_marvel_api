import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMarvelService } from 'src/app/servicios/api-marvel.service';


@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalle-heroe.component.html',
  styleUrls: ['./detalle-heroe.component.css']
})
export class DetalleHeroeComponent implements OnInit {
  heroId: number | undefined | null;
  heroDetails: any; 


  constructor(private marvelService: ApiMarvelService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const heroIdParam = params.get('id');
      this.heroId = heroIdParam !== null ? +heroIdParam : null;
      this.getHeroDetails();
    });
  }

  getHeroDetails() {
    if (this.heroId) {
      this.marvelService.getHeroDetails(this.heroId).subscribe((response) => {
        this.heroDetails = response.data.results[0];
      });
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
