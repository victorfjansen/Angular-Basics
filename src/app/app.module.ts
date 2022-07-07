import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { RecipeModule } from './components/recipe/recipe.module';
import { StructuralModule } from './structural/structural.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StructuralModule,
    ComponentsModule,
    RecipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
