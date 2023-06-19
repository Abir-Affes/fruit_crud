import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FruitsModule } from './fruits/fruits.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './cars/edit/edit.component';
import { CategoriesModule } from './categories/categories.module';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FruitsModule,
    HttpClientModule,
    CategoriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
