import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BrandService } from 'src/app/shared/brand/brand.service';

@Component({
  selector: 'app-listbrand',
  templateUrl: './listbrand.component.html',
  styleUrls: ['./listbrand.component.css']
})
export class ListbrandComponent implements OnInit {
  brands = []
  fileUrl=''

  constructor(private brandservice : BrandService, private sanitizer: DomSanitizer, @Inject('fileUrl') _fileurl:any) {
    this.fileUrl = _fileurl
   }

  ngOnInit(): void {
    this.getbrands()
  }
  sanitizerUrl(brand_logo:any){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.fileUrl+'/brand/'+brand_logo)
  }
  getbrands(){
    this.brandservice.listBrand().subscribe(
      (res:any)=>{
        // console.log(res.response.brand)
        this.brands = res.response.brand 
      },
      err=>{
        console.log(err)
      }
    )
  }

}
