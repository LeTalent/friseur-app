import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchForm: FormGroup;
  message: string;
  article: string;
  subs: Subscription;
  products: Product[] = [];
  options: string[] = ['Perücke', 'Oel', 'Haare'];
  filteredOptions: Observable<string[]>;

  constructor( private dataServ: DataService,
               private productServ: ProductService ) { }

  ngOnInit() {
    this.subs = this.productServ.getProductList()
      .subscribe(
        res => this.products = res
      );

    this.dataServ.content.subscribe(res => this.message = res );

     this.searchFormInitializer();

      this.filteredOptions = this.searchForm.get('searchTerm').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  onSearch(){
    this.article = this.searchForm.get('searchTerm').value
  }

  searchFormInitializer(){
    this.searchForm = new FormGroup({
      searchTerm: new FormControl(this.message)
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}
