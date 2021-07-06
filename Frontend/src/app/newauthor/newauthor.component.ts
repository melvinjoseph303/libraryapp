import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IAuthor } from '../authormodel';
import { AuthorService } from '../authorservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {

  constructor(private fb: FormBuilder,private authorService: AuthorService,private router: Router){  } 
  authorItem= {
    name:'',
    age:'',
    type:'',
     image:''}
 // productItem: IProduct;
 addauthorForm = this.fb.group(
  {
    name: ['', Validators.required],
    age: ['', Validators.required],
    type: ['', Validators.required],
    image: ['', Validators.required]
  }
)
  ngOnInit() {
  }
  AddAuthor()
  {    
    this.authorService.newAuthor(this.authorItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/authors']);
  }

}
