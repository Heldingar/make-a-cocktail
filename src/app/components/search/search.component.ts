import { Component, OnInit, Injectable, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewChecked } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  apiUrl = "https://cocktails-db-backend.vercel.app/api/name/"
  anyResults: boolean = false
  len: any
  selectField: FormControl = new FormControl()
  cocktailObj: any = {}

  mybreakpoint: number=1;
  rowH: string="2:1";

  constructor(private http: HttpClient, ) {
  }
  ngOnInit(): void {
    this.mybreakpoint = (window.innerWidth <= 600) ? 1 : 2;
    this.rowH = (window.innerWidth <= 600) ? "6:9" :"8:5";
    this.http.get<any>(this.apiUrl + "spritz").subscribe(data => {
      this.len = data.data.length
      if (this.len < 1) { console.log("Nessun risultato"); return this.anyResults = false }
      this.anyResults = true

      this.cocktailObj = data.data

      return 0
    })
  }
  handleSize(event:any) {
    this.mybreakpoint = (event.target.innerWidth <= 600) ? 1 : 2;
    this.rowH = (event.target.innerWidth <= 600) ? "6:9" :"9:5";
  }
  search(name: string): any {

    this.http.get<any>(this.apiUrl + name).subscribe(data => {
      this.len = data.data.length
      if (this.len < 1) { console.log("Nessun risultato"); return this.anyResults = false }
      this.anyResults = true

      this.cocktailObj = data.data

      return 0
    })


  }
  sendDetails(data: any) {
    console.log(data);

  }



}
