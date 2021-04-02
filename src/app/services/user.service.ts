import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient, private HelperServ : HelperService) { }
  LoginFunction(number : string , password : string){
    const body = new HttpParams()
      .set('number', number)
      .set('password', password);
  
    return this.http.post('http://mobile-call.herokuapp.com/' + 'user/login',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }
  
  InscriptionFunction(name : string , idOperateur : string , password : string){
    const options = this.HelperServ.formOption();
    const transferObject = {
      name: name,
      idOperateur:idOperateur,
      password: password
    }
    const object = JSON.stringify(transferObject);
    console.log(object);
    return this.http.post('http://mobile-call.herokuapp.com/' + 'user/create', object, options);
  }

  GetAllUser(){
    return this.http.get('http://mobile-call.herokuapp.com/' + 'user/all');
  }

}
