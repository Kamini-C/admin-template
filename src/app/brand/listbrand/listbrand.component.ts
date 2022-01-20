import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/shared/brand/brand.service';

@Component({
  selector: 'app-listbrand',
  templateUrl: './listbrand.component.html',
  styleUrls: ['./listbrand.component.css']
})
export class ListbrandComponent implements OnInit {
  brands = []

  constructor(private brandservice : BrandService) { }

  ngOnInit(): void {
    this.getbrands()
  }
  getbrands(){
    this.brandservice.listBrand().subscribe(
      (res:any)=>{
        // console.log(res.response.brand)
        this.brands = res.response.brand 
      },
      err=>{

      }
    )
  }

}
