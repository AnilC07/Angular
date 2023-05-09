import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params)
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

    // ici params est asynchrone, la fonction va etre lu a linitialisation du composant mais pas executer, elle le sera seulement au changement de quelques chose
    this.route.params.subscribe(params => {
      this.user.id = params['id'];
      this.user.name = params['name']
      console.log(this.user)
    })
  }

}
