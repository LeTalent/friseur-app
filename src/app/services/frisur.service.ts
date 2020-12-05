import { Injectable } from '@angular/core';
import { Frisur } from '../models/frisur.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


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
      .pipe(map( (frisure: Frisur[]) => frisure.find( f => f.id === id) ));
   }

   getBraidsFirstSlide(): Observable<Frisur[]> {
    return this.http.get<Frisur[]>('./assets/braids/braids-first-slide.json');
   }
   getBraidsSecondSlide(): Observable<Frisur[]> {
    return this.http.get<Frisur[]>('./assets/braids/braids-second-slide.json');
   }
   getBraidsThirdSlide(): Observable<Frisur[]> {
    return this.http.get<Frisur[]>('./assets/braids/braids-third-slide.json');
   }
   getBraidsFourthSlide(): Observable<Frisur[]> {
    return this.http.get<Frisur[]>('./assets/braids/braids-fourth-slide.json');
   }
   getBraidsFifthSlide(): Observable<Frisur[]> {
    return this.http.get<Frisur[]>('./assets/braids/braids-fifth-slide.json');
   }
   getBraidsSixthSlide(): Observable<Frisur[]> {
    return this.http.get<Frisur[]>('./assets/braids/braids-sixth-slide.json');
   }


   getConrowsFirstSlide(): Observable<Frisur[]> {
    return this.http.get<Frisur[]>('./assets/conrows/conrows-first-slide.json');
   }
   getConrowsSecondSlide(): Observable<Frisur[]> {
    return this.http.get<Frisur[]>('./assets/conrows/conrows-second-slide.json');
   }
   getConrowsThirdSlide(): Observable<Frisur[]> {
    return this.http.get<Frisur[]>('./assets/conrows/conrows-third-slide.json');
   }
   getConrowsFourthSlide(): Observable<Frisur[]> {
    return this.http.get<Frisur[]>('./assets/conrows/conrows-fourth-slide.json');
   }

   getExtantionsFirstSlide(): Observable<Frisur[]> {
    return this.http.get<Frisur[]>('./assets/extantions/extantions-first-slide.json');
   }
   getExtantionsSecondSlide(): Observable<Frisur[]> {
    return this.http.get<Frisur[]>('./assets/extantions/extantions-second-slide.json');
   }
}
