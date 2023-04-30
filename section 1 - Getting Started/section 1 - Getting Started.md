1 - Créée une app angular
- Lancer la commande suivante pour installer le cli (en global): npm install -g @angular/cli
- Créée l'app avec la commande suivante : ng new getting-started
- Lancer la commande suivante pour demarrer le serveur : ng serve

2 - Hierarchisation des fichiers
- Chaque composant à les fichiers suivants :
  - app.component.html => Fichier qui contient le HTML rendu (equivalent du JSX pour react)
  - app.component.css => Fichier style du composant
  - app.component.ts => Fichier TypeScript où toutes la logique est présente

3 - Comment lier le composant au HTML
- Analyse du fichier .ts:

  import { Component } from '@angular/core';

@Component({
  selector: 'app-root', => Indiique que l'on souhaite que le composant soit rendu dans ce selecteur (créée au  préalable dans le fichier index.html)
  templateUrl: './app.component.html', => Indique que l'on souhaite ecrire le contenue dans ce fichier
  styleUrls: ['./app.component.css'] => Chemin dans lequel ce trouve le fichier css
})
export class AppComponent { => La logique se fera dans la classe
  name = 'getting-started'; => variable dont on peut afficher le contenue comme suis : <h1>Welcome to {{ title }}!</h1>
}

- Les directives
Un exemple de directive : <input type="text" [(ngModel)]="name"><p>{{name}}</p>
[()] est la syntaxe pour ecrire une directive. Ici [(ngModel)] agit comme onChange de React. Il indique que la valeur qui est entrée dans le champs doit etre lié a la variable qui porte ce nom 
En l'état, cette directive ne fonctionne pas. Il faut indiquer a TS où la trouver et pour cela, on regarde le fichier app.module.ts.

- Le Fichier app.module.ts
Il se presente comme ceci :

port { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms' => Necessaire a TS pour que la directive ci-dessus fonctionne

import { AppComponent } from './app.component';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ => C'est ici qu'on liste tous les modules importées dont on a besoin pour ce composant
    BrowserModule,
    FormsModule
  ],
})
export class AppModule { }


