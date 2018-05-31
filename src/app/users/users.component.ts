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
  searchText;
  
  constructor(private _userService : UserService) { 
    this.users=[];
  }

  ngOnInit() {
  }

  getUsers(searchText1){
  this._userService.getUsers(searchText1)
  .subscribe( resUserData => this.users = resUserData.items,
              error => this.errorMsg = error);
}

}