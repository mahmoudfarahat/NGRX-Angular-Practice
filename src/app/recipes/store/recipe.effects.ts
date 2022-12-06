import { HttpClient } from '@angular/common/http';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Actions, Effect, ofType } from "@ngrx/effects";
import * as fromApp from '../../store/app.reducer'
import * as RecipesActions from './recipe.action'
import { Recipe } from '../recipe.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class RecipeEffects {
  @Effect()
  fetchRecipes = this.action$.pipe(
    ofType(RecipesActions.FETCH_RECIPES),
    switchMap(() => {
      return this.http
      .get<Recipe[]>(
        'https://recipes-714bc-default-rtdb.firebaseio.com/recipes.json'
      )
    }), map(recipes => {
      return recipes.map(recipe => {
        return {
          ...recipe,
          ingredients: recipe.ingredients ? recipe.ingredients : []
        };
      });
    }), map(recipes => {
      return new RecipesActions.SetRecipes(recipes)
    })
  )
  @Effect({dispatch:false})
  storeRecipes = this.action$.pipe(
    ofType(RecipesActions.STORE_RECIPES),
    withLatestFrom(this.store.select('recipes')),
    switchMap(([actionData,recipesSate])=>{
      return this.http
      .put(
        'https://recipes-714bc-default-rtdb.firebaseio.com/recipes.json',
        recipesSate.recipes
      )
    }))
  constructor(private action$:Actions ,
     private http:HttpClient,
     private store:Store<fromApp.AppState>){}
}
