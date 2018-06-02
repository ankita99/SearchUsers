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
  p: number = 1;
  total_count;
  
  constructor(private _userService : UserService) { 
    this.users={};
    this.users.items=[];
    this.users.total_count=0;
    this.searchText="";
  }

  ngOnInit() {
  }

  getUsers(searchText1){
    if(searchText1.length>0){
      this._userService.getUsers(searchText1)
      .subscribe( resUserData => this.users = resUserData,
                  error => this.errorMsg = error);
    }else{
      this.users.total_count=0;
    }
}


  sortUsers(prop: string) {
    this.path = prop.split('.')
    this.order = this.order * (-1); 
    return false;
  }
}