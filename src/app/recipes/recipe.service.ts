import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    constructor(private shoppingListService: ShoppingListService){}

    /* private recipes : Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
        ),

        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'https://lh6.googleusercontent.com/proxy/SpZb_8ODOaZSM1ds0FPEiYMFBQbBBAiIOq9JinO0UEJ-KMs1xXstQFuOSekRwoAfKgkNWE0sEdBQEBktVYB3-7EOWNlwDqkOpg2XBAYU92n_PMgmv0yfu8Xo0VEv4pcSkHmUTbEc',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Buns', 2)
            ]
        )
    ]; */
    private recipes: Recipe[] = [];

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addManyIngredients(ingredients);
    }

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
}