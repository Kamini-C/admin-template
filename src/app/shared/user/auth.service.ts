import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UserauthService } from '../auth/userauth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: any
  Token: any

  constructor(private http: HttpClient, @Inject('baseUrl') _baseurl: any, private userauth: UserauthService) {
    this.baseUrl = _baseurl
    this.Token = this.userauth.getToken()
  }
  register(form: any) {
    //Set Authorization with Bearer token
    var header_object = new HttpHeaders().set('Authorization', 'Bearer ' + this.Token);
    //Post Register Form's data(form) through API(baseUrl/register) along with Token in Headers
    return this.http.post(this.baseUrl + "/register", form, { headers: header_object })
  }
  getStudents() {
    var header_object = new HttpHeaders().set('Authorization', 'Bearer ' + this.Token);
    return this.http.get(this.baseUrl + "/getStudent", { headers: header_object })
  }
  getStudentsById(id: any) {
    var header_object = new HttpHeaders().set('Authorization', 'Bearer ' + this.Token);
    return this.http.get(this.baseUrl + "/getStudentById/" + id, { headers: header_object })
  }
  deleteStudent(id: number) {
    var header_object = new HttpHeaders().set('Authorization', 'Bearer ' + this.Token);
    return this.http.delete(this.baseUrl + "/deleteStudent/" + id, { headers: header_object })
  }
  updateStudent(id: any, form: any) {
    var header_object = new HttpHeaders().set('Authorization', 'Bearer ' + this.Token);
    return this.http.post(this.baseUrl + "/updateStudent/" + id, form,{ headers: header_object })
  }
}
