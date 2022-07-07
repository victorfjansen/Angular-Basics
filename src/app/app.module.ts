import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructuralModule } from './structural/structural.module';
import { RecipeComponent } from './components/recipe/recipe.component';

@NgModule({
  declarations: [AppComponent, RecipeComponent],
  imports: [BrowserModule, AppRoutingModule, StructuralModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
