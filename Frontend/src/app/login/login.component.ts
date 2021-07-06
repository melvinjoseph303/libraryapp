import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // user={uname:'',
  // password:''}

  user={username:'',
  password:''}

  constructor(private _auth: AuthService,
              private _router:Router,private fb:FormBuilder) { }
            
          
 
  ngOnInit() {
  }

  loginUser () {
    
    this._auth.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        localStorage.setItem('role', res.role)
        //this._router.navigate(['/books'])
        this._router.navigate(['/'])
      },
      err => {
        console.log(err);
        //this._router.navigate(['/books'])
        this._router.navigate(['/'])
      }
    ) 
  }

  displayBooks () {
    
    this._auth.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/books'])
      },
      err => {
        console.log(err);
        this._router.navigate(['/books'])
      }
    ) 
  }

  displayAuthors () {
    
    this._auth.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/authors'])
      },
      err => {
        console.log(err);
        this._router.navigate(['/authors'])
      }
    ) 
  }

}
