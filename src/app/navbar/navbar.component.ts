import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import * as ClipboardJS from 'clipboard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() showSidebarEvent = new EventEmitter<boolean>()
  @Output() showCopyUrlEvent = new EventEmitter<boolean>()
  angularRoute:string=""
  url:string=""
  domainAndApp:string=""

  constructor(private loc: Location) {
     this.angularRoute = this.loc.path();
     this.url = window.location.href;
     this.domainAndApp = this.url.replace(this.angularRoute, '');
    console.log(this.domainAndApp);
  }

  showed = false
  ngOnInit(): void {
    const a = new ClipboardJS('.btn');


  }
  share() {
    this.showCopyUrlEvent.emit(true)



  }
  showSidebar() {

    this.showSidebarEvent.emit(this.showed)
    this.showed = !this.showed
  }

}
