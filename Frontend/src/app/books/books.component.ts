import { Component} from '@angular/core';
import { BookService } from '../bookservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  books=[{
    title:'',
    author:'',
    genre:'',
    image:''}]
  
    // book=[{
    //   title:'',
    //   author:'',
    //   genre:'',
    //   image:''}]
  constructor(private router:Router,private bookService: BookService,public _auth:AuthService){   
    
  }
  ngOnInit(): void{
    this.bookService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })
  }
  // getBook(book:any){
  // //   let bookId = localStorage.getItem("id");
  // //   this.bookService.getBook(bookId).subscribe((data)=>{
  // //     this.book=JSON.parse(JSON.stringify(data));
  // //     this.router.navigate(['/this.book._id']);
  // // })
  // localStorage.setItem("getBookId", book._id.toString());
  // this.router.navigate(['book']);  
  // }
  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['update']);

  }

  deleteBook(book:any)
  {
    this.bookService.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(p => p !== book);
      })

  }

  // deleteBook(book:any)
  // {
  //   // this.bookService.deleteBook(book._id)
  //   //   .subscribe((data) => {
  //   //     this.books = this.books.filter(p => p !== book);
  //   //   })
  //   localStorage.setItem("deleteBookId", book._id.toString());
  //   this.router.navigate(['remove']);  

  // }

}
