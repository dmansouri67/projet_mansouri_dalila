import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Catalogue } from 'src/app/interface/catalogue';
import { Observable, Observer } from 'rxjs';
import { ProduitService } from 'src/app/service/produit.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { AddProduit, RemoveProduit } from 'src/app/shared/actions/cart-actions';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  constructor(private service : ProduitService, private route : Router,private store : Store, private activateRoute : ActivatedRoute) { }
  catalogue$? : Observable<Catalogue>;
  id$: number;
  product : Catalogue |undefined;
  sub : any;

  ngOnInit(): void {
    // this.catalogue$ = this.service.getCatalogue();
    this.id$ = this.getParamsURL(); ;
    this.service.getCatalogue().subscribe(
      catalogue => this.product = catalogue.find(p=>p.id == this.id$)
    )      
  }

  detailsProduct(product : Catalogue){
    this.route.navigate(['/details', product.id]);
  }

  // get id from url
  getParamsURL() : number{
    this.sub = this.activateRoute.params.subscribe(params => {
      this.id$ = +params['id'];
    });
    return this.id$;
  }

  addProductToCart(product : Catalogue)
  {
    this.store.dispatch(new AddProduit(product));
  }

  removeProduitFromPanier(productIndex: Number) {
    this.store.dispatch(new RemoveProduit(productIndex));
  }

  myCart(){
    this.route.navigate(['/cart']);
  }

}
