import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecapComponentComponent } from './recap-component/recap-component.component';
import { ProduitComponentComponent } from './produit-component/produit-component.component';
import { FormAccountComponentComponent } from './form-account-component/form-account-component.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './core/guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { DetailsProductComponent } from './details-product/details-product/details-product.component';


const routes: Routes = [
  { path: '' , redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'produit', component: ProduitComponentComponent, canActivate: [AuthGuard] },
  { path: 'form', component: FormAccountComponentComponent },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'details/:id', component: DetailsProductComponent, canActivate: [AuthGuard]}

  // On sécurise toutes les routes avec le guard.
  // Si l'utilisateur n'est pas connecté, il sera redirigé vers la page de login.
  // Le rôle du guard est de piloter le rooting. C'est le service qui va décider si l'utilisateur peut accéder à la page ou non.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
