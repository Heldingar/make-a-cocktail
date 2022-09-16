import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menu: string[] = ['Search','Bar','Random','Favourites','Ingredients','Other'];

  constructor() { }

  ngOnInit(): void {
  }

}
