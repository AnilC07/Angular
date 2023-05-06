import { Component, AfterContentChecked } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements AfterContentChecked {
ingredients: Ingredient[]=[
  new Ingredient('Apple',5),
  new Ingredient('Tomato',10)
]



constructor(){

}

onIngredientAdded(ingredient:Ingredient){
console.log(ingredient)
this.ingredients.push(ingredient)

}

ngAfterContentChecked(): void {
  console.log(this.ingredients)
}
}
