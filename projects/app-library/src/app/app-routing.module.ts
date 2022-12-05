import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { HomeBookComponent } from './components/home-book/home-book.component';
import { BooksResolver } from './services/books.resolver.service';
const routes: Routes = [
  { path: '', component: HomeBookComponent, resolve:{ books: BooksResolver} },
  { path: 'editBook/:id', component: EditBookComponent },
  { path: 'addBook', component: EditBookComponent },
  { path: 'home', component: HomeBookComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
