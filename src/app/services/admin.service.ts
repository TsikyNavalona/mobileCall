import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { base_url } from 'src/environments/environment';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient, private HelperServ : HelperService) { }
  LoginAdminFunction(name : string , password : string){
    const body = new HttpParams()
      .set('name', name)
      .set('password', password);
  
    return this.http.post(base_url + 'admin/login',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }
}
