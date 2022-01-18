import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/user/auth.service';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent implements OnInit {
  students =[]
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.getStudent()
  }
  getStudent(){
    this.auth.getStudents().subscribe(
      (res:any)=>{
        // console.log(res)
        this.students = res.response.data
      },
      err=>{
        this.students=[];
      }
    )
  }

}
