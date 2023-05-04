// Pas besoin de décorateur

export class Recipe {
  // En public pour qu'il soit utilisable partour=t
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name
    this.description = description
    this.imagePath = imagePath
  }
}
