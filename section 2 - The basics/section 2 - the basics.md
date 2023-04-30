1 - installer BootStrap

- npm i --save bootstrap@3 => si on souhaite une version specifique
- Pour prioriser le style de bootstrap modifier le fichier 'angular.json' ajouter ce qui suit:
  ...
  "styles": ["node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"],
  ...

2 - Comment fonctionne Angular

- <app-root></app-root> est un point d'entrée pour notre composant. Présent dans le fichier html

- Le fichier app.component.ts
  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  }) => Ceci est un décorateur (voir le cour sur TS)

- Tous le script qui est ecris, est injecté par le CLI dans le navigateur. Le premier fichier a etre injetcté et le main.ts.

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
platformBrowserDynamic().bootstrapModule(AppModule) => La ligne la plus importante de ce fichier
.catch(err => console.error(err));

=> Passe le module bootstrap a app.module.ts via ce fichier

- Une app Angular est une suite de composants qui forme une app

- Appcomponent et le composant racine. Il a un point d'entrée dans le index.html. tous les autres composants auront eux un point d'entrée dans le html de ce composant racine.

- Si on créée un composant, on l'ajoute dans un sous dossier dans le dossier app

- Crééé un compopsant avec la ligne de commande : ng g(generate) c(component) + name

3 - Data Binding

- Data binding = communication
- Different type de Data binding :

  - Le data output : sortir les donnees de typescript pour les afficher dans le template :
    - string interpollation ({{data}})
    - Property Binding ([property]="data")
  - Event Binding ((event) = "expression")
  - Two-way binding (combination of both) ([(ngModel)]="data")

    3.1 - String interpollation

  - Avec le string interpollation ( {{data}} ) on peut ecrire n'importe qu'elle expression du moment que ca retourne un resultat qui peut etre rendu en chaine de caractere
  - on ne peut ecrire de bloc if ou for mais des expression ternaire

    3.2 - Property binding

  - Le data binding permet de lier un attribut d'un element du DOM a une propriete TS:
    servers.component.ts:

        export class ServersComponent {
        allowNewServer = false;

constructor(){
setTimeout(()=>{
this.allowNewServer = true;
},2000)
}}

servers.component.html:
<button class="btn btn-primary" [disabled]="!allowNewServer">Add server</button>

=> L'etat de la propriete est liée a la propriete TS

3.3 - Dans quel cas utiliser la string interpollation ou le property binding

- Si on veut imprimer un resultat dans le DOM, on utilise la string interpolation
- Si on veut agir avec des element du DOM, on utilise le property binding

  3.4 - Event binding
  Exemple :
  <button class="btn btn-primary" (click)="onCreateServer()">Add server</button>
  => entre () le nom de l'evenement comme on le trouve dans le html puis la methode a executer
  => Pointe vers la fonction qui nous interesse dans la classe:
  onUpdateServerName(event: any) {
  this.serverName = event.target.value;
  }
  Autre exemple avec le two-way binding:
  Pour cela importer FormsModule dans le fichier app.module.ts et le rentrer dans les imports. Puis utiliser la liaison comme suit:
  <input type="text" name="server" class="form-control" [(ngModel)]="serverName">

4 - Directives

1. Les directives sont des instructions pour le DOM
2. Quelsues directives livré avec Angular:

- Le rendu conditionnel: Il se nomme ngIf et s'ecrit '\*ngIf'

* est utilise car le rendu conditionnel est structural, il change le contenue du DOM :
<p *ngIf="serverCreated">Server was created, server name is {{serverName}}</p>

-
 Le conditioneal style :
 Il existe l'attribut ngStyle mais egalement l'ecriture [ngStyle]. Il prend un objet ({}) avec les styles ({backgroundColor: "..."}). ou ({backgroundColor: getColor()}), quoi quil en soit, il doit retourner un string. Exemple:
 <p [ngStyle]="{color:getColor()}">Server with ID 1254 is  {{serverStatus}}</p>
 Il en est de meme pour ngClass:
 <p [ngClass]="{online: serverStatus === 'online'}"
[ngStyle]="{backgroundColor:getColor()}">Server with ID 1254 is {{serverStatus}}</p>
La propriete prend un objet ({key:value})
key => le nom de la classe
value => la condition a respecter pour ajouter la classe ou l'enlever


