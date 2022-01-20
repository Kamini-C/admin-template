import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/user/auth.service';
import Swal from 'sweetalert2';

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

  /*** Delete Student ***/
  delete(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.auth.deleteStudent(id).subscribe(
          (res)=>{
            Swal.fire(
              'Deleted!',
              'Your Record has been deleted.',
              'success'
            )
            this.getStudent();
          },
          err=>{
            Swal.fire(
              'Try Again!',
              'Something Went Wrong.',
              'error'
            )

          }
        )
        
      }
    })
  }

}
