import { Component, Output, EventEmitter } from '@angular/core';

// import du model
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  // Recipe fais ref au model et on dis que ca doit etre un array
recipes: Recipe[]

constructor(private recipesService: RecipeService){}

// onRecipeSelected(recipe: Recipe){
// this.recipeWasSelected.emit(recipe);
// }

ngOnInit(){
  this.recipes = this.recipesService.recipes
  console.log('from slice')
}
}
