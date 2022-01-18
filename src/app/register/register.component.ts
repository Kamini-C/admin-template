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
    name:'',
    email:'',
    password:''
  }
  constructor(private auth: AuthService, private toastr: ToastrService) { }
  ngOnInit(): void {
  }
  
  submitRegister(){
    // console.log(this.registerFormModel)
    this.auth.register(this.registerFormModel).subscribe(
      (res:any)=>{
        // console.log(res)
        if(!res.response.status)
        {
          this.toastr.error('Error','User already Exists')
        }
        else{
          this.toastr.success('Success','User Resgiter Successfully')
        }
        setTimeout(() => {
          location.reload()
        }, 5000);
      },
      err=>{
        console.log(err)
        this.toastr.error('Error','Something went wrong! Try Again')
      }
    )
  }

}
