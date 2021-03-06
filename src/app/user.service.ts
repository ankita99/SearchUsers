import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  private _apiurl: string = "https://api.github.com/search/users?q=";
  private _reposurl: string = "https://api.github.com/users/";
  private _clientId: string ="aefd9ea9c21cdf6bdb6c";
  private _client_secret: string ="7f28a3b8a4f97da7dbb81a8389d7adacb69007b7";

  /*parse = require('parse-link-header');
  linkHeader;
  parsedLink;*/
 

  constructor(private _http: Http){
    //this.linkHeader ="";
    //this.parsedLink={};
  }

  /*parseLink(searchText){
    this.linkHeader =
    '<https://api.github.com/search/users?q='+searchText+'&page=2&per_page=10>; rel="next", ' +
    '<https://api.github.com/search/users?q='+searchText+'&page=1&per_page=10>; rel="prev"; pet="cat", ' +
    '<https://api.github.com/search/users?q='+searchText+'&page=3&per_page=10>; rel="last"'
   
    let parsed = this.parse(this.linkHeader);
    return parsed;
  }

  getAllUsers(searchText){
    
    this.parsedLink = this.parseLink(searchText)
    let params = new URLSearchParams();
    params.set('client_id', this._clientId);
    params.set('client_secret', this._client_secret);
    let reqOptions = new RequestOptions();
    reqOptions.search =params;
      return this._http.get(this.parsedLink.prev.url,reqOptions)
          .map((response: Response) => response.json())
          .catch(this.errorHandler);
  }*/

  getUsers(searchText){
    let params = new URLSearchParams();
    params.set('client_id', this._clientId);
    params.set('client_secret', this._client_secret);
    let reqOptions = new RequestOptions();
    reqOptions.search =params;
      return this._http.get(this._apiurl+searchText,reqOptions)
          .map((response: Response) => response.json())
          .catch(this.errorHandler);
  }

  getUserDetails(username){
    let params = new URLSearchParams();
    params.set('client_id', this._clientId);
    params.set('client_secret', this._client_secret);
    let reqOptions = new RequestOptions();
    reqOptions.search =params;
      return this._http.get(this._reposurl+username+"/repos",reqOptions)
          .map((response: Response) => response.json())
          .catch(this.errorHandler);
  }
  
  errorHandler(error: Response){
      console.error(error);
      return Observable.throw(error || "Server Error");
}
}
