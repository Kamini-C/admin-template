import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/user/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormModel={
    userName:'',
    userEmail:'',
    userPassword:''
  }
  constructor(private userauth: AuthService, private toastr: ToastrService) { }
  ngOnInit(): void {
  }
  
  submitRegister(){
    
  }

}
