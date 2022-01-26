import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserauthService } from '../shared/auth/userauth.service';
import { LoginService } from '../shared/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private toastr: ToastrService, private route: Router, private loginservice: LoginService, private userauth: UserauthService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    //console.log(this.userauth.getToken())
    if (this.userauth.getToken() != null) {
      this.route.navigateByUrl('/layout/home')
    }
  }

  submit() {
    this.spinner.show()
    this.loginservice.login(this.loginForm.value).subscribe(
      (res: any) => {
        // console.log(res.response.status)
        this.spinner.hide()
        let resstatus = res.response.status
        if (resstatus === true) {
          this.userauth.setdata(res.response)
          this.toastr.success('Success', 'Login Successfully');
          this.route.navigateByUrl('/layout/home')
        }
        else {
          this.toastr.error('Error', 'Invalid Credentials')
        }
      },
      err => {
        // console.log(err)
        this.spinner.hide()
        this.toastr.error('Error', 'Invalid Credentials')
      }
    )
    // if(this.loginForm.value.email=="daman@o7services.com" && this.loginForm.value.password=="123456")
    // {
    //   this.toastr.success('Success','Login Successfully');
    //   this.route.navigateByUrl('/layout/home')
    // }else{
    //   this.toastr.error('Error','Invalid Credentials')
    // }
  }

}
