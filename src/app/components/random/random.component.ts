import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  urlRandom = "https://thecocktaildb.com/api/json/v1/1/random.php"
  cocktail = { "Name": "strDrink", "Thumb": "", "Ingridients": "", "Instructions": "strInstructions" }
  cocktails: any[] = []
  constructor(private http: HttpClient) { }
  ingridients:string[]=[]
  ngOnInit(): void {


    this.http.get<any>(this.urlRandom).subscribe(data => {

      console.log(data.drinks);
      this.cocktail.Name = data.drinks[0].strDrink
      this.cocktail.Thumb = data.drinks[0].strDrinkThumb
      this.cocktail.Instructions = data.drinks[0].strInstructions
      this.cocktails.push(this.cocktail)
      let i = 1
      while (true) {

        console.log(data.drinks[0][`strIngredient${i}`]);
        this.ingridients.push(` ${data.drinks[0][`strIngredient${i}`]} ${data.drinks[0][`strMeasure${i}`]}`.replace("null"," "))
        i++
        if (data.drinks[0][`strIngredient${i}`] == null && data.drinks[0][`trMeasure1${i}`] == null) {
          console.log(this.ingridients);

          break
        }

      }
    })
  }


  randomize() {
    this.ingridients=[]
    this.http.get<any>(this.urlRandom).subscribe(data => {

      console.log(data.drinks);
      this.cocktail.Name = data.drinks[0].strDrink
      this.cocktail.Thumb = data.drinks[0].strDrinkThumb
      this.cocktail.Instructions = data.drinks[0].strInstructions
      this.cocktails.push(this.cocktail)
      let i = 1

      while (true) {

        console.log(data.drinks[0][`strIngredient${i}`]);
        this.ingridients.push(`${data.drinks[0][`strIngredient${i}`]} ${data.drinks[0][`strMeasure${i}`]}`)
        i++
        if (data.drinks[0][`strIngredient${i}`] == null && data.drinks[0][`trMeasure1${i}`] == null) {
          console.log(this.ingridients);

          break
        }

      }
    })
  }

}
