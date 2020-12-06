import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private subject = new BehaviorSubject<string>('');
  public content = this.subject.asObservable();

  constructor() { }

  sendData(data: string) {
    this.subject.next(data);
  }
}
