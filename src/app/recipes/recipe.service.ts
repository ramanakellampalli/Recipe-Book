import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Biryani',
      'A super-tasty Biryani - just awesome!',
      'https://c1.staticflickr.com/1/473/19951613076_e8f79bd24e_b.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe(
      'Dosa',
      'What else you need to say?',
      'https://c1.staticflickr.com/4/3737/12160134833_b4abc1c22b_b.jpg',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ])
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
