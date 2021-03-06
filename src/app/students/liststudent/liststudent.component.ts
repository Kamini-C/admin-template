import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/user/auth.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx'
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent implements OnInit {
  students =[]
  constructor(private auth: AuthService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getStudent()
  }
  public exportExcel(): void{
    /* table id is passed over here */   
    let element = document.getElementById('pdfContent'); 
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, "angular-student-list.xlsx");
  }
  public exportPdf(): void{
    let DATA:any = document.getElementById('pdfContent');
      
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 350;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        const FILEURL = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 10;
        PDF.addImage(FILEURL, 'PNG', 0, position, fileWidth, fileHeight)
        PDF.save('angular-student-list.pdf');
    });
  }
  getStudent(){
    this.spinner.show()
    this.auth.getStudents().subscribe(
      (res:any)=>{
        this.spinner.hide()
        // console.log(res)
        this.students = res.response.data
      },
      err=>{
        this.spinner.hide()
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
