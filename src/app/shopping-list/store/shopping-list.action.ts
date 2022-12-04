import { Ingredient } from 'src/app/shared/ingredient.model';
import { Action } from '@ngrx/store';


export const ADD_INGRDIENT= 'ADD_INGRDIENT';
export const ADD_INGRDIENTS= 'ADD_INGRDIENTS';

export class AddIngreient implements Action {
 readonly type = ADD_INGRDIENT;
 constructor(public payload:Ingredient){}
}

export class AddIngreients implements Action {
  readonly type = ADD_INGRDIENTS;
  constructor(public payload:Ingredient[]){}
 }


 export type ShoppingListActions = AddIngreient | AddIngreients
