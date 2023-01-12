import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CartState } from 'src/app/shared/state/cart-state';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Select(CartState.getNbProduits) productCount$: Observable<number>;

  auth : AuthService ;
  constructor(private router: Router, private authService : AuthService) { }


  goToHome() {
    this.router.navigate(['home']);
  }

  goToProduct() {
    this.router.navigate(['produit']);
  }

  goToFormAccount() {
    this.router.navigate(['form']);
  }

  searchGitUser()
  {
    this.router.navigate(['search']);
  }

  goToCart(){
    this.router.navigate(['cart']);
  }

  signOut()
  {
    this.auth.logout();
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
    this.auth = this.authService;
  }

}
