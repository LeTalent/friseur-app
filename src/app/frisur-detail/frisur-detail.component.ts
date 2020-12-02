import { Component, OnInit, OnDestroy } from '@angular/core';
import { FrisurService } from '../services/frisur.service';
import { ActivatedRoute } from '@angular/router';
import { Frisur } from '../models/frisur.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-frisur-detail',
  templateUrl: './frisur-detail.component.html',
  styleUrls: ['./frisur-detail.component.scss']
})
export class FrisurDetailComponent implements OnInit, OnDestroy {
  frisur: Frisur;
  subs: Subscription;


  constructor(
    private service: FrisurService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.subs = this.service.getFrisur(this.route.snapshot.params['id'])
    .subscribe(
      frisurData => {
        this.frisur = {
          id: frisurData.id,
          style: frisurData.style,
          model: frisurData.model,
          preis: frisurData.preis,
          avatar: frisurData.avatar
        }
      }
    );
  }


  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}

