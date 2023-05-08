import { Component } from '@angular/core';
import { UsersService } from './service/users-service.service';
import { CountService } from './service/count-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activeUsers: String[] = [] // I think something wrong with the type
  inactiveUsers: String[] = [] // I think something wrong with the type
  counts: number = 0;



  constructor(private usersService: UsersService) { }

  ngOnInit() {

    this.activeUsers = this.usersService.activeUsers
    this.inactiveUsers = this.usersService.inactiveUsers
  }

}
