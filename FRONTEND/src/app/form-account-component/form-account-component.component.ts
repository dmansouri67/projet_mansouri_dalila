import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-form-account-component',
  templateUrl: './form-account-component.component.html',
  styleUrls: ['./form-account-component.component.css']
})
export class FormAccountComponentComponent implements OnInit {

  constructor() { }
  titlecasePipe:TitleCasePipe
  firstname : string = "";
  lastname : string = "";
  address : String = "";
  postalCode: String ="";
  city : String= "";
  phoneNumber : String = "";
  email :  String = "";
  recap : String = "";

  ngOnInit(): void {
  }
  clicChange (val : String) {
    this.recap = val;
  }
  
  transformName(){
      this.firstname = this.titlecasePipe.transform(this.firstname);
      this.lastname = this.titlecasePipe.transform(this.lastname);
  }
}
