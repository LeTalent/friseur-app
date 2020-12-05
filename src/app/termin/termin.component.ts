import { Component, OnInit, enableProdMode } from '@angular/core';
import { Termin } from '../models/termin.model';
import { TerminService } from '../services/termin.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-termin',
  templateUrl: './termin.component.html',
  styleUrls: ['./termin.component.scss']
})
export class TerminComponent implements OnInit {
  appointmentsData: Termin[] = [];
  currentDate: Date = new Date();

  constructor(private terminServ: TerminService) { }

  ngOnInit() {
    this.terminServ.getTerminList()
      .subscribe(x => this.appointmentsData = x);
  }

  onAppointmentAdding (e: Termin) {
    console.log(e);
    this.appointmentsData.push(e);
}

}
