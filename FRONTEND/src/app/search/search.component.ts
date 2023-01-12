
import { Component, Injectable, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, of } from 'rxjs';

import {
  map,
  distinctUntilChanged,
  debounceTime,
  tap,
  switchMap,
  catchError,
} from 'rxjs/operators';
import { Catalogue } from '../interface/catalogue';
import { ProduitService } from '../service/produit.service';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent{
  catalogue : Catalogue[];
  model: Observable<any>;
  search: string ='';
  @ViewChild('input', { static: true }) input: ElementRef;

  constructor(private _service: ProduitService) {}

  getSearchedProduct(): void {
    this._service.getCatalogue().subscribe((data) => {
      this.catalogue = data.filter((catalogue: { race: String }) => {
        let predicate = true;
        if (this.search != '') {
          predicate = catalogue.race
            .toLowerCase()
            .includes(this.search.toLowerCase());
        }
        return predicate;
      });
    });
  }

  // ngAfterViewInit() {
  //   this.searchField$ = fromEvent(this.input.nativeElement, `keyup`);
  //   this.model = this.searchField$.pipe(
  //     map((event) => event.target.value),
  //     debounceTime(300),
  //     distinctUntilChanged(),

  //     switchMap((term) =>
  //       this._service.search(term).pipe(
  //         catchError(() => {
  //           return of([]);
  //         })
  //       )
  //     )
  //   );
  // }
}