import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInputRef: ElementRef<HTMLInputElement>;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  onAddItem(): void {
    this.shoppingListService.addIngredient(
      new Ingredient(
        this.nameInputRef.nativeElement.value,
        Number.parseInt(this.amountInputRef.nativeElement.value, 10)
      )
    );
  }

}
