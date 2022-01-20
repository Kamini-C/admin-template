import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/shared/brand/brand.service';

@Component({
  selector: 'app-addbrand',
  templateUrl: './addbrand.component.html',
  styleUrls: ['./addbrand.component.css']
})
export class AddbrandComponent implements OnInit {

  brand = new FormGroup({
    brand_name: new FormControl(),
    brand_logo: new FormControl(),
  })

  constructor(private brandservice: BrandService, private toastr : ToastrService) { }

  ngOnInit(): void {
  }
  uploadLogo(event:any){
    // console.log(event.target.files[0])
    this.brand.patchValue({brand_logo: event.target.files[0]})
  }
  submitBrand(){
    const data = new FormData()

    data.append('brand_name', this.brand.value.brand_name)
    data.append('brand_logo', this.brand.value.brand_logo)

    this.brandservice.addBrand(data).subscribe(
      (res:any)=>{
        console.log(res)
        this.toastr.success('Success','Logo Uploaded Successfully')
      },
      err=>{
        this.toastr.error('Error','Try Again')
      }
    )
  }

}
