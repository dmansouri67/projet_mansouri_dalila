import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadrestComponentComponent } from './common/headrest-component/headrest-component.component';
import { FooterComponentComponent } from './common/footer-component/footer-component.component';
import { FormAccountComponentComponent } from './form-account-component/form-account-component.component';
import { RecapComponentComponent } from './recap-component/recap-component.component';
import { ControlDirectiveDirective } from './directive/control-directive.directive';
import { PipeFormatPipe } from './pipe/pipe-format.pipe';
import { ProduitComponentComponent } from 'src/app/produit-component/produit-component.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './service/search.service';
import { CartComponent } from './cart/cart.component';
import { CartState } from './shared/state/cart-state';
import { DetailsProductComponent } from './details-product/details-product/details-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadrestComponentComponent,
    FooterComponentComponent,
    FormAccountComponentComponent,
    RecapComponentComponent,
    ControlDirectiveDirective,
    PipeFormatPipe,
    ProduitComponentComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    SearchComponent,
    CartComponent,
    DetailsProductComponent
  ],
  imports: [
    NgxsModule.forRoot([CartState]),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
