import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  users;
  errorMsg;
  constructor(private _userService : UserService) { 
    this.users=[];
  }

  ngOnInit() {
    this._userService.getUsers()
    .subscribe( resUserData => this.users = resUserData.items,
                error => this.errorMsg = error);
  }

}
