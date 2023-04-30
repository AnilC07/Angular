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
  on a un parent et un enfant. Pour pouvoir passer une information d'un parent a un enfant il faut utiliser le "property binding" ([property chez lenfant]="property chez le parent dont la valeur va etre transmis a l'enfant et sera accessible via la "property chez l'enfant") dans le html du parent.
  <app-child [item]="currentItem"></app-child>
  et dans le composant enfant, lire la valeur comme suit:
  <h1>Anil {{item}}</h1>
 