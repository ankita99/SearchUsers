import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css'],
  inputs:['username']
})
export class RepoDetailsComponent implements OnInit {
  public username:string;
  userDetails;
  isSelected=false;
  
  constructor(private _userService : UserService) { }

  ngOnInit() {
  }
  getDetails(username){
    this._userService.getUserDetails(username)
    .subscribe( resUserData => this.userDetails = resUserData);

    this.isSelected=!this.isSelected;
  }
}
