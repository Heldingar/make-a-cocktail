import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktailcard',
  templateUrl: './cocktailcard.component.html',
  styleUrls: ['./cocktailcard.component.css']
})
export class CocktailcardComponent implements OnInit {
  @Input() cocktailObjCard: any;
  @Input() i: any;


  ingridients: string[]
  instructions:string
  constructor() {
    this.ingridients = []
    this.instructions=""
  }

  ngOnInit(): void {
    this.ingridients = this.cocktailObjCard.Ingredients.split(",")
    this.ingridients.pop()

    this.instructions=this.cocktailObjCard.Instructions

  }

}
