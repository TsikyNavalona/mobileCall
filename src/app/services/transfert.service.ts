import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class TransfertService {

  constructor(private http : HttpClient, private HelperServ : HelperService) { }

  
  GetAllTransfert(){
    return this.http.get('http://mobile-call.herokuapp.com/' + 'api/transfert/all');
  }
  
  GetTransfertEnAttente(){
    return this.http.get('http://mobile-call.herokuapp.com/' + 'api/transfert/enattente');
  }
  UpdateTransfert(id : string ,date : string){
    const body = new HttpParams()
      .set('id', id)
      .set('date',date)
  
    return this.http.put('http://mobile-call.herokuapp.com/' + 'api/transfert/updateAttente',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }
}
