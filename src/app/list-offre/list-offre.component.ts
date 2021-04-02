import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { OffreService } from '../services/offre.service';

OffreService

@Component({
  selector: 'app-list-offre',
  templateUrl: './list-offre.component.html',
  styleUrls: ['./list-offre.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListOffreComponent implements OnInit {

  list_Offre : any = [];
  error_msg:string = '';
  message:string = '';
  constructor(private activatedRoute: ActivatedRoute,public offreServ : OffreService, public router : Router) { }

  ngOnInit(): void {
    this.afficherOffre();
  }
  
  afficherOffre() {

    const success = (response : any) => { 
       if (response['code'] == 200) {
        this.list_Offre = response["data"];
        this.list_Offre = this.list_Offre.map( (item : any) => {
          item.show = true;
          console.log(this.list_Offre);
          return item;  
         })
      } else {
        this.error_msg = response['message'];
      }
      console.log(response);
    };
    const error = ( response : any) => {
      this.error_msg = 'Erreur connexion';
    };
    this.offreServ.GetAllOffre().subscribe(success, error);
  }
}
