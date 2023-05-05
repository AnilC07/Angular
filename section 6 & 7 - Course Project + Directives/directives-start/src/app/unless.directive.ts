import { Directive, Input, TemplateRef,ViewContainerRef } from '@angular/core';

// Structural dDirectives
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // On doit avoir a la condition comme Input(). On l'implement en tant que setter avec le mot cle 'set' mais ca reste une propriete. elle ne s'execute qu'a un changement exterieur
  @Input() set appUnless(condition: boolean) {
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef)
    }else{
      this.vcRef.clear()
    }
  }
// Dans le constructor, on a besoin de definir un ce qu'ont veut injecter dans le html dans le cas ou la conndition est verifier avec le templateRef (en gro il ajoute un <ng-template></ng-template>) puis dans quel container lajouter avec vcRef
  constructor(private templateRef: TemplateRef<any>, private vcRef:ViewContainerRef) { }

}
