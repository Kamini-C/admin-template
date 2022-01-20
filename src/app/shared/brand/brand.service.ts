import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UserauthService } from '../auth/userauth.service';
import { AuthService } from '../user/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  baseUrl: any
  token: any
  constructor(@Inject('baseUrl') _baseurl:any, private userauth : UserauthService, private http: HttpClient ) {
    this.baseUrl = _baseurl
    this.token = userauth.getToken()
   }
   addBrand(form:any){
     var header_object = new HttpHeaders().set('Authorization','Bearer '+this.token)
     return this.http.post(this.baseUrl+"/addBrand",form, { headers: header_object })
   }

   listBrand(){
     var header_object = new HttpHeaders().set('Authorization','Bearer '+this.token)
     return this.http.get(this.baseUrl+"/getBrand",{ headers: header_object})
   }

}
