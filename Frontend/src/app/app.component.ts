import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library';
  constructor(public _auth:AuthService,
    private _router:Router){

}
logoutUser()
{
localStorage.removeItem('token')
//this._router.navigate(['/books'])
this._router.navigate(['/'])
}
// loggedUser()
// {
//   this._router.navigate(['/add'])
// }
displayBooks()
{
  this._router.navigate(['/books'])
}
displayAuthors()
{
  this._router.navigate(['/authors'])
}
displayAddbook()
{
  this._router.navigate(['/add'])
}
displayAddauthor()
{
  this._router.navigate(['/addauthor'])
}
}
