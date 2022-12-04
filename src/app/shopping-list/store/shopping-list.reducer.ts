

import { Ingredient } from 'src/app/shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.action';

const initialState= {
    ingredients:  [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]
}



 export function ShoppingListReducer(
  state = initialState,
   action : ShoppingListActions.ShoppingListActions)
 {
  switch(action.type){
    case ShoppingListActions.ADD_INGRDIENT:
      alert("testing")
       return {
        ...state,
        ingredients: [...state.ingredients , action.payload]
       }
    case ShoppingListActions.ADD_INGRDIENTS:
      alert("testing")
       return {
        ...state,
        ingredients : [...state.ingredients , ...action.payload]
       }

       default:
        return state
  }
 }
