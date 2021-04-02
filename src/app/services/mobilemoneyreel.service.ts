import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { base_url } from 'src/environments/environment';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class MobilemoneyreelService {

  constructor(private http : HttpClient, private HelperServ : HelperService) { }
  GetAllMobileMR(){
    return this.http.get(base_url + 'api/MobileMR/all');
  }
  GetAllLastMobileMR(){
    return this.http.get(base_url + 'api/MobileMR/last');
  }
  InsertMMR(iduser : string , montantmmoneyreel : string){
    const body = new HttpParams()
      .set('iduser', iduser)
      .set('montantmmoneyreel', montantmmoneyreel);
  
    return this.http.post(base_url + 'api/MobileMR/create',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }
}
