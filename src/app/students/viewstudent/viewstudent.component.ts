import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/shared/user/auth.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private auth: AuthService, private spinner: NgxSpinnerService) { }
  id:any
  students:any

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    this.getstudent()
  }
 getstudent(){
   this.spinner.show()
  this.auth.getStudentsById(this.id).subscribe(
    (res:any)=>{
      this.spinner.hide()
      console.log(res.response.data)
      this.students = res.response.data
    },
    err=>{
      this.spinner.hide()
      this.students = []
    }
  )
 }
}
