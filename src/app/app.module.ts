import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {DxSchedulerModule, DxTemplateModule} from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrisurListComponent } from './frisur-list/frisur-list.component';
import { FrisurDetailComponent } from './frisur-detail/frisur-detail.component';
import { FooterComponent } from './footer/footer.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { TerminComponent } from './termin/termin.component';


@NgModule({
  declarations: [
    AppComponent,
    FrisurListComponent,
    FrisurDetailComponent,
    FooterComponent,
    TerminComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    DxSchedulerModule,
    DxTemplateModule,
    // platformBrowserDynamic,
    BrowserAnimationsModule,
    MatCarouselModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
