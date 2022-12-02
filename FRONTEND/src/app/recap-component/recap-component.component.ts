import { Component, OnInit,Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recap-component',
  templateUrl: './recap-component.component.html',
  styleUrls: ['./recap-component.component.css']
})
export class RecapComponentComponent implements OnInit {

  constructor() { }
  @Input() prenom : String = "";
  @Input() nom : String = "";
  @Input() adresse : String = "";
  @Input() codePostal: String =""
  @Input() ville : String= ""
  @Input() numTel : String = ""
  @Input() email :  String = ""

  @Output() change : EventEmitter<String> = new EventEmitter<String>();

  ngOnInit(): void {
  }

  clic()
  {
    this.change.emit('Prenom : ' + this.prenom + ' Nom : ' + this.nom + ' Adresse : ' + this.adresse
                     + ' Code postal : ' + this.codePostal + ' Ville : ' + this.ville + ' N° Tel : ' + this.numTel
                     + ' Email : ' + this.email );
  }
  
}
