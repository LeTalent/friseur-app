import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DxSchedulerModule, DxTemplateModule} from 'devextreme-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrisurListComponent } from './frisur-list/frisur-list.component';
import { FrisurDetailComponent } from './frisur-detail/frisur-detail.component';
import { FooterComponent } from './footer/footer.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { TerminComponent } from './termin/termin.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    FrisurListComponent,
    FrisurDetailComponent,
    FooterComponent,
    TerminComponent,
    SearchComponent,
    ProductComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    DxSchedulerModule,
    DxTemplateModule,
    BrowserAnimationsModule,
    MatCarouselModule.forRoot(),
    ReactiveFormsModule, FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
