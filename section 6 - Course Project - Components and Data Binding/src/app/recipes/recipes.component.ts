import { AfterContentChecked, Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements AfterContentChecked{

  selectedRecipe: Recipe;

  ngAfterContentChecked(): void {
    console.log(typeof this.selectedRecipe)
  }
}
