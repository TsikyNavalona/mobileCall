import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }
  formOption (use_authorization = false) {
    const options = { 
      headers: {
        'Content-Type' : 'application/json'
      }
    };
    
    // if (use_authorization) {
    //   options['headers']['Authorization'] = 'Bearer ' + user.token;
    // }
    return options;
  }
  makeBody (json:any) {
    let body = [];
    for (let key in json)
      body.push(key + '=' + json[key]);
    return body.join('&');
  }
}
