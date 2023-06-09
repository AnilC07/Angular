import { Component,OnInit } from '@angular/core';
import { AccountService } from './account-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts: {name:string,status:string}[]=[]


constructor(private accountService: AccountService){}

ngOnInit(){
this.accounts = this.accountService.accounts
}

onAccountAdded(event:Event){}
}
