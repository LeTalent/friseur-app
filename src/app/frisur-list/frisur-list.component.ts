import { Component, OnInit, OnDestroy } from '@angular/core';
import { Frisur } from '../models/frisur.model';
import { FrisurService } from '../services/frisur.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-frisur-list',
  templateUrl: './frisur-list.component.html',
  styleUrls: ['./frisur-list.component.scss']
})
export class FrisurListComponent implements OnInit, OnDestroy {

  braidsSlideOne$: Observable<Frisur[]>;
  braidsSlideTwo$: Observable<Frisur[]>;
  braidsSlideThree$: Observable<Frisur[]>;
  braidsSlideFour$: Observable<Frisur[]>;
  braidsSlideFive$: Observable<Frisur[]>;
  braidsSlideSix$: Observable<Frisur[]>;

  conrowsSlideOne$: Observable<Frisur[]>;
  conrowsSlideTwo$: Observable<Frisur[]>;
  conrowsSlideThree$: Observable<Frisur[]>;
  conrowsSlideFour$: Observable<Frisur[]>;

  dreadsSlideOne$: Observable<Frisur[]>;
  dreadsSlideTwo$: Observable<Frisur[]>;
  dreadsSlideThree$: Observable<Frisur[]>;

  extantionsSlideOne$: Observable<Frisur[]>;
  extantionsSlideTwo$: Observable<Frisur[]>;

  frisure: Frisur[] = [];
  subs: Subscription;
  slides = [
  { 'image': './assets/images/salon-bild.jpg' },
  { 'image': './assets/images/salon-bild2.jpg' },
  { 'image': './assets/images/salon-bild3.jpg' },
  ];

  constructor(private frisurServ: FrisurService) { }

  ngOnInit() {
    this.subs = this.frisurServ.getFrisurList()
      .subscribe(
        res => this.frisure = res
      );

      this.braidsSlideOne$ = this.frisurServ.getBraidsFirstSlide();
      this.braidsSlideTwo$ = this.frisurServ.getBraidsSecondSlide();
      this.braidsSlideThree$ = this.frisurServ.getBraidsThirdSlide();
      this.braidsSlideFour$ = this.frisurServ.getBraidsFourthSlide();
      this.braidsSlideFive$ = this.frisurServ.getBraidsFifthSlide();
      this.braidsSlideSix$ = this.frisurServ.getBraidsSixthSlide();

      this.conrowsSlideOne$ = this.frisurServ.getConrowsFirstSlide();
      this.conrowsSlideTwo$ = this.frisurServ.getConrowsSecondSlide();
      this.conrowsSlideThree$ = this.frisurServ.getConrowsThirdSlide();
      this.conrowsSlideFour$ = this.frisurServ.getConrowsFourthSlide();

      this.dreadsSlideOne$ = this.frisurServ.getDreadsFirstSlide();
      this.dreadsSlideTwo$ = this.frisurServ.getDreadsSecondSlide();
      this.dreadsSlideThree$ = this.frisurServ.getDreadsThirdSlide();

      this.extantionsSlideOne$ = this.frisurServ.getExtantionsFirstSlide();
      this.extantionsSlideTwo$ = this.frisurServ.getExtantionsSecondSlide();
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}
