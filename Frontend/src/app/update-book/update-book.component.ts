import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../bookservice.service';
@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  bookItem= {
    title:'',
    author:'',
    genre:'',
    image:''}
 
  constructor(private fb: FormBuilder,private router:Router,private bookService:BookService) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editBookId");
    this.bookService.getBook(bookId).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
  })
  }

  addbookForm = this.fb.group(
    {
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      image: ['', Validators.required]
    }
  )

  editBook()
  {    
    this.bookService.editBook(this.bookItem);   
    alert("Success");
    //this.router.navigate(['book']);
    this.router.navigate(['books']);
  }

}
