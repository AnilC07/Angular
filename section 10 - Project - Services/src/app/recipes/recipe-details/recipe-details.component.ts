import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
@Input() recipe:Recipe;

constructor(private recipeService:RecipeService) {}

onAddToShoppingList(){
this.recipeService.AddIngredientToShoppingList(this.recipe.ingredients)
console.log('ok')
}

}


