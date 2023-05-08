// Pas besoin de décorateur

import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  // En public pour qu'il soit utilisable partout
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[]


  constructor(name: string, description: string, imagePath: string, ingredients:Ingredient[]) {
    this.name = name
    this.description = description
    this.imagePath = imagePath
    this.ingredients = ingredients

  }
}
