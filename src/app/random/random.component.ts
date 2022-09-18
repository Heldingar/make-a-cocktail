import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  urlRandom = "https://thecocktaildb.com/api/json/v1/1/random.php"
  cocktails = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<any>(this.urlRandom).subscribe(data => {

      console.log(data);

    })
  }


}
