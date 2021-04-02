import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  name:string='';
  pwd:string = '';
  error_msg:string = '';
  message :string ='';
  response : any;
  constructor(private activatedRoute: ActivatedRoute,public adminServ : AdminService, public router : Router) { }

  ngOnInit(): void {
  }

  loginAdmin(){
    const onSuccess = (response:any) => {
      console.log(response['code']);
      if (response['code'] == 200) {
        this.message = 'Ajout ok';
        //console.log(this.message);
        console.log(response['data']['token']);
        sessionStorage.setItem('tokenAdmin', response['data']['token']);
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
      this.adminServ.LoginAdminFunction(this.name,this.pwd).subscribe(onSuccess, onError);
      
    } catch (err) {
      //this.message = err;
    }
  }
}
