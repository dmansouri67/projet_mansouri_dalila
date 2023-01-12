import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddProduit, RemoveProduit } from '../actions/cart-actions';
import { CartStateModel } from './cart-state.model';

@State<CartStateModel>({
  name: 'panier',
  defaults: {
    produits: [],
  },
})
@Injectable()
export class CartState {
  @Selector()
  static getNbProduits(state: CartStateModel) {
    return state.produits.length;
  }

  @Action(AddProduit)
  add(
    { getState, patchState }: StateContext<CartStateModel>,
    { payload }: AddProduit
  ) {
    const state = getState();
    patchState({
      produits: [...state.produits, payload],
    });
  }

  @Action(RemoveProduit)
  delete(
    { getState, patchState }: StateContext<CartStateModel>,
    { payload }: RemoveProduit
  ) {
    const state = getState();
    patchState({
      produits: state.produits.filter((produit, index) => index !== payload),
    });
  }
}

export { AddProduit };
