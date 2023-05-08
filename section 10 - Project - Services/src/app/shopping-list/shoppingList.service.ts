import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
// Probleme ici : on peut ajouter un nouvel ingredient mais le tableau qu'on update est une copie est n'est ppas celui qu'on affiche.
// donc pour remedier a ca, on propose une solution avec un emmeteur qui indique que un element a ete ajouter
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>()
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)
  ]

  getIngredientsList() {
    return this.ingredients.slice() // permet de retourner une copie du tableau
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addIngredients(ingredients:Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}
