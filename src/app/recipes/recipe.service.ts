import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Vegan Vietnamese Soup',
      'This is a test',
      'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?resize=1250%2C702&ssl=1',
      [
        new Ingredient('Brokkoli', 1),
        new Ingredient('Beans', 5),
      ]
    ),
    new Recipe(
      'Vegan Wrap',
      'This is a test 2',
      'https://avocadopesto.com/wp-content/uploads/2012/04/Raw-Vegan-Recipes-Collard-Wraps.jpg',
      [
        new Ingredient('Oil', 2),
        new Ingredient('Pepper', 15),
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }


}
