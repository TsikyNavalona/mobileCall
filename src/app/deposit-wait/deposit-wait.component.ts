import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TransfertService } from '../services/transfert.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MobilemoneyreelService } from '../services/mobilemoneyreel.service';

@Component({
  selector: 'app-deposit-wait',
  templateUrl: './deposit-wait.component.html',
  styleUrls: ['./deposit-wait.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DepositWaitComponent implements OnInit {

  list_DepWait : any = [];
  error_msg:string = '';
  message:string = '';
  date:any = '';
  constructor(private activatedRoute: ActivatedRoute,public mmrServ : MobilemoneyreelService,public transfertServ : TransfertService, public router : Router) { }

  ngOnInit(): void {
    this.afficherDepotEnAttente();
  }
  
  afficherDepotEnAttente() {

    const success = (response : any) => { 
       if (response['code'] == 200) {
        this.list_DepWait = response["data"];
        this.list_DepWait = this.list_DepWait.map( (item : any) => {
          item.show = true;
          console.log(this.list_DepWait);
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
    this.transfertServ.GetTransfertEnAttente().subscribe(success, error);
  }

  clickAction(id : string , idUser : string , montantmmoneyreel : any,date :any){
    this.updateDepot(id,date);
    //this.insertMMR(idUser,montantmmoneyreel);
  }
  updateDepot(id : string,date:any){
    console.log(id);
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
      this.transfertServ.UpdateTransfert(id,date).subscribe(onSuccess, onError);
      
    } catch (err) {
      //this.message = err;
    }
  }
  
  insertMMR(idUser : string , montantmmoneyreel : any){
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
      this.mmrServ.InsertMMR(idUser,montantmmoneyreel).subscribe(onSuccess, onError);
      
    } catch (err) {
      //this.message = err;
    }
  }
}
