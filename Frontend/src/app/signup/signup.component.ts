import { Component, OnInit } from '@angular/core';
import { UserService } from '../userservice.service';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    username: '',
    password: ''
  }
  regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9]+).([a-z]{2,3})(.[a-z]{2,3})?$/

  constructor(private _auth: AuthService,
    private router: Router, private fb: FormBuilder,
    private userService: UserService) { }

    registerForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.email, Validators.pattern(this.regexp)]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      }
    )

  ngOnInit(): void {
  }

  registerUser() {
    this.userService.newUser(this.user).subscribe(
      response => {
        if (response) {         
            this.router.navigate(['/']);
       }
        else {
          console.log("Network Error")
          this.router.navigate(['/register']);
        }
      })
  }

}
