import { Component, Output, EventEmitter } from '@angular/core';

// import du model
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  // Recipe fais ref au model et on dis que ca doit etre un array
recipes: Recipe[]=[
  new Recipe('A test recipe', 'This is a test recipe', 'https://assets.afcdn.com/recipe/20190704/94669_w2000h1333c1cx2250cy1500cxb4500cyb3000.webp'),
  new Recipe('A test recipe', 'This is a test recipe', 'https://www.painsjacquet.com/wp-content/uploads/fly-images/234521/hamburger-lard-emmental-carre-1-scaled-952x1200-c.jpg')
]

@Output() recipeWasSelected = new EventEmitter<Recipe>();

onRecipeSelected(recipe: Recipe){
this.recipeWasSelected.emit(recipe);  
}
}
