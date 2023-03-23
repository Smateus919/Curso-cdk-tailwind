import { Component, OnInit } from '@angular/core';
import { faQuestionCircle, faBell, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  public isOpenMenu = false;
  public faQuestionCircle = faQuestionCircle;
  public faBell = faBell;
  public faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

}
