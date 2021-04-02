import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http : HttpClient, private HelperServ : HelperService) { }
  CreateOfferFunction(idoperateur : string , nom : string , priorite : string,duree : string , prix :string){
    const options = this.HelperServ.formOption();
    const OfferObject = {
      idoperateur: idoperateur,
      nom:nom,
      priorite: priorite,
      duree: duree,
      prix: prix,
    }
    const object = JSON.stringify(OfferObject);
    console.log(object);
    return this.http.post('http://mobile-call.herokuapp.com/' + 'api/offre/create', object, options);
  }
  
  GetAllOffre(){
    return this.http.get('http://mobile-call.herokuapp.com/' + 'api//offre/all');
  }
  
}
