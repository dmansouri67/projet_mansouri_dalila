import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RemoveProduit } from  'src/app/shared/actions/cart-actions';
import { Produit } from 'src/app/models/produit.model';
import { Catalogue } from '../interface/catalogue';
import { CartState } from '../shared/state/cart-state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  @Select(CartState.getNbProduits) productCount$: Observable<number>;

  products$: Observable<Catalogue[]>;
  constructor(private store: Store, private route : Router) {
    this.products$ = this.store.select((state) => state.panier.produits);
  }

  ngOnInit(): void {
  }
  removeProduitFromPanier(productIndex: Number) {
    this.store.dispatch(new RemoveProduit(productIndex));
  }

  detailsProduct(product : Catalogue){
    this.route.navigate(['/details', product.id]);
  }

  catalog(){
    this.route.navigate(['/produit']);
  }

}
