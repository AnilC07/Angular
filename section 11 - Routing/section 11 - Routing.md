## Section 11 - Routing

<p style="color:red">Pour ajouter le routing de Angular tout cela se passe dans le app module

import { Routes, RouterModule } from '@angular/router'; => faire les imports necessaires
...
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouter)
  ],
  ...

définir une constante pour y indiquer les routes qu'on souhaite que angluar watch

const appRouter: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'servers', component: ServersComponent}
] => y preciser le path ainsi que le composant a charger pour ce path

Dans le HTML, a l'endroit ou l'on souhaite afficher le composant, on ajoute la directive suivante (qui ressemble a un composant)
<router-outlet></router-outlet>

pour rendre les liens actifs, il faut ajouter au anchor la propriete 'routerLink' de Angular (sans le "/")
si on veut indiquer qu'on est sur le lien actif, ajouter la propriete routerLinkActive et preciser la class css que l'on veu appliquer

Si  on a une liste de lien, on peut mettre le routeractivelink sur le li

pour une navigation programma&tique, il faut appeler le Router dans le consstructor afin d'utiliser router.navigate :
    this.router.navigate(['servers'])

Si un par exemple, on est sur la page principale ('/'), pour acceder a '/something' on a pas besoin de preciser le '/'. mais si on se trouve sur '/servers' et que l'on souaite recarger le composant, si on ne met pas le '/', il va automatiquement se rendre sur la page '/servers/something'

Avec la navigation programma&tique, router.navigate ne sais pas a quel niveau de l'app il est donc il va automatiquement etre relative a '/'. on peut lui passer un second argument, un objet avec la propriete 'relativeTo' est instancier 'ActivatedRoute' dans le  constructor pour recuperer la route active
