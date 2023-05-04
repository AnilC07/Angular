import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  // on fait la boucle for sur le composant. Etant donné que le recipe est sur le model Recipe, chaque iteration recoit une instance de ce Recipe. recipe doit donc etre du type Recipe pour etre compris. Ne pas oublier le décorateur pour recevoir les données de l'exterieur.
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>(); // void car elle ne contient pas d'information

  onSelected() {
    this.recipeSelected.emit();
  }
}
