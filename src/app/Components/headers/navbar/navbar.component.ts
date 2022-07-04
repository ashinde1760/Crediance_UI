import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  sidebar: boolean = false;
  user!: string;
  logUser: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = JSON.stringify(localStorage.getItem('user'));
    // this.user=this.userData.getUsername();
  }

  sideBar() {
    if (this.sidebar == false) {
      this.sidebar = true;
    } else {
      this.sidebar = false;
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  onClickHome() {
    this.router.navigate(['/home']);
    this.sideBar();
  }

  onClicDocMngmnt() {
    this.router.navigate(['/user-mng']);
    this.sideBar();
  }
  onClickBookmarks() {
    this.router.navigate(['#']);
    this.sideBar();
  }
}