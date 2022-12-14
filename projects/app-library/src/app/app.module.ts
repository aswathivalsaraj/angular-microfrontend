import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewBooksComponent } from './components/view-books/view-books.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { HomeBookComponent } from './components/home-book/home-book.component';
import { SharedModule } from 'projects/shared/src/public-api';
import { AppHeaderComponent } from './components/app-header/app-header.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewBooksComponent,
    EditBookComponent,
    HomeBookComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
