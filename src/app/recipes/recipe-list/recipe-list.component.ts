import { Component, OnInit } from '@angular/core';

import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://veryveganrecipes.com/wp-content/uploads/2016/09/Spicy-Tofu-And-Vegan-Enchilada-Bowl-Recipe.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
