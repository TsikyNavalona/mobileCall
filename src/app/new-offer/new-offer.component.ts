import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../services/user.service';
import { OperateurService } from '../services/operateur.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { OffreService } from '../services/offre.service';
OffreService

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewOfferComponent implements OnInit {
  list_op : any = [];
  message:string = '';
  error_msg:string = '';
  operChoose : string='';
  Offername : string='';
  duration : any='';
  Priority : any='';
  Price : any='';

  constructor(private activatedRoute: ActivatedRoute,public offreServ : OffreService, public operateurServ : OperateurService,public userServ : UserService, public router : Router) { }

  ngOnInit(): void {
    this.afficherListOperateur();
  }
  afficherListOperateur() {

    const success = (response : any) => { 
       if (response['code'] == 200) {
        this.list_op = response["data"];
        this.list_op = this.list_op.map( (item : any) => {
          item.show = true;
          console.log(this.list_op);
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
    this.operateurServ.GetAllOperateur().subscribe(success, error);
  }
  
  CreateOffre(){
    
    const onSuccess = (response:any) => {
      console.log(response['code']);
      if (response['code'] == 200) {
        this.message = 'Ajout ok';
        //User user = JSON.parse(sessionStorage.getItem("dataUser")) as User;
        this.router.navigate(['/homeAdmin']);
      } else if(response['code']==0) {
        this.message = "Error name admin or password";
        console.log(this.message);
      }
    }

    const onError = (response:any) => {
      
    }

    try {
      this.offreServ.CreateOfferFunction(this.operChoose,this.Offername,this.Priority,this.duration,this.Price).subscribe(onSuccess, onError);
      
    } catch (err) {
      //this.message = err;
    }
  }
}
