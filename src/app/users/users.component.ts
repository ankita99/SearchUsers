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
  path: string[] = ['login'];
  order: number = 1;
  
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


  sortUsers(prop: string) {
    this.path = prop.split('.')
    this.order = this.order * (-1); 
    return false;
  }
}