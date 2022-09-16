import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktailcard',
  templateUrl: './cocktailcard.component.html',
  styleUrls: ['./cocktailcard.component.css']
})
export class CocktailcardComponent implements OnInit {
@Input() cocktailObjCard:any;

  constructor() { }

  ngOnInit(): void {
  }

}
