import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Frisur } from '../models/frisur.model';
import { FrisurService } from '../services/frisur.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-frisur-list',
  templateUrl: './frisur-list.component.html',
  styleUrls: ['./frisur-list.component.scss']
})
export class FrisurListComponent implements OnInit, OnDestroy{

  subs: Subscription;
  frisure: Frisur[] = [];
  slides = [{'image': '../../assets/images/salon-bild.jpeg'},
            {'image': '../../assets/images/salon-bild2.jpeg'},
            {'image': '../../assets/images/salon-bild3.jpeg'},
            {'image': '../../assets/images/salon-bild.jpeg'}
          ];

  constructor( private frisurServ: FrisurService ) { }

  ngOnInit() {
    this.subs = this.frisurServ.getFrisurList()
    .subscribe(
      res => this.frisure = res
      );
  }

 ngOnDestroy(){
   this.subs.unsubscribe();
 }
}
