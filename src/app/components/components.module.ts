import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecipeModule } from './recipe/recipe.module';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [CommonModule, RecipeModule],
})
export class ComponentsModule {}
