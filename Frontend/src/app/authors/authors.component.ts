import { Component} from '@angular/core';
import { AuthorService } from '../authorservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

  authors=[{
    name:'',
    age:'',
    type:'',
    image:''}]
  
    // book=[{
    //   title:'',
    //   author:'',
    //   genre:'',
    //   image:''}]
  constructor(private router:Router,private authorService: AuthorService,public _auth:AuthService){   
    
  }
  ngOnInit(): void{
    this.authorService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
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
  editAuthor(author:any)
  {
    localStorage.setItem("editAuthorId", author._id.toString());
    this.router.navigate(['updateauthor']);

  }

  deleteAuthor(author:any)
  {
    this.authorService.deleteAuthor(author._id)
      .subscribe((data) => {
        this.authors = this.authors.filter(p => p !== author);
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
