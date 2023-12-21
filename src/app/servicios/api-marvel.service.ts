import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiMarvelService {

  private DOMINIO = 'http://gateway.marvel.com';
  private baseUrl = 'https://gateway.marvel.com/v1/public';
  private publicKey = '70729b645fde56ade7cc4b882d7ce738';
  private privateKey = 'd24fde362456eb034f11ec89cb43a4580a0f357b';
  private hash = '176c3673bd3ed6cfdecefe24aa2ff74e';



  constructor(private http: HttpClient) { }

  getSuperheroes(): Observable<any> {
    return this.getCharacters();
  }

  getCharacters(): Observable<any> {
    //http://gateway.marvel.com/v1/public/characters?ts=1&apikey=70729b645fde56ade7cc4b882d7ce738&hash=176c3673bd3ed6cfdecefe24aa2ff74e
    const uri = "characters";
    const url = `${this.baseUrl}/${uri}?apikey=${this.publicKey}&hash=${this.hash}`;
    return this.http.get(url);
  }

  searchSuperheroes(query: string): Observable<any> {
    //?nameStartsWith=iron&limit=100&apikey=70729b645fde56ade7cc4b882d7ce738
    const uri = "characters";
    const url = `${this.baseUrl}/${uri}?nameStartsWith=${query}&limit=100&apikey=${this.publicKey}&hash=${this.hash}`;

    return this.http.get(url);
  }


  getHeroDetails(heroId: number): Observable<any> {
    //const url = `https://gateway.marvel.com/v1/public/characters/${heroId}?apikey=${this.apiKey}`;
    //http://gateway.marvel.com/v1/public/characters/1011379?ts=1&apikey=70729b645fde56ade7cc4b882d7ce738&hash=176c3673bd3ed6cfdecefe24aa2ff74e

    const uri = `characters/${heroId}`;
    const url = `${this.baseUrl}/${uri}?apikey=${this.publicKey}&hash=${this.hash}`;
    return this.http.get(url).pipe(
      map((response: any) => response),
      catchError((error) => {
        console.error('Error buscando detalle de:', error);
        return of(null);
      })
    );
  }

}
