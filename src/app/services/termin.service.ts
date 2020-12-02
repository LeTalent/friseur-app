import { Injectable } from '@angular/core';
import { Termin } from '../models/termin.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerminService {
  private apiUrl = './assets/termin.json'
  termin: Termin[]=[];

  constructor(private http: HttpClient) { }
  getTerminList(): Observable<Termin[]> {
    return this.http.get<Termin[]>( this.apiUrl )
  }
}
