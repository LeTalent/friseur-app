import { Component, OnInit, OnDestroy } from '@angular/core';
import { FrisurService } from '../frisur.service';
import { ActivatedRoute } from '@angular/router';
import { Frisur } from '../frisur.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-frisur-detail',
  templateUrl: './frisur-detail.component.html',
  styleUrls: ['./frisur-detail.component.scss']
})
export class FrisurDetailComponent implements OnInit, OnDestroy {
  frisur: any;
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
    // const param = this.route.snapshot.paramMap.get('id');
    // if (param) {
    //   // const id = +param;
    //   this.getSingleFrisur(param);
    // }
  }

  // getSingleFrisur(id: string) {
  //   this.subs = this.service.getFrisur(id).subscribe(
  //     frisurData =>
  //     this.frisur = {
  //       id: frisurData.id,
  //       style: frisurData.style,
  //       model: frisurData.model,
  //       preis: frisurData.preis,
  //       avatar: frisurData.avatar
  //     }
  //     );
  // }


  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}

