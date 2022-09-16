import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() showSidebarEvent = new EventEmitter<boolean>()
  constructor() { }
  showed = false
  ngOnInit(): void {
  }

  showSidebar() {

    this.showSidebarEvent.emit(this.showed)
    this.showed = !this.showed
  }

}
