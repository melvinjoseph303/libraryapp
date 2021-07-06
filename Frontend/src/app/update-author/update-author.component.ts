import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorService } from '../authorservice.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {

  authorItem= {
    name:'',
    age:'',
    type:'',
    image:''}
 
  constructor(private fb: FormBuilder,private router:Router,private authorService:AuthorService) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("editAuthorId");
    this.authorService.getAuthor(authorId).subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));
  })
  }

  addauthorForm = this.fb.group(
    {
      name: ['', Validators.required],
      age: ['', Validators.required],
      type: ['', Validators.required],
      image: ['', Validators.required]
    }
  )

  editAuthor()
  {    
    this.authorService.editAuthor(this.authorItem);   
    alert("Success");
    //this.router.navigate(['author']);
    this.router.navigate(['authors']);
  }

}
