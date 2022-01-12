import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  baseUrl='';

  constructor(private http : HttpClient, @Inject('baseUrl') _baseurl:any) {
    this.baseUrl= _baseurl;
   }
   login(form:any){
     return this.http.post(this.baseUrl+"/login",form);
   }
}
