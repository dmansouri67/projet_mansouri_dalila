import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  address : string = "";
  postalCode: string ="";
  city : string= "";
  phoneNumber : string = "";
  email :  string = "";
  recap : String = "";
  country : string = "";
  civility : string = "";

  showrecap : boolean = false;

  ngOnInit(): void {
  }
  clicChange (val : String) {
    this.recap = val;
  }
  
  transformName(){
      this.firstname = this.titlecasePipe.transform(this.firstname);
      this.lastname = this.titlecasePipe.transform(this.lastname);
  }
  
  onSubmit() : void{
    console.log("Avant : " + this.firstname);
    this.showrecap = true;
    console.log("Apres : " + this.firstname);
  }

}
