import { Injectable } from '@angular/core';
import { Frisur } from './frisur.model';
import { HttpClient } from "@angular/common/http";
import { Observable, Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FrisurService {
  private apiUrl = './assets/frisur.json'
  frisure: Frisur[];
  frisur: Frisur;

  constructor(private http: HttpClient) { }

  getFrisurList(): Observable<Frisur[]> {
    return this.http.get<Frisur[]>(this.apiUrl);
  }

   getFrisur(id: string){
      return this.getFrisurList()
      .pipe(
        map((frisure: Frisur[]) => frisure.find( f => f.id === id) ));
   }

}
