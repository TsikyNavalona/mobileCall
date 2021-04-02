import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { base_url } from 'src/environments/environment';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class TransfertService {

  constructor(private http : HttpClient, private HelperServ : HelperService) { }

  
  GetAllTransfert(){
    return this.http.get(base_url + 'api/transfert/all');
  }
  
  GetTransfertEnAttente(){
    return this.http.get(base_url + 'api/transfert/enattente');
  }
  UpdateTransfert(id : string ,date : string){
    const body = new HttpParams()
      .set('id', id)
      .set('date',date)
  
    return this.http.put(base_url + 'api/transfert/updateAttente',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }
}
