import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

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

  ngOnInit(): void {
  }

}
