1 - Propriete et event binding (plus profond)
 - les custom property binding : 
  -
 Pour ouvoir passer des element a lenfant ou au parent, il faut ajouter des decorateur. car toute les propriete ne sont pas bindable en ajoutant
 @Input() devant la propriete comme suit:
 import {Input} from '@angular/core';

 @Input() element: { type: string, name: string, content: string }

VOIR LE DOSSIER TEST et surtout le fichier app.component.ts

Pour voir se connecter a un alias il faut le dire dans le @Input() en argument et utiliser cette alias dabs le html. Cela est utile lorque on veut personnaliser le nom du truc

- Autre explication:
  on a un parent et un enfant. Pour pouvoir passer une information d'un parent a un enfant il faut utiliser le "property binding" ([nom de la property chez lenfant]="property chez le parent" dont la valeur va etre transmis a l'enfant et sera accessible via la "property chez l'enfant") dans le html du parent.
  <app-child [item]="currentItem"></app-child>
  et dans le composant enfant, lire la valeur comme suit:
  <h1>Anil {{item}}</h1>

  dans l'autre sens, il faut configurer plusieur choses:
  chez lenfant : utiliser le decorateur Output et la methode EventEmitter:
  import { Component, Output, EventEmitter } from '@angular/core';
  ...
  @Output() newItemEvent = new EventEmitter<string>();

  Ecrire une fonction qui sera appeler a l'evenement:
  addNewItem(value: string) {
  this.newItemEvent.emit(value); // Utilise la methode 'emit' de l'api de EventEmitter()
}

chez le parent, avoir une proprite ou stocker la valeur et une methode pour push la valeur transmis par l'evenement : 

   items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  
<label for="item">Add item :</label>
<input type="text" id="item" #newItem /> // #newItem est un marqueur grace auquel, on va pouvoir acceder au data de l'input comme ca valeur. on l'utilise ensuite pour donner sa valeur en argument a la fonction.
<button type="button" (click)="addNewItem(newItem.value)">Add this new item</button>


dans le html  du parent, 
on bind levenement du click avec la methode addItem(). le nom de levenement doit correspondre au nom de la propiete qui a le decorateur output:
<app-output (newItemEvent)="addItem($event)"></app-output> // qui va push les data present dans le event dans le tableau




