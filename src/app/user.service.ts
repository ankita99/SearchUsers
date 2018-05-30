import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  private _url: string = "https://api.github.com/search/users?q=ankita";

  constructor(private _http: Http){}
  getUsers(){
      return this._http.get(this._url)
          .map((response: Response) => response.json())
          .catch(this.errorHandler);
  }

  errorHandler(error: Response){
      console.error(error);
      return Observable.throw(error || "Server Error");
}
}
