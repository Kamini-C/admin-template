import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:any
  Token:any

  constructor(private http : HttpClient, @Inject('baseUrl') _baseurl:any) { }
}
