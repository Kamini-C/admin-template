import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthService } from '../shared/auth/userauth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private userauth: UserauthService, private router: Router) { }

  ngOnInit(): void {
    if(this.userauth.getToken() == null){
      this.router.navigateByUrl('/login')
    }
  }


}
