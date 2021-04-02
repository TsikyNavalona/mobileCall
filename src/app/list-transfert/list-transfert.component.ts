import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TransfertService } from '../services/transfert.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MobilemoneyreelService } from '../services/mobilemoneyreel.service';

@Component({
  selector: 'app-list-transfert',
  templateUrl: './list-transfert.component.html',
  styleUrls: ['./list-transfert.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListTransfertComponent implements OnInit {

  list_Transfert : any = [];
  error_msg:string = '';
  message:string = '';
  constructor(private activatedRoute: ActivatedRoute,public mmrServ : MobilemoneyreelService,public transfertServ : TransfertService, public router : Router) { }

  ngOnInit(): void {
    this.afficherTransfert();
  }
  afficherTransfert() {

    const success = (response : any) => { 
       if (response['code'] == 200) {
        this.list_Transfert = response["data"];
        this.list_Transfert = this.list_Transfert.map( (item : any) => {
          item.show = true;
          console.log(this.list_Transfert);
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
    this.transfertServ.GetAllTransfert().subscribe(success, error);
  }
}
