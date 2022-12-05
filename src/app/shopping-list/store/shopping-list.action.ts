import { Ingredient } from 'src/app/shared/ingredient.model';
import { Action } from '@ngrx/store';


export const ADD_INGRDIENT= 'ADD_INGRDIENT';
export const ADD_INGRDIENTS= 'ADD_INGRDIENTS';
export const UPDATE_INGREINTS= 'UPDATE_INGREINTS';
export const DELETE_INGREINTS= 'DELETE_INGREINTS';
export const START_EDIT ='START_EDIT'
export const STOP_EDIT ='STOP_EDIT'


export class AddIngreient implements Action {
 readonly type = ADD_INGRDIENT;
 constructor(public payload:Ingredient){}
}

export class AddIngreients implements Action {
  readonly type = ADD_INGRDIENTS;
  constructor(public payload:Ingredient[]){}
 }
 export class UpdateIngredient implements Action {
  readonly type = UPDATE_INGREINTS;
  constructor(public payload:Ingredient ){}
 }
 export class DeleteIngreients implements Action {
  readonly type = DELETE_INGREINTS;
 
 }

 export class StartEdit implements Action {
  readonly type = START_EDIT;
  constructor(public payload:number){}
 }

 export class StopEdit implements Action {
  readonly type = STOP_EDIT;
  }



 export type ShoppingListActions = AddIngreient | AddIngreients | UpdateIngredient | DeleteIngreients | StopEdit | StartEdit
