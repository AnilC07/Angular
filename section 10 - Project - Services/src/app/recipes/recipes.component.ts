import { AfterContentChecked, Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { ShoppingListService } from '../shopping-list/shoppingList.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements AfterContentChecked{

  selectedRecipe: Recipe;

constructor(private recipeService:RecipeService, slService:ShoppingListService){}

ngOnInit(){
  this.recipeService.recipeSelected.subscribe((recipe:Recipe) =>{
    this.selectedRecipe = recipe
  })
}



  ngAfterContentChecked(): void {
    console.log(typeof this.selectedRecipe)
  }
}
