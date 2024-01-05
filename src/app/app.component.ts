import { Component, OnInit } from '@angular/core';
import { ApiMarvelService } from './servicios/api-marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'marvel-init';

  constructor(private marvelService: ApiMarvelService) { }

  


}
