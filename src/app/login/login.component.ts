import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
  });

  constructor(private toastr: ToastrService, private route : Router) { }

  ngOnInit(): void {
  }

  submit(){
    if(this.loginForm.value.email=="daman@o7services.com" && this.loginForm.value.password=="123456")
    {
      this.toastr.success('Success','Login Successfully');
      this.route.navigateByUrl('/layout/home')
    }else{
      this.toastr.error('Error','Invalid Credentials')
    }
  }

}
