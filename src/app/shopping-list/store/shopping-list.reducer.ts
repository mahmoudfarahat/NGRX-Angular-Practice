import { Ingredient } from "src/app/shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.action";
export interface State {
  ingredients: Ingredient[];
  editedIngredient : Ingredient;
  editedIngredientIndex: number;
}

export interface AppState {
  shoppingList:State;
}
const initialState : State = {
  ingredients: [new Ingredient("Apples", 5), new Ingredient("Tomatoes", 10)],
  editedIngredient : null,
  editedIngredientIndex : -1
};

export function ShoppingListReducer(
  state: State = initialState,
  action: ShoppingListActions.ShoppingListActions
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGRDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case ShoppingListActions.ADD_INGRDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };
    case ShoppingListActions.UPDATE_INGREINTS:
      const ingredient = state.ingredients[state.editedIngredientIndex]
      const updatedIngredient =  {
        ...ingredient,
        ...action.payload
      }
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[state.editedIngredientIndex] = updatedIngredient
      return {
        ...state,
        ingredients : updatedIngredients,
        editedIngredientIndex: -1,
        editedIngredient:null
      }
    case ShoppingListActions.DELETE_INGREINTS:
      return {
        ...state,
        ingredients : state.ingredients.filter((ig , igIndex)=> {
          return igIndex != state.editedIngredientIndex
        }),
        editedIngredientIndex: -1,
        editedIngredient:null
      }

    case ShoppingListActions.START_EDIT:
      return {
        ...state,
  editedIngredientIndex : action.payload,
  editedIngredient: {...state.ingredients[action.payload]}
      }
    case ShoppingListActions.STOP_EDIT:
        return {
          ...state,
          editedIngredient : null,
          editedIngredientIndex : -1,

        }
    default:
      return state;
  }
}
