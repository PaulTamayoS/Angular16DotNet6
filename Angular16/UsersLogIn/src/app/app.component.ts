import { Component } from '@angular/core';
import { Users } from './models/users';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UsersLogIn';
  users: Users[] = [];

  constructor(private userServices: UsersService) {}

  ngOnInit() : void
  {
    this.userServices
    .getUser()
    .subscribe((result: Users[]) => (this.users = result) );
  }
}
