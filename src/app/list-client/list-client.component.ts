import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../services/user.service';
import { HelperService } from '../services/helper.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListClientComponent implements OnInit {
  list_user : any = [];
  error_msg:string = '';
  message:string = ''; 
  
  constructor(private activatedRoute: ActivatedRoute,public userServ : UserService, public router : Router) { }

  ngOnInit(): void {
    this.afficherClient();
  }
afficherClient() {

    const success = (response : any) => { 
       if (response['code'] == 200) {
        this.list_user = response["data"];
        this.list_user = this.list_user.map( (item : any) => {
          item.show = false;
          console.log(this.list_user);
          return item;  
         })
        // redirection
        // this.router.navigate(['/menu-jour']);
      } else {
        this.error_msg = response['message'];
      }
      //console.log(response);
      console.log(response);
    };
    const error = ( response : any) => {
      this.error_msg = 'Erreur connexion';
    };
    this.userServ.GetAllUser().subscribe(success, error);
  }
}
