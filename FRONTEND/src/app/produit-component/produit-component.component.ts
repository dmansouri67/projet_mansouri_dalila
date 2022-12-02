import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { of, from, interval, filter } from 'rxjs';
import { map, tap, reduce, take } from 'rxjs/operators';
import { ProduitService } from '../service/produit.service';
import { Catalogue } from '../interface/catalogue';

@Component({
  selector: 'app-produit-component',
  templateUrl: './produit-component.component.html',
  styleUrls: ['./produit-component.component.css']
})
export class ProduitComponentComponent implements OnInit {

  constructor(public service : ProduitService) { }
  catalogue$? : Observable<Catalogue[]>;

  ngOnInit(): void {
    this.catalogue$ = this.service.getCatalogue();
  }

  filterByPrice(price : number){
    this.catalogue$ = this.service.getCatalogue().pipe(
      map(produits => produits.filter(produit => produit.prix < price))
    );
  }

  allProducts(){
    this.catalogue$ = this.service.getCatalogue();
  }

}
