import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HelperService } from '../services/helper.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  number:string='';
  password:string = '';
  error_msg:string = '';
  message:string = ''; 

  txt : String ="";
  list_user : any = [];
  response : any;

  constructor(private activatedRoute: ActivatedRoute,public userServ : UserService, public router : Router) { }

  ngOnInit() : void {
    //this.afficherList();
  }

  login(){
    const onSuccess = (response:any) => {
      console.log(response['code']);
      if (response['code'] == 200) {
        this.message = 'Ajout ok';
        //console.log(this.message);
        console.log(response['data']['token']);
        sessionStorage.setItem('tokenUser', response['data']['token']);
        //User user = JSON.parse(sessionStorage.getItem("dataUser")) as User;
        this.router.navigate(['/home']);
      } else if(response['code']==0) {
        this.message = "Error number phone or password";
        console.log(this.message);
      }
    }

    const onError = (response:any) => {
      
    }

    try {
      this.userServ.LoginFunction(this.number,this.password).subscribe(onSuccess, onError);
      
    } catch (err) {
      //this.message = err;
    }
  }
  // afficherList() {

  //   const success = (response : any) => { 
  //      if (response['code'] == 200) {
  //       this.list_user = response["data"];
  //       this.list_user = this.list_user.map( (item : any) => {
  //         item.show = false;
  //         console.log(this.list_user);
  //         this.txt="okay amzay";
  //         return item;  
  //        })
  //       // redirection
  //       // this.router.navigate(['/menu-jour']);
  //     } else {
  //       this.error_msg = response['message'];
  //     }
  //     //console.log(response);
  //     console.log(response);
  //   };
  //   const error = ( response : any) => {
  //     this.error_msg = 'Erreur connexion';
  //   };
  //   this.userServ.GetAllUser().subscribe(success, error);
  // }

}
