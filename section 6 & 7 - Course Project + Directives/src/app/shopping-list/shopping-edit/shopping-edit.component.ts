import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  // @Output() newIngredientAdded = new  EventEmitter<{name:string, amount:number}>();
  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  onIngredientAdded() {
    const ingName =this.nameInputRef.nativeElement.value
    const ingAmount =this.amountInputRef.nativeElement.value
    const newIngredient = new Ingredient(ingName,ingAmount)
    this.ingredientAdded.emit( newIngredient )
  }
}
