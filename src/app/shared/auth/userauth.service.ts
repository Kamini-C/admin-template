import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  constructor() { }

  setdata(res:any){
    sessionStorage.setItem('token',res.token)
    sessionStorage.setItem('email',res.email)
    sessionStorage.setItem('name',res.name)
  }
  getToken(){
    return sessionStorage.getItem('token')
  }
  getName(){
    return sessionStorage.getItem('name')
  }
  getEmail(){
    return sessionStorage.getItem('email')
  }
  remove(){
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('email')
  }
}

