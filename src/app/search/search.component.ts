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
  urlRandom = "https://thecocktaildb.com/api/json/v1/1/random.php"
  anyResults: boolean = false
  len: any
  selectField: FormControl = new FormControl()
  cocktailObj: any = { "Name": "Prova", "Ingredients": "lista", "Instructions": "descr", "Thumb": "https://www.thecocktaildb.com/images/media/drink/125w0o1630407389.jpg" }
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {

  }

  search(name: string) :any{

    this.http.get<any>(this.apiUrl + name).subscribe(data => {
      if (this.len < 1) { console.log("Nessun risultato"); return this.anyResults = false }
      this.len = data.data
      this.anyResults = true

      this.cocktailObj.name = data.data[0]["Name"];

      // console.log(this.cocktailObj);
      return this.cocktailObj
    })


  }




}
