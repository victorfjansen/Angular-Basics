import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecipeComponent } from './recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [RecipeComponent, RecipeListComponent, RecipeDetailComponent],
  exports: [RecipeComponent],
  imports: [CommonModule],
})
export class RecipeModule {}
