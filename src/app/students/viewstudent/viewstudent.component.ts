import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/user/auth.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private auth: AuthService) { }
  id:any
  students:any

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    this.getstudent()
  }
 getstudent(){
  this.auth.getStudentsById(this.id).subscribe(
    (res:any)=>{
      console.log(res.response.data)
      this.students = res.response.data
    },
    err=>{
      this.students = []
    }
  )
 }
}
