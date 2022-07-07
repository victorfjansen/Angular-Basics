import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecipeComponent } from './recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [RecipeComponent, RecipeListComponent, RecipeDetailComponent, RecipeItemComponent],
  exports: [RecipeComponent],
  imports: [CommonModule],
})
export class RecipeModule {}
