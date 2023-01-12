import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { of, from, interval, filter } from 'rxjs';
import { map, tap, reduce, take } from 'rxjs/operators';
import { ProduitService } from 'src/app/service/produit.service';
import { Catalogue } from 'src/app/interface/catalogue';
import { AddProduit } from 'src/app/shared/state/cart-state';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';


@Component({
  selector: 'app-produit-component',
  templateUrl: './produit-component.component.html',
  styleUrls: ['./produit-component.component.css']
})
export class ProduitComponentComponent implements OnInit {

  constructor(private service : ProduitService, private store : Store, private route : Router) { }
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

  addProductToCart(product : Catalogue)
  {
    this.store.dispatch(new AddProduit(product));
  }

  detailsProduct(product : Catalogue){
    this.route.navigate(['/details', product.id]);
    
  }


}
