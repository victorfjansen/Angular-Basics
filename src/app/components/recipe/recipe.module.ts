import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecipeComponent } from './recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@NgModule({
  declarations: [RecipeComponent, RecipeListComponent],
  exports: [RecipeComponent],
  imports: [CommonModule],
})
export class RecipeModule {}
