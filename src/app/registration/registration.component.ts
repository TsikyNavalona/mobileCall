import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { OperateurService } from '../services/operateur.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  name:string='';
  password:string = '';
  operChoose : string='';
  error_msg:string = '';
  message : any = '';
  list_op : any = [];

  constructor(private activatedRoute: ActivatedRoute,public operateurServ : OperateurService,public userServ : UserService, public router : Router) { }

  ngOnInit(): void {
    this.afficherListOperateur();
  }
  ajouter () {
    const onSuccess = (response:any) => {
      if (response['code'] == 200) {
        this.message = 'Ajout ok';
        this.router.navigate(['/']);
      } else {
        this.message = "Some error";
      }
    }

    const onError = (response:any) => {
      
    }

    try {
      this.userServ.InscriptionFunction(this.name,this.operChoose,this.password).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
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
  // $scope.GetData = function(this.operChoose){

  // }
}
