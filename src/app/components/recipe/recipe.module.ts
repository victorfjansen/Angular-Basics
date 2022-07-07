import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecipeComponent } from './recipe.component';

@NgModule({
  declarations: [RecipeComponent],
  exports: [RecipeComponent],
  imports: [CommonModule],
})
export class RecipeModule {}
