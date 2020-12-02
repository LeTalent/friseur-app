import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrisurListComponent } from './frisur-list/frisur-list.component';
import { FrisurDetailComponent } from './frisur-detail/frisur-detail.component';
import { TerminComponent } from './termin/termin.component';

const routes: Routes = [
  { path: '', redirectTo: 'frisur-list', pathMatch: 'full' },
  { path: 'frisur-list', component: FrisurListComponent },
  { path: 'frisur-details/:id', component: FrisurDetailComponent },
  { path: 'termin', component: TerminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
