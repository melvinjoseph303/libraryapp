import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BooksComponent } from './books/books.component'
//import { BookComponent } from './book/book.component'
import { NewbookComponent } from './newbook/newbook.component';
import {LoginComponent} from './login/login.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AuthorsComponent } from './authors/authors.component'
//import { AuthorComponent } from './author/author.component';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { HomeComponent } from './home/home.component'
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/books',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {path:'add', 
    canActivate: [AuthGuard],
  component: NewbookComponent,
},
{
  path:'update',
   canActivate: [AuthGuard],
  component:UpdateBookComponent
},
{
  path: 'authors',
  component: AuthorsComponent
},
{path:'addauthor', 
  canActivate: [AuthGuard],
  component: NewauthorComponent,
},
{
  path:'updateauthor',
  canActivate: [AuthGuard],
  component:UpdateAuthorComponent
}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
