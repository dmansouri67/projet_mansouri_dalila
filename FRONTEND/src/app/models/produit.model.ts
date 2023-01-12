export class Produit {

    ID_Produit: number = -1;
    Description: string = "";
    Image: string = "";
    Type: string = "";
    Etat: string = "";
    Intitule: string = "";
    Prix: number = 0;
    
    constructor(
        public Reference: string,
        public Nom: string,
        Prix: number
    ) { }
}
