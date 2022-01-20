import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/user/auth.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {
  id:any
  registerFormModel={
    name:'',
    email:'',
    password:''
  }

  constructor(private auth: AuthService, private route: ActivatedRoute,private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    this.getstudent()
  }
  getstudent(){
    this.auth.getStudentsById(this.id).subscribe(
      (res:any)=>{
        console.log(res.response.data)
        this.registerFormModel.name = res.response.data.name
        this.registerFormModel.email = res.response.data.email

      },
      err=>{

      }
    )
   }

   submitUpdate(){
    // console.log(this.registerFormModel)
    this.auth.updateStudent(this.id,this.registerFormModel).subscribe(
      (res:any)=>{
        // console.log(res)
        if(!res.response.status)
        {
          this.toastr.error('Error','User already Updated')
        }
        else{
          this.toastr.success('Success','User Updated Successfully')
        }
        this.router.navigateByUrl('/layout/liststudent')
      },
      err=>{
        console.log(err)
        this.toastr.error('Error','Something went wrong! Try Again')
      }
    )
  }   

}
