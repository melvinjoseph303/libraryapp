import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BookService } from '../bookservice.service';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books= {
    title:'',
    author:'',
    genre:'',
    image:''}

  book= {
    title:'',
    author:'',
    genre:'',
    image:''}
    constructor(private router:Router,private bookService: BookService,public _auth:AuthService){   
    
    }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editBookId");
    this.bookService.getBook(bookId).subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
  })
  }
  getBooks(){
    this.bookService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })
  this.router.navigate(['books']);
  }

  getBook(book:any)
  {    
    this.bookService.getBook(this.book);   
    alert("Success");
    this.router.navigate(['/book']);
  }

  editBook(book:any)
  {    
    this.bookService.editBook(this.book);   
    alert("Success");
    this.router.navigate(['book']);
  }

  deleteBook(book:any)
  {    
    this.bookService.deleteBook(this.book);   
    alert("Success");
    this.router.navigate(['books']);
  }


}
