import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../service/users-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
users:string[]

  constructor(private usersService: UsersService) {}

  ngOnInit(){
    this.users = this.usersService.inactiveUsers
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id)
  }
}
