import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class OperateurService {

  constructor(private http : HttpClient, private HelperServ : HelperService) { }
  
  GetAllOperateur(){
    return this.http.get('http://mobile-call.herokuapp.com/' + 'api/Operateur/all');
  }
}
