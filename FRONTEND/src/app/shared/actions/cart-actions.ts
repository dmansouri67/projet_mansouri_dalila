import { Catalogue } from 'src/app/interface/catalogue';

export class AddProduit {
  static readonly type = '[Panier] AddProduit';
  constructor(public payload: Catalogue) {}
}

export class RemoveProduit {
  static readonly type = '[Panier] RemoveProduit';

  constructor(public payload: Number) {}
}