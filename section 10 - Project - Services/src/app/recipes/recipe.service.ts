import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppingList.service";

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome',
      'https://www.196flavors.com/wp-content/uploads/2021/11/2.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe('A test recipe',
      'This is a test recipe',
      'https://www.painsjacquet.com/wp-content/uploads/fly-images/234521/hamburger-lard-emmental-carre-1-scaled-952x1200-c.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 2), new Ingredient('cheese',1)])
  ]

  recipeSelected = new EventEmitter<Recipe>()

  constructor(private slService: ShoppingListService){}

  getRecipes() {
    this.recipes.slice() // Permet d'obtenir une copie de ce tablea
  }

  AddIngredientToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients)
  }
}
