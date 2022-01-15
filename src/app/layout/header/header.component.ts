import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthService } from 'src/app/shared/auth/userauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userauth: UserauthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.userauth.remove();
    this.router.navigateByUrl("/login")

  }

}
